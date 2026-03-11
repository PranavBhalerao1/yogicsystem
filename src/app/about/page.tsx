import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/sections/Section";

export const metadata = {
  title: "About",
  description: "Learn about Yogic System and our holistic wellness approach."
};

const teamCards = [
  {
    title: "Yoga Therapist",
    subtitle: "Body Balance Instructor",
    description: "Qualified and experienced yoga therapists around the world",
    image: "/team/yoga-therapist.jpg"
  },
  {
    title: "Naturopath Consultants",
    subtitle: "Natural Healing Specialists",
    description: "Qualified and experienced naturopath consultants across the world.",
    image: "/team/naturopath.jpg"
  },
  {
    title: "Ayurvedic Doctors",
    subtitle: "Ayurveda Wellness Guides",
    description: "Experts on Ayurveda and related dietary recommendations",
    image: "/team/ayurvedic.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[2.5rem] bg-gradient-to-br from-orange-50 to-white px-6 py-20 text-center text-earth-600 shadow-[0_30px_70px_rgba(15,23,42,0.08)] sm:px-10">
            <h1 className="text-4xl font-semibold text-earth-900 sm:text-5xl lg:text-5xl">
              Lifestyle Redefined
            </h1>
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              <p className="text-lg leading-relaxed">
                At Yogic System, we are a dedicated team of passionate professionals committed to
                helping individuals transform their lifestyles and achieve optimal physical health and
                mental well-being. Rooted in the ancient wisdom of the yogic system, we deliver
                personalized yoga therapy through "Yoga as Medicine" — a scientific approach that
                blends time-tested practices with modern insights.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to empower you to make meaningful, incremental lifestyle changes that
                foster a healthier body and a calmer, more balanced mind. Alongside yoga therapy, we
                offer naturopathy consultations and Ayurvedic dietary guidance, providing a holistic
                approach tailored to support individuals managing various physical and mental
                conditions, including non-communicable diseases (NCDs).
              </p>
              <p className="text-lg leading-relaxed">
                Together, we guide you on a journey toward lasting wellness and balanced living.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-widest text-orange-500">Meet the Experts</p>
          <h2 className="text-2xl font-semibold text-earth-900">Our Team</h2>
          <p className="text-lg leading-relaxed text-earth-600">
            Our team comprises experienced Professionals with Masters degree in Yoga Therapy,
            Bachelor's degree in Naturopathy as well as Masters in Ayurvedic Consultation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {teamCards.map((card) => (
            <Card
              key={card.title}
              className="items-center border border-orange-100 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={140}
                height={140}
                className="h-[140px] w-[140px] rounded-xl object-cover shadow-sm"
              />
              <h3 className="text-lg font-semibold text-earth-800">{card.title}</h3>
              <p className="text-sm font-semibold text-earth-700">{card.subtitle}</p>
              <p className="text-sm text-earth-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
