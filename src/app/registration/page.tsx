import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Therapy Registration",
  description: "Register for yoga therapy sessions with Yogic System."
};

const IN_PERSON_BOOKING_URL = "https://koalendar.com/e/In-person-meet-with-yogic-system";
const ONLINE_BOOKING_URL = "https://koalendar.com/e/online-meet-with-yogic-system";

const WAIVER_TEXT = `I understand that yoga therapy involves the application of yoga techniques and lifestyle principles to support health and well-being. I acknowledge that the effectiveness of yoga therapy depends on my active participation, including my commitment to implementing the practices and lifestyle changes discussed in therapy sessions. I understand that yoga therapy may include physical movement, postures (asanas), breathing techniques (pranayama), meditation, and other supportive practices. I recognize that, as with any physical activity, there are inherent risks, including but not limited to muscle soreness, strain, injury, or other health complications. I agree to listen to my body and take full responsibility for my own well-being during sessions. I will notify my yoga therapist immediately if I experience discomfort, pain, dizziness, or other unusual symptoms. I understand that yoga therapy is not a substitute for medical attention, diagnosis, or treatment. It is not intended to replace the care of my primary healthcare provider. I affirm that I have consulted with a physician regarding my participation in yoga therapy or that I have voluntarily chosen to participate, understanding the potential risks involved. I agree to inform my yoga therapist of any existing medical conditions, injuries, or changes in my health status, including pregnancy, prior to each session. I acknowledge that I am voluntarily participating in yoga therapy sessions with full knowledge of the potential risks involved. I knowingly, voluntarily, and expressly waive any claim I may have now or in the future against Yogic System LLC, its owners, agents, therapists, employees, and independent contractors for any injury, damages, or loss that I may sustain as a result of my participation in yoga therapy sessions. By signing below (or by participating in yoga therapy sessions), I affirm that I have read this release and waiver of liability, fully understand its contents, and voluntarily agree to the terms and conditions stated above.`;

export default function RegistrationPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-16">
        <section className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold text-earth-900 sm:text-5xl">Therapy Registration</h1>
        </section>

        <section>
          <form action="https://formspree.io/f/mnjgpybo" method="POST" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-earth-800" htmlFor="firstName">
                First Name *
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full rounded-lg border px-4 py-3 transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-earth-800" htmlFor="lastName">
                Last Name *
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full rounded-lg border px-4 py-3 transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-earth-800" htmlFor="email">
                Email Address *
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border px-4 py-3 transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-earth-800" htmlFor="phone">
                Phone *
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(201) 555-0123"
                  required
                  className="w-full rounded-lg border px-4 py-3 transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </label>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-earth-900">
                Yoga Therapy Informed Consent and Liability Waiver *
              </h2>
              <div className="max-h-32 overflow-y-auto rounded-lg border bg-gray-50 p-4 text-sm leading-relaxed text-earth-700">
                {WAIVER_TEXT.split("\n").map((line, index) => (
                  <p key={`${line}-${index}`} className={index === 0 ? "" : "mt-3"}>
                    {line}
                  </p>
                ))}
              </div>
              <label className="flex items-start gap-3 text-sm text-earth-800" htmlFor="consent">
                <input id="consent" name="consent" type="checkbox" required className="mt-0.5" />
                <span>I have read and agree to the Terms of Service and Liability Waiver.</span>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        <section>
          <div className="flex flex-col gap-6 md:flex-row md:justify-center">
            <a
              href={IN_PERSON_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 px-10 py-5 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span>Schedule In-Person Appointment</span>
            </a>

            <a
              href={ONLINE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-10 py-5 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span>Schedule Online Appointment</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
