import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Registration", href: "/registration" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 text-sm text-earth-600 md:flex md:items-start md:justify-between md:gap-8">
        <div className="max-w-xs space-y-2">
          <p className="text-lg font-semibold text-earth-900">Yogic System</p>
          <p className="text-sm">Calm, intentional, modern wellness & therapy.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-earth-500">Explore</p>
            {footerLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-earth-600 transition-colors hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-earth-500">Connect</p>
            {footerLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-earth-600 transition-colors hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2 text-earth-600">
          <div className="space-y-3 text-earth-600">
            <p className="text-xs uppercase tracking-widest text-earth-900 font-semibold">
              CONTACT
            </p>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-600" />
              <a
                href="mailto:therapy@yogicsystem.com"
                className="text-sm font-semibold hover:text-orange-600"
              >
                therapy@yogicsystem.com
              </a>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="mt-[2px] h-4 w-4 text-orange-600" />

              <a
                href="https://www.google.com/maps/search/?api=1&query=98+James+St+Suite+100+Edison+NJ+08820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-orange-600"
              >
                98 James St, Suite #100 <br />
                Edison, NJ 08820
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] px-4 py-4 text-xs text-earth-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p>© {new Date().getFullYear()} Yogic System. All rights reserved.</p>
          <p className="text-earth-500">Crafted with calm focus.</p>
        </div>
      </div>
    </footer>
  );
}
