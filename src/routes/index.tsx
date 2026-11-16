import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...pageMeta(
        "Dr. Rajeev's Homeopathy Clinic | Personalised Care",
        "Explore clinic and online consultations, care information, and locations in Ranchi, Patna, Kolkata, and Delhi.",
        "/",
      ),
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Dr. Rajeev's Homeopathy Clinic",
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
