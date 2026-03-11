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
  metadataBase: new URL("https://www.yogicsystem.example"),
  title: {
    default: "Yogic System",
    template: "%s | Yogic System"
  },
  description: "Calm, professional yoga and wellness experiences with Yogic System.",
  openGraph: {
    title: "Yogic System",
    description: "Calm, professional yoga and wellness experiences.",
    url: "https://www.yogicsystem.example",
    siteName: "Yogic System"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-foreground)] antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
