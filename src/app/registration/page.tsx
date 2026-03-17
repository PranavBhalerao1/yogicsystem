import Link from "next/link";
import { Calendar } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Therapy Registration",
  description: "Register for yoga therapy sessions with Yogic System."
};

const IN_PERSON_BOOKING_URL = "https://koalendar.com/e/In-person-meet-with-yogic-system";
const ONLINE_BOOKING_URL = "https://koalendar.com/e/online-meet-with-yogic-system";

const WAIVER_TEXT = `I understand that yoga therapy involves the application of yoga techniques and lifestyle principles to support health and well-being...`;

export default function RegistrationPage() {
  return (
    <>
      {/* reCAPTCHA script */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
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

              {/* Honeypot */}
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
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
                <div className="max-h-32 overflow-y-auto rounded-lg border bg-gray-50 p-4 text-sm text-earth-700">
                  {WAIVER_TEXT}
                </div>
                <label className="flex items-start gap-3 text-sm text-earth-800">
                  <input name="consent" type="checkbox" required />
                  <span>I agree to the waiver.</span>
                </label>
              </div>

              {/* ✅ reCAPTCHA widget */}
              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
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
            <div className="flex flex-col gap-6 md:flex-row md:justify-center">
              <a href={IN_PERSON_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Calendar /> In-Person
              </a>

              <a href={ONLINE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Calendar /> Online
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}