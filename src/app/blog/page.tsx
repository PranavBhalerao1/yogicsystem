import BlogCard from "@/components/BlogCard";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { getPublishedPosts } from "@/lib/notion";

export const metadata = {
    title: "Blog | Subodh Yoga",
    description: "Read the latest insights on yoga, health, and mindfulness.",
};

export const revalidate = 60;

export default async function Blog() {
    const posts = await getPublishedPosts();

    return (
        <div>
            <PageHero
                title="Blog"
                eyebrow="Insights"
                description="Insights on living a balanced and aware life."
            />

            <Section className="bg-white">
                {posts.length === 0 ? (
                    <p className="text-subodhText opacity-70 text-center">
                        No published posts yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </Section>
        </div>
    );
}
