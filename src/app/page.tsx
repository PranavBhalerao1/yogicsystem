"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/sections/Section";
import Link from "next/link";

const services = [
  {
    title: "Spinal & Musculoskeletal Health",
    description: "Back pain, spondylosis, sciatica, arthritis"
  },
  {
    title: "Neurological Conditions",
    description: "Migraines, neuropathy"
  },
  {
    title: "Mental & Emotional Well-being",
    description: "Anxiety, depression, sleep disorders"
  },
  {
    title: "Metabolic & Endocrine Disorders",
    description: "Diabetes, PCOS, thyroid imbalance"
  },
  {
    title: "Respiratory & Immune Health",
    description: "Asthma, allergies, post-COVID fatigue"
  },
  {
    title: "Women's Health",
    description: "Menstrual health, menopause"
  },
  {
    title: "Cardiovascular Support",
    description: "Hypertension, high cholesterol, recovery support"
  },
  {
    title: "Digestive Health",
    description: "IBS, GERD, bloating, colitis"
  },
  {
    title: "Preventive & Lifestyle Wellness",
    description: "Burnout, weight management, stress reset"
  }
];

const tabs = [
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
    bullets: ["Weekly practice refinement", "Therapist feedback and check-ins", "Practice recordings"]
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

const weeklySessionBullets = [
  "Emphasis On Sustainable Lifestyle Changes",
  "Defining Clear Success Outcomes And Wellness Goals",
  "Cultivating A Positive And Mindful Outlook on Life",
  "Step-By-Step Implementation Of Healthy Habits",
  "Encouraging Daily Practice And Active Participation",
  "Detailed Documentation Of Prescribed Yogic Practices",
  "Video Recording Provided For Continued Reference",
  "Weekly Progress Tracking And Therapist Feedback"
];

const optionalServices = [
  {
    title: "Ayurvedic Diet (Optional)",
    description:
      "Personalized dietary guidance rooted in Ayurvedic principles, tailored to your specific health conditions and body constitution.",
    bullets: [
      "Recommended For Most Participants",
      "Expert-Designed Dietary Plans",
      "Compliments Yoga Therapy Effectively",
      "Accelerates Therapeutic Progress",
      "Supports Sustainable Lifestyle Changes",
      "Involves One or Two Focused Sessions"
    ]
  },
  {
    title: "Self-Healing (Optional)",
    description:
      "Enhance your yoga therapy journey with natural self-healing techniques that support the body's innate ability to restore balance and well-being.",
    bullets: [
      "Expert Consultation",
      "Identifying And Addressing Root Causes",
      "Safe, Non-Invasive Therapeutic Approaches",
      "Comprehensive, Whole-Person Care",
      "Preventive Strategies For Long-Term Wellness"
    ]
  },
  {
    title: "Counseling Rooted in Yogic Scriptures",
    description: "Guidance inspired by ancient yogic texts to promote holistic health and well-being.",
    bullets: [
      "Integration Of The Four Paths Of Yoga",
      "Application Of The Pancha Kosha (Five Sheaths) Model",
      "Insights Drawn From Yogic Scriptures",
      "Enhancing The Personal Healing Journey",
      "Tailored, Individualized Solutions",
      "Core Component Of Comprehensive Yoga Therapy"
    ]
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("assessment");
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className="space-y-16 lg:space-y-20">
      <section className="page-section">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 text-center shadow-[0_30px_70px_rgba(15,23,42,0.08)] sm:px-10 lg:px-14">
          <Image src="/logo.svg" alt="Yogic System logo" width={140} height={46} />
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-earth-900 sm:text-5xl lg:text-6xl">
              Lifestyle Redefined.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-earth-600">
              Personalized Yoga Therapy for Modern Medical Conditions
            </p>
          </div>
          <Link href="/services">
            <Button className="px-8 py-6 text-base">Learn More</Button>
          </Link>
        </div>
      </section>

      <Section title="Why Yoga Therapy?">
        <div className="mx-auto max-w-3xl text-center text-base leading-relaxed text-earth-600">
          In today's fast-paced, hyperconnected world, modern lifestyles have silently taken a toll on
          our health. Long hours of screen time, sedentary habits, chronic stress, poor dietary choices,
          and emotional burnout have led to a surge in lifestyle-related medical conditions-from back
          pain and metabolic disorders to anxiety, insomnia, and hormonal imbalances. Yoga therapy offers
          a holistic, personalized approach that integrates movement, breath, and mindfulness to not only
          manage these conditions but also to restore balance, vitality, and long-term well-being. It is
          not just an alternative-it is a necessity for sustainable health in the modern age.
        </div>
      </Section>

      <Section
        title="Our Services"
        description='At Yogic System, we offer personalized yoga therapy through "Yoga as Medicine" - a scientific approach grounded in ancient yogic wisdom. Our focus is on redefining your lifestyle through small, incremental changes that lead to a healthier body and a calmer mind.'
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              className="transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-card-soft"
            />
          ))}
        </div>
      </Section>

      <Section title="Getting Started" description="How Yoga Therapy Works">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => {
              const isActive = tab.id === currentTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    isActive
                      ? "border-orange-200 bg-orange-50 text-orange-600 shadow-sm"
                      : "border-transparent text-earth-600 hover:border-orange-100 hover:bg-orange-50/60 hover:text-orange-600"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="section-panel flex flex-col gap-5 rounded-[1.75rem] px-7 py-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                {currentTab.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-earth-900">{currentTab.heading}</h3>
              <p className="mt-3 text-base text-earth-600">{currentTab.description}</p>
            </div>
            <ul className="grid gap-2 text-sm text-earth-600">
              {currentTab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {currentTab.duration && (
              <p className="text-sm font-semibold text-earth-700">Duration: {currentTab.duration}</p>
            )}
          </div>
        </div>
      </Section>

      <Section title="One-On-One Therapy" description="What's included in your weekly sessions">
        <div className="section-panel rounded-[2rem] px-8 py-8">
          <ul className="grid gap-3 text-sm text-earth-600 md:grid-cols-2">
            {weeklySessionBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-sm font-semibold text-earth-700 sm:flex-row sm:gap-8">
            <p>Recommended Program: 10-12 Sessions</p>
            <p>Session Duration: 60 Minutes</p>
          </div>
        </div>
      </Section>

      <Section title="Optional Services">
        <div className="grid gap-6 lg:grid-cols-3">
          {optionalServices.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              className="flex h-full flex-col gap-4 rounded-[1.75rem] shadow-card-soft"
            >
              <ul className="grid gap-2 text-sm text-earth-600">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
