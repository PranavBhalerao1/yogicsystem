import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function CtaSection({
  title,
  description,
  primaryLabel = "Connect now",
  secondaryLabel = "See offerings"
}: CtaSectionProps) {
  return (
    <section className="page-section">
      <div className="section-panel bg-gradient-to-r from-orange-100 to-white/80 px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-earth-500">Ready</p>
            <h3 className="text-2xl font-semibold text-earth-900">{title}</h3>
            <p className="text-sm text-earth-600">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">{primaryLabel}</Button>
            <Button variant="ghost">{secondaryLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
