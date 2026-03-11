import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";

export const metadata = {
  title: "Blog",
  description: "Fresh notes, reflections, and guidance from Yogic System."
};

const entries = ["Soft rituals for peak focus", "Seasonal breathwork rounds", "Designing calm workdays"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="From the log"
        eyebrow="Blog"
        description="Short, reflective notes on practice, design, and modern living."
      />
      <Section title="Recent notes">
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry}
              className="rounded-[1.25rem] border border-[var(--color-border)] bg-white/80 p-6"
            >
              <p className="text-sm font-semibold text-earth-900">{entry}</p>
              <p className="mt-2 text-sm text-earth-600">Placeholder summary content.</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
