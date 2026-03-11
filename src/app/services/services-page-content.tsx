"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { HeartPulse, Brain, Apple, TrendingUp } from "lucide-react";

type ServiceOverview = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type GettingStartedStep = {
  id: string;
  label: string;
  heading: string;
  description: string;
  bullets: string[];
  duration?: string;
};

type OfferCard = {
  id: string;
  title: string;
  description: string;
  duration: string;
};

const serviceOverview: ServiceOverview[] = [
  {
    title: "Healthy Daily Life",
    description: "Emphasis On Sustainable Lifestyle Changes",
    icon: HeartPulse
  },
  {
    title: "Balance Body & Mind",
    description: "Cultivating A Positive And Mindful Outlook on Life",
    icon: Brain
  },
  {
    title: "Nutrition Strategies",
    description: "Expert-Designed Dietary Plans",
    icon: Apple
  },
  {
    title: "Improving Health",
    description: "Defining Clear Success Outcomes And Wellness Goals",
    icon: TrendingUp
  }
];

const gettingStarted: GettingStartedStep[] = [
  {
    id: "assessment",
    label: "Initial Assessment",
    heading: "Lifestyle Unleashed",
    description:
      "Tell us about your lifestyle, health history, and habits so we can create a personalized plan for you.",
    bullets: [
      "Your Main Health Concerns",
      "Medical History",
      "Family Medical History",
      "Personal History and Dietary Habits",
      "Exercise Routine",
      "Personality Traits",
      "Video Recording of Initial Assessment"
    ],
    duration: "75-90 minutes"
  },
  {
    id: "solution",
    label: "Personalized Solution",
    heading: "A Plan Built Around You",
    description:
      "We translate your assessment into a clear, step-by-step yoga therapy roadmap with measurable outcomes.",
    bullets: [
      "Targeted yogic practices and breathwork",
      "Lifestyle adjustments aligned to your routine",
      "Clear outcomes and progress checkpoints"
    ]
  },
  {
    id: "sessions",
    label: "Weekly Therapy Sessions",
    heading: "Guided Weekly Practice",
    description:
      "One-on-one sessions help you integrate the plan with real-time guidance and accountability.",
    bullets: ["Weekly practice refinement", "Therapist feedback and check-ins", "Practice recordings"],
    duration: "60 Minutes"
  },
  {
    id: "diet",
    label: "Dietary Recommendations",
    heading: "Nutrition That Supports Healing",
    description: "Thoughtful dietary guidance to complement yogic practices and support recovery.",
    bullets: ["Food choices aligned with your condition", "Easy daily meal rhythms", "Sustainable habits"]
  },
  {
    id: "naturopathy",
    label: "Naturopathy Consultation",
    heading: "Holistic Support",
    description:
      "Additional naturopathic insights help address root causes and speed up overall healing.",
    bullets: ["Natural remedies and routines", "Root-cause evaluation", "Supportive lifestyle guidance"]
  },
  {
    id: "counseling",
    label: "Yogic Counseling",
    heading: "Mindset & Emotional Balance",
    description:
      "Counseling rooted in yogic wisdom to strengthen resilience, clarity, and emotional well-being.",
    bullets: ["Mindfulness practices", "Stress management tools", "Values-led habit building"]
  }
];

const offers: OfferCard[] = [
  {
    id: "therapy",
    title: "Yoga Therapy",
    duration: "45–60 Minutes",
    description:
      "Yoga Therapy based on ancient wisdom. Use of Pancha Kosha model for making small, incremental changes in your lifestyle."
  },
  {
    id: "counseling",
    title: "Yogic Counseling",
    duration: "45–60 Minutes",
    description:
      "Yogic counseling based on ancient yogic scriptures, using different paths of yoga."
  },
  {
    id: "nutrition",
    title: "Nutrition Recommendations",
    duration: "45–60 Minutes",
    description:
      "Dietary recommendations based on Ayurveda and Naturopathy as part of integrated yoga therapy."
  }
];

function ServiceIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3c2.5 3.3 4.5 5.7 4.5 8.2A4.5 4.5 0 1 1 7.5 11.2C7.5 8.7 9.5 6.3 12 3Z" />
      <path d="M12 15.5V21" />
      <path d="M9 18h6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mt-0.5 h-5 w-5">
      <path d="m5 12 4.2 4.2L19 6.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ServicesPageContent() {
  const [activeStepId, setActiveStepId] = useState(gettingStarted[0].id);

  const activeStep = useMemo(
    () => gettingStarted.find((step) => step.id === activeStepId) ?? gettingStarted[0],
    [activeStepId]
  );

  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <section>
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-gradient-to-br from-orange-50 to-white px-6 py-20 text-center shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold text-earth-900 sm:text-5xl">Our Services</h1>
            <p className="text-lg text-earth-600">
              At Yogic system, using the ancient wisdom of yoga therapy, we focus on redefining your lifestyle with small incremental changes resulting in healthy body and healthy mind.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-earth-900">Service Overview</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceOverview.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="items-center rounded-2xl border border-orange-100 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-semibold text-earth-900 mt-4">
                  {service.title}
                </h3>

                <p className="text-sm text-earth-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-earth-900">Getting Started</h2>
          <p className="mt-3 text-base text-earth-600">How Yoga Therapy Works</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <nav className="h-fit rounded-xl border border-orange-100 bg-white p-2">
            <ul className="flex flex-col">
              {gettingStarted.map((step) => {
                const isActive = step.id === activeStep.id;
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => setActiveStepId(step.id)}
                      className={`w-full rounded-r-lg px-4 py-3 text-left text-sm font-semibold transition ${isActive
                          ? "border-l-4 border-orange-500 bg-orange-50 text-orange-600"
                          : "border-l-4 border-transparent text-earth-600 hover:bg-orange-50/70 hover:text-orange-600"
                        }`}
                    >
                      {step.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article className="rounded-2xl bg-white p-10 shadow-md">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  {activeStep.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-earth-900">{activeStep.heading}</h3>
                <p className="mt-3 text-base text-earth-600">{activeStep.description}</p>
              </div>

              <ul className="grid gap-3 text-sm text-earth-600">
                {activeStep.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="text-orange-500">
                      <CheckIcon />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {activeStep.duration && (
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-earth-700">
                  <span className="text-orange-500">
                    <ClockIcon />
                  </span>
                  Duration: {activeStep.duration}
                </p>
              )}
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-earth-900">What We Offer</h2>
        </div>

        <div className="space-y-4">
          {offers.map((offer, index) => (
            <details
              key={offer.id}
              className="group rounded-xl border border-orange-100 bg-white p-6 transition hover:shadow-md"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-earth-900">{offer.title}</h3>
                <span className="pt-1 text-orange-500 transition group-open:rotate-180">
                  <ChevronIcon />
                </span>
              </summary>

              <div className="mt-4 space-y-3">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-earth-700">
                  <span className="text-orange-500">
                    <ClockIcon />
                  </span>
                  {offer.duration}
                </p>
                <p className="text-sm text-earth-600">{offer.description}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
