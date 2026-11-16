import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...pageMeta(
        "Dr. Rajeev's The Family Clinic | Complete Care for your Family",
        "Comprehensive family healthcare and homeopathic consultations across Ranchi, Patna, Kolkata, and Delhi. Consult in clinic or online with doorstep medicine delivery.",
        "/",
      ),
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Dr. Rajeev's The Family Clinic",
          telephone: "+91 9234400006",
          email: "globalcare@rajeevclinic.com",
          medicalSpecialty: "Homeopathic",
          address: ["Ranchi", "Patna", "Kolkata", "Delhi"].map((addressLocality) => ({
            "@type": "PostalAddress",
            addressLocality,
            addressCountry: "IN",
          })),
        },
      },
    ],
  }),
  component: HomePage,
});
