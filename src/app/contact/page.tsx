export const metadata = {
  title: "Contact",
  description: "Have a question about yoga therapy? Send us a message."
};

export default function ContactPage() {
  return (
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
          <form action="https://formspree.io/f/xwvrljdo" method="POST">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-earth-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full rounded-lg border border-earth-300 px-4 py-3 text-sm transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-earth-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full rounded-lg border border-earth-300 px-4 py-3 text-sm transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-earth-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-earth-300 px-4 py-3 text-sm transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-earth-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-earth-300 px-4 py-3 text-sm transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
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

        <div className="overflow-hidden rounded-2xl border border-earth-200 bg-white shadow-sm">
          <iframe
            title="Yogic System Clinic Location"
            src="https://www.google.com/maps?q=Yogic+System+Edison+NJ&output=embed" width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}