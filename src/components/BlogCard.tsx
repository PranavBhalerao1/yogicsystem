import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
    post: {
        id: string;
        slug: string;
        title: string;
        date: string;
        preview?: string;
        summary?: string;
        thumbnail?: string;
    };
}

const BlogCard = ({ post }: BlogCardProps) => {
    const parsedDate = new Date(post.date);
    const dateLabel = Number.isNaN(parsedDate.getTime())
        ? post.date
        : parsedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-subodhBlue/5 transition-all hover:shadow-xl hover:shadow-subodhBlue/5 hover:-translate-y-1"
        >
            {post.thumbnail && (
                <div className="aspect-[16/9] overflow-hidden bg-subodhBackground">
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
            )}

            <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold text-subodhOrange uppercase tracking-wider">{dateLabel}</span>
                </div>
                <h3 className="text-xl font-bold text-subodhBlue mb-4 group-hover:text-subodhOrange transition-colors leading-tight">
                    {post.title}
                </h3>
                <p className="text-subodhText opacity-70 text-sm leading-relaxed mb-6">
                    {post.summary || post.preview || "Read the full post."}
                </p>
                <span className="text-sm font-semibold text-subodhOrange flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
};

export default BlogCard;
