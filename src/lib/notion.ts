import { NotionAPI } from "notion-client";
import { getDateValue, getTextContent, idToUuid } from "notion-utils";
import type {
  BlockMap,
  CollectionPropertySchemaMap,
  ExtendedRecordMap,
} from "notion-types";

const notion = new NotionAPI();

export type NotionPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  status?: string;
  summary?: string;
  thumbnail?: string;
};

type NotionCollectionQueryView = {
  collection_group_results?: { blockIds?: string[] };
  blockIds?: string[];
};

type NotionPageBlock = {
  type?: string;
  created_time?: number;
  properties?: Record<string, unknown>;
};

function unwrapNotionValue<T>(input: unknown): T | undefined {
  if (!input || typeof input !== "object") return undefined;
  const maybeValue = (input as { value?: unknown }).value;
  if (!maybeValue || typeof maybeValue !== "object") {
    return maybeValue as T | undefined;
  }
  const nested = (maybeValue as { value?: unknown }).value;
  return (nested ?? maybeValue) as T | undefined;
}

function getDatabasePageId() {
  const pageId = process.env.NOTION_PAGE_ID;
  if (!pageId) {
    throw new Error("Missing NOTION_PAGE_ID environment variable.");
  }
  return idToUuid(pageId);
}

function getAllPageIds(recordMap: ExtendedRecordMap): string[] {
  const collectionQuery = recordMap.collection_query ?? {};
  const views = Object.values(collectionQuery)[0] as
    | Record<string, NotionCollectionQueryView>
    | undefined;

  if (!views) return [];

  const pageIds = new Set<string>();

  for (const view of Object.values(views)) {
    const ids = view?.collection_group_results?.blockIds ?? view?.blockIds ?? [];
    for (const id of ids) {
      if (typeof id === "string") {
        pageIds.add(id);
      }
    }
  }

  return Array.from(pageIds);
}

function getSchemaKeyByName(
  schema: CollectionPropertySchemaMap,
  name: string
): string | null {
  const lowerName = name.toLowerCase();

  for (const [key, value] of Object.entries(schema)) {
    if (value?.name?.toLowerCase() === lowerName) {
      return key;
    }
  }

  return null;
}

function getRawPropertyValue(
  blockValue: NotionPageBlock | undefined,
  schema: CollectionPropertySchemaMap,
  propertyName: string
) {
  const key = getSchemaKeyByName(schema, propertyName);
  if (!key) return undefined;
  return blockValue?.properties?.[key];
}

function getTextProperty(
  blockValue: NotionPageBlock | undefined,
  schema: CollectionPropertySchemaMap,
  propertyName: string
) {
  const raw = getRawPropertyValue(blockValue, schema, propertyName);
  if (!raw) return undefined;
  const text = getTextContent(
    raw as Parameters<typeof getTextContent>[0]
  ).trim();
  return text || undefined;
}

function getDateProperty(
  blockValue: NotionPageBlock | undefined,
  schema: CollectionPropertySchemaMap,
  propertyName: string
) {
  const raw = getRawPropertyValue(blockValue, schema, propertyName);
  if (!raw) return undefined;
  const dateValue = getDateValue(
    raw as Parameters<typeof getDateValue>[0]
  ) as { start_date?: string } | null;
  return dateValue?.start_date;
}

function normalizeImageUrl(url: string) {
  if (!url) return url;

  // handle relative notion URLs
  if (url.startsWith("/")) {
    return `https://www.notion.so${url}`;
  }

  // handle secure.notion-static S3 images
  if (url.includes("secure.notion-static.com")) {
    const encoded = encodeURIComponent(url);
    return `https://www.notion.so/image/${encoded}?table=block&id=thumbnail`;
  }

  return url;
}

function getFileProperty(
  blockValue: NotionPageBlock | undefined,
  schema: CollectionPropertySchemaMap,
  propertyName: string
) {
  const raw = getRawPropertyValue(blockValue, schema, propertyName);
  if (!raw) return undefined;

  if (Array.isArray(raw)) {
    try {
      const url = raw?.[0]?.[1]?.[0]?.[1];
      if (typeof url === "string") {
        return normalizeImageUrl(url);
      }
    } catch {}
  }

  const text = getTextContent(
    raw as Parameters<typeof getTextContent>[0]
  ).trim();

  return text ? normalizeImageUrl(text) : undefined;
}

function normalizePost(
  pageId: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap
): NotionPost | null {
  const pageBlock = unwrapNotionValue<NotionPageBlock>(block?.[pageId]);
  if (!pageBlock || pageBlock.type !== "page") return null;

  const title = getTextProperty(pageBlock, schema, "title");
  const slug = getTextProperty(pageBlock, schema, "slug");
  const date = getDateProperty(pageBlock, schema, "date");
  const status = getTextProperty(pageBlock, schema, "status");
  const summary = getTextProperty(pageBlock, schema, "summary");
  const thumbnail = getFileProperty(pageBlock, schema, "thumbnail");

  if (!title || !slug) return null;

  return {
    id: pageId,
    title,
    slug,
    date: date ?? new Date(pageBlock.created_time ?? Date.now()).toISOString(),
    status,
    summary,
    thumbnail,
  };
}

async function getAllPosts() {
  const databasePageId = getDatabasePageId();
  const recordMap = await notion.getPage(databasePageId);

  const collectionValue = unwrapNotionValue<{ schema?: CollectionPropertySchemaMap }>(
    Object.values(recordMap.collection ?? {})[0]
  );
  const schema = (collectionValue?.schema ?? {}) as CollectionPropertySchemaMap;

  const pageIds = getAllPageIds(recordMap);
  const posts = pageIds
    .map((id) => normalizePost(id, recordMap.block, schema))
    .filter((post): post is NotionPost => Boolean(post));

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return posts;
}

export function isPublishedStatus(status?: string) {
  if (!status) return false;
  const normalized = status.trim().toLowerCase();
  return normalized === "published" || normalized === "public";
}

export async function getPublishedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => isPublishedStatus(post.status));
}

export async function getPostBySlug(slug: string) {
  const posts = await getPublishedPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getRecordMap(pageId: string) {
  return notion.getPage(pageId);
}

export function formatPostDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
