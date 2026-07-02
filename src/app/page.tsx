import { SITE_CONFIG } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WAFloatingButton } from "@/components/ui";
import {
  HeroFrameBackground,
  Hero,
  Promo,
  Menu,
  Branches,
  Location,
  Facility,
  Advantage,
  AboutUs,
  FAQ,
  CTA,
} from "@/components/sections";

/**
 * MAIN PAGE
 * ─────────────────────────────────────────────────────────────────
 * One-page landing page.
 */
export default function HomePage() {
  return (
    <main className="relative bg-brand-bg min-h-screen overflow-x-hidden">
      {/* ── Fixed Scroll-driven Background (Envision Pattern) ────── */}
      <HeroFrameBackground />
      {/* ── Layout ──────────────────────────────────────────────── */}
      <Navbar />

      <Hero />

      {/* ── Other Sections ──────────────────────────────────────── */}
      <Promo />
      <Menu />
      <Facility />
      <Advantage />
      <Branches />
      <Location />
      <AboutUs />
      <FAQ />
      <CTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────────────────────────── */}
      <WAFloatingButton />

      {/* ── Structured Data Store ────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": SITE_CONFIG.name,
            "image": SITE_CONFIG.url + "/bsp.jpg",
            "url": SITE_CONFIG.url,
            "telephone": "+6281234567890",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kota Bandung",
              "addressLocality": "Bandung",
              "addressRegion": "Jawa Barat",
              "addressCountry": "ID"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1530"
            }
          }),
        }}
      />
    </main>
  );
}
