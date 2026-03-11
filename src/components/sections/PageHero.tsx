import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  eyebrow: string;
  description: string;
}

export function PageHero({ title, eyebrow, description }: PageHeroProps) {
  return (
    <section className="page-section">
      <div className="section-panel space-y-4 rounded-[2rem] bg-gradient-to-br from-orange-50/80 to-white/80 p-8 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.5em] text-orange-500">{eyebrow}</p>
        <h1 className="text-3xl font-semibold text-earth-900 md:text-4xl">{title}</h1>
        <p className="max-w-2xl text-base text-earth-600">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Book a session</Button>
          <Button variant="ghost">Download overview</Button>
        </div>
      </div>
    </section>
  );
}
