# Clinic Website Build Plan

## Goal
Replace the template home screen with a complete, polished, mobile-first website for Dr. Rajeev's Homeopathy Clinic, following the supplied brand, content, and medical-claims guidance.

## Build
- Establish the green-and-amber clinic design system, typography, shared header/footer, desktop and mobile navigation, and mobile contact actions.
- Add separate typed data modules for clinic locations, conditions, reviews, FAQs, and blog posts, then build the home page sections in the requested order.
- Add the core pages: About, A–Z Conditions with searchable filters and condition detail pages, About Homeopathy, Results/Success Stories, Appointment, Blog/Updates with article pages, Contact, and the specified book, She & Child Care, and policy pages.
- Provide working phone/WhatsApp/shop links, accessible interactive controls, page-specific metadata, and the home page clinic structured data. Keep appointment submission as an in-page mock confirmation because no backend is connected; label unknown doctor credentials and addresses as replaceable placeholders.
- Use TanStack Start's existing file-based routing and existing shadcn controls, rather than introducing React Router or a second framework.

## Verification
Run the existing routing test, check preview/build diagnostics, and inspect the home and key mobile interactions in the running preview.
