import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing",
  description: "Simple, transparent yoga therapy pricing."
};

const features = [
  "One-on-One Personalized Sessions",
  "Custom Plans for Your Health Needs",
  "1-Year Access to Therapy Video Library"
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-semibold text-earth-900">Pricing</h1>
        <p className="mt-3 text-earth-600">Simple, transparent yoga therapy pricing.</p>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <article className="rounded-3xl border border-earth-200 bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-earth-900">Online Therapy</h2>
          <p className="mt-6 text-5xl font-bold text-earth-900">$75</p>
          <p className="mt-2 text-earth-600">/ week</p>

          <ul className="mt-8 space-y-4 text-earth-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-orange-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="my-8 border-t border-earth-200" />

          <div className="space-y-3 text-earth-700">
            <p>Initial Assessment (75-90 mins): $100</p>
            <p>Ongoing Sessions (60 mins): $75 each</p>
            <p>10 sessions Package : $650 (save $100)</p>
          </div>

          <Link
            href="/registration"
            className="mt-10 block w-full rounded-full bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Register
          </Link>
        </article>

        <article className="relative rounded-3xl border border-earth-200 border-orange-400 bg-white p-10 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs text-white">
            Most Popular
          </span>

          <h2 className="text-2xl font-semibold text-earth-900">In-Person Therapy</h2>
          <p className="mt-6 text-5xl font-bold text-earth-900">$100</p>
          <p className="mt-2 text-earth-600">/ week</p>

          <ul className="mt-8 space-y-4 text-earth-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-orange-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="my-8 border-t border-earth-200" />

          <div className="space-y-3 text-earth-700">
            <p>Initial Assessment (75-90 mins): $120</p>
            <p>Ongoing Sessions (60 mins): $100 each</p>
            <p>10 sessions Package : $850 (save $150)</p>
          </div>

          <Link
            href="/registration"
            className="mt-10 block w-full rounded-full bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Register
          </Link>
        </article>
      </section>
    </main>
  );
}
