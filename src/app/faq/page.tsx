"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Yoga Therapy?",
    answer:
      "Yoga therapy consists of yogic practices such as warm-ups, stretches, breathing techniques, asanas/postures, Pranayama, meditation, and yogic counseling. The main focus is on incremental lifestyle changes."
  },
  {
    question: "How is Yoga Therapy Different from Yoga Classes?",
    answer:
      "Yoga classes generally cover generic yoga practices applicable to everyone and are usually provided in groups. Conversely, yoga therapy provides specific recommendations based on specific medical conditions and is generally provided one-on-one."
  },
  {
    question: "How Does Yoga Therapy Work?",
    answer:
      "We recommend small incremental changes in your lifestyle. As a therapy participant, you practice them on a regular basis and receive the benefit. The success of the therapy is completely dependent on you; the more you practice, the better the result."
  },
  {
    question: "I Don't Have Any Medical Conditions; Could Yoga Therapy Still Help Me?",
    answer:
      "Yoga therapy is all about lifestyle changes and is mostly a preventative measure. Regardless of the medical conditions, therapy can help you remain both physically and mentally healthy."
  },
  {
    question: "Does My Insurance Cover Yoga Therapy?",
    answer: "As of now, insurance does not cover yoga therapy and it must be paid out of pocket."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-semibold text-earth-900">FAQ</h1>
        <p className="mt-3 text-earth-600">Common questions about yoga therapy.</p>
      </section>

      <section className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={faq.question}
              className="rounded-xl border border-earth-200 bg-white px-6 py-5 transition hover:border-orange-300"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-earth-900">{faq.question}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 text-orange-500" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 text-orange-500" aria-hidden="true" />
                )}
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="mt-4 border-t pt-4 text-earth-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
