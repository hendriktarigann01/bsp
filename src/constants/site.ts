/**
 * SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Ganti nilai di sini untuk mengkustomisasi branding per client.
 * Semua section mengambil data dari file ini — tidak ada hardcode.
 */

export const SITE_CONFIG = {
  /** Nama proyek / brand */
  name: "Bali Surfer's Perfume",

  /** Tagline singkat */
  tagline: "Aroma Tropis Khas Bali & Kebebasan Tanpa Batas",

  /** Description untuk SEO */
  description:
    "Bali Surfer's Perfume (BSP) — Parfum Eau de Parfum (EDP) lokal premium dengan keharuman tropis yang fresh aquatic, aquatic-fruity, dan musky-woody. Mengangkat nuansa pantai tropis Bali seperti Blue Point, Kuta 7AM, Dreamland, dan Balangan. BPOM Certified.",

  /** URL canonical */
  url: "https://www.balisurfersperfume.com",

  /** Path logo (Kita gunakan /bsp.jpg render di Navbar/Footer) */
  logo: "/bsp.jpg",

  /** Nomor WhatsApp (format internasional, tanpa +) */
  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Bali Surfer's Perfume, saya tertarik untuk bertanya tentang varian produk atau kemitraan reseller resmi.",
  },

  /** Social media */
  social: {
    instagram: "https://www.instagram.com/balisurfers.perfume/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/@balisurfersperfume",
  },

  /** Google Maps Embed URL (Bali Surfer's Perfume Showroom) */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.272310237911!2d106.72797417475061!3d-6.227784093760346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0aedec66677%3A0x56a3c8d0cc2650be!2sBALI%20SURFER'S%20PERFUME%20SHOWROOM!5e0!3m2!1sen!2sid!4v1782898141614!5m2!1sen!2sid",

  /** Tahun untuk copyright */
  year: new Date().getFullYear(),
} as const;

/** WhatsApp URL builder */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsapp.message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
};
