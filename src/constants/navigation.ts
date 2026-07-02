/**
 * NAVIGATION CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Daftar menu navbar. `href` menggunakan anchor (#section-id).
 * Tidak semua section perlu masuk navbar — sesuaikan sesuai kebutuhan.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Varian", href: "#menu" },
  { label: "Promo", href: "#promo" },
  { label: "Kelebihan", href: "#facility" },
  { label: "Reseller", href: "#branches" },
  { label: "Kontak", href: "#location" },
  { label: "FAQ", href: "#faq" },
];
