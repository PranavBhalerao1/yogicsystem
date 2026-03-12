import type { Metadata } from "next";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NotionContent from '@/components/NotionContent';
import { Section } from "@/components/sections/Section";
import {
    formatPostDate,
    getPostBySlug,
    getRecordMap,
} from '@/lib/notion';

type BlogPostPageProps = {
    params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found | Yogic System" };

    return {
        title: `${post.title} | Yogic System`,
        description: post.summary || "Read this post on Yogic System.",
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const recordMap = await getRecordMap(post.id);

    return (
        <article className="min-h-screen">
            <div className="bg-subodhBackground py-24 sm:py-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/blog" className="text-subodhOrange font-bold mb-8 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>
                    <p className="text-sm font-bold text-subodhOrange opacity-60 uppercase tracking-widest mb-6">
                        {formatPostDate(post.date)}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-subodhBlue tracking-tight leading-tight">
                        {post.title}
                    </h1>
                </div>
            </div>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    {post.summary && (
                        <p className="text-subodhText opacity-75 text-lg mb-12">
                            {post.summary}
                        </p>
                    )}

                    <NotionContent recordMap={recordMap} />

                    <div className="mt-20 pt-12 border-t border-subodhBackground flex justify-between items-center">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-subodhOrange font-bold">YS</div>
                            <div>
                                <p className="text-sm font-bold text-subodhBlue">Yogic System Team</p>
                                <p className="text-xs text-subodhText opacity-40">Lifestyle Redefined</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </article>
    );
}
