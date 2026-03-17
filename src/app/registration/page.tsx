import Link from "next/link";
import { Calendar } from "lucide-react";
import Script from "next/script";
import RecaptchaWidget from "@/components/RecaptchaWidget";

export const metadata = {
  title: "Therapy Registration",
  description: "Register for yoga therapy sessions with Yogic System."
};

const IN_PERSON_BOOKING_URL = "https://koalendar.com/e/In-person-meet-with-yogic-system";
const ONLINE_BOOKING_URL = "https://koalendar.com/e/online-meet-with-yogic-system";

const WAIVER_PARAGRAPHS = [
  "I understand that yoga therapy involves the application of yoga techniques and lifestyle principles to support health and well-being.",
  "I acknowledge that the effectiveness of yoga therapy depends on my active participation, including my commitment to implementing the practices and lifestyle changes discussed in therapy sessions.",
  "I understand that yoga therapy may include physical movement, postures (asanas), breathing techniques (pranayama), meditation, and other supportive practices.",
  "I recognize that, as with any physical activity, there are inherent risks, including but not limited to muscle soreness, strain, injury, or other health complications.",
  "I agree to listen to my body and take full responsibility for my own well-being during sessions. I will notify my yoga therapist immediately if I experience discomfort, pain, dizziness, or other unusual symptoms.",
  "I understand that yoga therapy is not a substitute for medical attention, diagnosis, or treatment. It is not intended to replace the care of my primary healthcare provider.",
  "I affirm that I have consulted with a physician regarding my participation in yoga therapy or that I have voluntarily chosen to participate, understanding the potential risks involved.",
  "I agree to inform my yoga therapist of any existing medical conditions, injuries, or changes in my health status, including pregnancy, prior to each session.",
  "I acknowledge that I am voluntarily participating in yoga therapy sessions with full knowledge of the potential risks involved.",
  "I knowingly, voluntarily, and expressly waive any claim I may have now or in the future against Yogic System LLC, its owners, agents, therapists, employees, and independent contractors for any injury, damages, or loss that I may sustain as a result of my participation in yoga therapy sessions.",
  "By signing below (or by participating in yoga therapy sessions), I affirm that I have read this release and waiver of liability, fully understand its contents, and voluntarily agree to the terms and conditions stated above."
];


export default function RegistrationPage() {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-16">
          <section className="space-y-4 text-center">
            <h1 className="text-4xl font-semibold text-earth-900 sm:text-5xl">
              Therapy Registration
            </h1>
          </section>

          <section>
            <form
              action="https://formspree.io/f/mnjgpybo"
              method="POST"
              className="relative space-y-8"
            >
              <input type="hidden" name="_subject" value="New Therapy Registration" />
              <input type="hidden" name="_gotcha" />

              <div
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="company">
                  Leave this blank
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-earth-800">
                  First Name *
                  <input
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium text-earth-800">
                  Last Name *
                  <input
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium text-earth-800">
                  Email Address *
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium text-earth-800">
                  Phone *
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </label>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-earth-900">
                  Yoga Therapy Informed Consent and Liability Waiver *
                </h2>
                <div className="max-h-24 overflow-y-auto rounded-lg border bg-gray-50 p-4 text-sm leading-relaxed text-earth-700">
                  {WAIVER_PARAGRAPHS.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? "" : "mt-3"}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <label className="flex items-start gap-3 text-sm text-earth-800">
                  <input name="consent" type="checkbox" required />
                  <span>I agree to the waiver.</span>
                </label>
              </div>

              <div className="flex justify-center">
                <RecaptchaWidget />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 px-8 py-3 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>

          <section>
            <div className="flex flex-col gap-4 md:flex-row md:justify-center">

              {/* In-Person (default filled → hover outline) */}
              <a
                href={IN_PERSON_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-orange-600 hover:border hover:border-orange-500"
              >
                <Calendar className="h-4 w-4" />
                In-Person Consultation
              </a>

              {/* Online (default outline → hover filled) */}
              <a
                href={ONLINE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-500 px-6 py-3 text-sm font-medium text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white"
              >
                <Calendar className="h-4 w-4" />
                Online Consultation
              </a>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}