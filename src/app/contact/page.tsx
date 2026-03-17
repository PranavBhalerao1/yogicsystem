import Script from "next/script";

export const metadata = {
  title: "Contact",
  description: "Have a question about yoga therapy? Send us a message."
};

export default function ContactPage() {
  return (
    <>
      {/* reCAPTCHA script */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-semibold text-earth-900">Contact</h1>
          <p className="mt-3 text-earth-600">
            Have a question about yoga therapy? Send us a message.
          </p>
          <p className="mt-4 text-earth-600">
            Prefer email? You can also reach us directly at{" "}
            <a
              href="mailto:therapy@yogicsystem.com"
              className="font-medium text-orange-600 hover:underline"
            >
              therapy@yogicsystem.com
            </a>
          </p>
        </section>

        <section className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-earth-200 bg-white p-10 shadow-sm">
            <form
              action="https://formspree.io/f/xwvrljdo"
              method="POST"
              className="relative"
            >
              <input type="hidden" name="_subject" value="New Contact Message" />
              <input type="hidden" name="_gotcha" />

              {/* Honeypot */}
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <input
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-earth-700">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-earth-700">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-earth-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-earth-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>

                {/* ✅ Message field (important for spam reduction) */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-earth-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>
              </div>

              {/* ✅ reCAPTCHA */}
              <div className="mt-8 flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-earth-900">Visit Our Clinic</h2>
            <p className="mt-2 text-earth-600">
              98 James St, Suite #100, Edison, NJ 08820
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <iframe
              title="Yogic System Clinic Location"
              src="https://www.google.com/maps?q=Yogic+System+Edison+NJ&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </>
  );
}