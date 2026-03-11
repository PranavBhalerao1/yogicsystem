import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("page-section", className)}>
      <div className="mx-auto max-w-6xl space-y-6">
        {title && <h2 className="text-2xl font-semibold text-earth-900 text-center">{title}</h2>}
        {description && <p className="text-base text-earth-600 text-center">{description}</p>}
        <div className="space-y-4 sm:space-y-6">{children}</div>
      </div>
    </section>
  );
}
