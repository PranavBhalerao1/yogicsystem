import BlogCard from "@/components/BlogCard";
import { Section } from "@/components/sections/Section";
import { getPublishedPosts } from "@/lib/notion";

export const metadata = {
    title: "Blog | Yogic System",
    description: "Thoughts on yoga therapy, healing, and mindful living.",
};

export const revalidate = 60;

export default async function Blog() {
    const posts = await getPublishedPosts();

    return (
        <div>
            <section className="bg-[linear-gradient(180deg,#fff_0%,#fbf8f3_100%)] border-b border-black/5">
                <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
                    <div className="mx-auto max-w-3xl rounded-[2rem] border border-black/5 bg-white/80 px-8 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm md:px-12 md:py-16">
                        <h1 className="text-5xl font-semibold tracking-tight text-earth-900 md:text-6xl">
                            Blog
                        </h1>
                        <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-orange-500"></div>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-earth-600">
                            Reflections on yoga therapy, healing, and living with greater awareness.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-white py-14 md:py-20">
                {posts.length === 0 ? (
                    <p className="text-center text-earth-600">No published posts yet.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </Section>
        </div>
    );
}