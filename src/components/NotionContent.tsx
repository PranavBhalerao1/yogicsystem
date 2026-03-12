"use client";

import dynamic from "next/dynamic";
import type { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";

const NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
);

type NotionContentProps = {
  recordMap: ExtendedRecordMap;
};

export default function NotionContent({ recordMap }: NotionContentProps) {
  return (
    <div className="notion-content">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
      />
    </div>
  );
}
