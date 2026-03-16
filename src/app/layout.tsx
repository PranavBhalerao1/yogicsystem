import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Inter, Merriweather } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather"
});


export const metadata: Metadata = {
  metadataBase: new URL("https://yogicsystem.com"),
  title: {
    default: "Yogic System",
    template: "%s | Yogic System"
  },
  description: "Lifestyle Redefined.",

  openGraph: {
    title: "Yogic System",
    description: "Lifestyle Redefined.",
    url: "https://yogicsystem.com",
    siteName: "Yogic System",
    type: "website",

    images: [
      {
        url: "/og-image.png", // preview image
        width: 1200,
        height: 630,
        alt: "Yogic System"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-foreground)] antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
