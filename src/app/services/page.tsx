import type { Metadata } from "next";
import { ServicesPageContent } from "./services-page-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the signature services that make Yogic System unique."
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
