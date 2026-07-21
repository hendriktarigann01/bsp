/**
 * CONTENT CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Semua konten halaman dikelola di sini.
 * Ganti teks, data, dan gambar tanpa menyentuh komponen.
 */

import type {
  HeroContent,
  PromoContent,
  MenuContent,
  BranchContent,
  LocationContent,
  FacilityContent,
  AdvantageContent,
  AboutContent,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@/types";

// ── HERO ─────────────────────────────────────────────────────────
export const HERO_CONTENT: HeroContent = {
  eyebrow:     "Original Bali Surfer's Perfume",
  headline:    "BALI SURFER'S PERFUME",
  subheadline: "Kebebasan & Petualangan Tropis Khas Bali dalam Setiap Semprotan",
  description: "Parfum Eau de Parfum (EDP) lokal premium dengan esensi aromatik berkualitas dunia yang diimpor langsung dari Grasse, Prancis. Menghadirkan kesegaran aquatic pantai tropis yang tahan lama.",
  badge:       "BPOM Certified · Made in Indonesia",
  cta: {
    primary:   "Tanya via Whatsapp",
    secondary: "Lihat Varian Andalan",
  },
  totalFrames: 101,
  frameDir:    "/frame-bsp-parallax",
  frameName:   "frame_",
  slides: [
    {
      id: "slide-blue-point",
      headline: "Blue Point Signature",
      description: "Varian signature aquatic-fresh pertama yang legendaris, terinspirasi dari keindahan laut Blue Point Bali. Memadukan wangi kesegaran laut segar dengan musk maskulin lembut."
    },
    {
      id: "slide-kuta-7am",
      headline: "Kuta 7 AM",
      description: "Membangkitkan energi segar di pagi hari dengan perpaduan citrus jeruk tropis, mint dingin, dan wangi laut yang menenangkan pikiran."
    },
    {
      id: "slide-cliff-him",
      headline: "Cliff Him",
      description: "Wewangian woody mineral yang bold dan maskulin. Menghadirkan kesegaran grapefruit, cedarwood, oakmoss, dan vetiver layaknya hembusan angin tebing pantai selatan."
    },
    {
      id: "slide-papan-selancar-her",
      headline: "Papan Selancar Her",
      description: "Aroma playful tropical gourmand manis-manja. Kombinasi coconut water, sweet mango, tiare flower, dan vanilla cream yang sun-soaked."
    }
  ]
};

// ── PROMO ────────────────────────────────────────────────────────
export const PROMO_CONTENT: PromoContent = {
  eyebrow: "Penawaran Terbatas",
  headline: "Paket Bundling Tropis",
  subheadline: "Nikmati aroma pantai tropis favorit Anda dengan harga lebih hemat dan penawaran reseller khusus.",
  note: "*Syarat & Ketentuan Berlaku. Pembelian langsung via Marketplace atau WhatsApp Kemitraan resmi.",
  groups: [
    {
      id:    "bundling",
      title: "Paket Bundling Hemat 100ml",
      items: [
        "Miliki 2 Varian 100ml favorit Anda seharga Rp 398.000 (hemat Rp 100.000)",
        "Gratis 2 Varian Tester Miniatur (2ml) untuk setiap pembelian botol 100ml",
        "Bebas pilih kombinasi varian di catatan pemesanan",
      ],
    },
    {
      id:    "reseller",
      title: "Paket Kemitraan Reseller Resmi",
      items: [
        "Diskon grosir hingga 30% untuk minimum order 12 botol",
        "Gratis materi promosi digital (foto studio resolusi tinggi & video kreatif UGC)",
        "Sistem kontrol harga eceran nasional agar persaingan tetap sehat",
      ],
    },
    {
      id:    "new-release",
      title: "Promo Launching Varian Baru",
      items: [
        "Diskon 10% untuk varian terbaru: Cliff (Him/Her) & Papan Selancar (Him/Her)",
        "Free ongkir ke seluruh wilayah Pulau Jawa & Bali dengan minimal transaksi Rp 200.000",
      ],
    },
  ],
};

// ── MENU (Varian Parfum) ────────────────────────────────────
export const MENU_CONTENT: MenuContent = {
  eyebrow:     "Katalog Produk",
  headline:    "Varian Terpopuler Kami",
  subheadline: "Tiap varian dirancang menggunakan bahan berkualitas dari Prancis untuk mewakili nuansa petualangan, pantai, dan eksotisme Indonesia.",
  categories: [
    {
      id:    "signature-unisex",
      name:  "Signature & Unisex",
      items: [
        {
          id:        "blue-point",
          name:      "Blue Point",
          price:     "Rp 99.000 - Rp 229.000",
          description: "Fresh, breezy, energizing, ocean-inspired.\n\n• Top: Ocean Breeze, Bergamot, Sea Salt\n• Mid: Sage, Aquatic Floral, Rosemary\n• Base: Driftwood, Amber, Musk\n• Longevity: 6-8 jam (Moderate to Strong)",
          image:     "/products/blue-point.webp",
          tag:       "Best Seller",
        },
        {
          id:        "kuta-7am",
          name:      "Kuta 7 AM",
          price:     "Rp 95.000 - Rp 219.000",
          description: "Clean, crisp, bright early morning beach atmosphere.\n\n• Top: Green Apple, Morning Dew, Lemon Zest\n• Mid: Lily of the Valley, White Tea, Bamboo\n• Base: Clean Musk, Blonde Woods\n• Longevity: 5-7 jam (Moderate)",
          image:     "/products/kuta-7am.webp",
          tag:       "Citrus Fresh",
        }
      ],
    },
    {
      id:    "for-him",
      name:  "Pria / For Him",
      items: [
        {
          id:        "cliff-him",
          name:      "Cliff Him",
          price:     "Rp 105.000 - Rp 239.000",
          description: "Bold, earthy, sophisticated cliffside ocean breeze.\n\n• Top: Grapefruit, Mineral Accords, Black Pepper\n• Mid: Cedarwood, Geranium, Lavender\n• Base: Vetiver, Oakmoss, Dark Amber\n• Longevity: 7-9 jam (Strong)",
          image:     "/products/cliff-him.webp",
          tag:       "Woody Mineral",
        },
        {
          id:        "papan-selancar-him",
          name:      "Papan Selancar Him",
          price:     "Rp 99.000 - Rp 229.000",
          description: "Sporty, energetic, adventurous, coastal surf culture.\n\n• Top: Marine Accord, Cardamom, Bergamot\n• Mid: Salted Coconut, Salty Vetiver, Pineapple Leaf\n• Base: Teakwood, Tonka Bean, Dry Amber\n• Longevity: 6-8 jam (Moderate to Strong)",
          image:     "/products/papan-selancar-him.webp",
          tag:       "Sporty Fresh",
        }
      ],
    },
    {
      id:    "for-her",
      name:  "Wanita / For Her",
      items: [
        {
          id:        "cliff-her",
          name:      "Cliff Her",
          price:     "Rp 105.000 - Rp 239.000",
          description: "Elegant, warm, romantic, tropical coastal vibe.\n\n• Top: Peach, Mandarin Orange, Wild Berries\n• Mid: Frangipani, Jasmine, Sunset Peony\n• Base: Vanilla, White Amber, Sandalwood\n• Longevity: 6-8 jam (Moderate)",
          image:     "/products/cliff-her.webp",
          tag:       "Warm Floral",
        },
        {
          id:        "papan-selancar-her",
          name:      "Papan Selancar Her",
          price:     "Rp 99.000 - Rp 229.000",
          description: "Playful, sweet, sun-soaked tropical beach vacation.\n\n• Top: Coconut Water, Sweet Mango, Pink Grapefruit\n• Mid: Tiare Flower, Ylang-Ylang, Tropical Hibiscus\n• Base: Sunlit Vanilla, Coconut Cream, Soft Musk\n• Longevity: 6-8 jam (Moderate to Intimate)",
          image:     "/products/papan-selancar-her.webp",
          tag:       "Tropical Sweet",
        }
      ],
    }
  ],
};

// ── BRANCHES (Marketplace & Reseller) ───────────────────────────────
export const BRANCHES_CONTENT: BranchContent = {
  eyebrow:     "Pilihan Pembelian",
  headline:    "Jalur Distribusi Resmi",
  subheadline: "Dapatkan produk original Bali Surfer's Perfume lewat online store resmi atau jaringan reseller kami di kota terdekat Anda.",
  branches: [
    {
      id: "shopee-official",
      name: "Shopee Official Store",
      address: "Pusat Pengiriman Nasional & Promo Voucher Cashback Terbesar",
      phone: "Shopee Mall",
    },
    {
      id: "tokopedia-bandung",
      name: "Tokopedia Reseller Bandung",
      address: "Distribusi area Bandung Raya & Jawa Barat Barat. Pengiriman instan GoSend/GrabExpress tersedia.",
      phone: "Tokopedia",
    },
    {
      id: "tokopedia-bogor",
      name: "Tokopedia Reseller Bogor",
      address: "Gudang stok Bogor, melayani Jabodetabek bagian selatan dengan pengiriman kilat.",
      phone: "Tokopedia",
    },
    {
      id: "tokopedia-bintaro",
      name: "Tokopedia Reseller Bintaro",
      address: "Distribusi area Tangerang Selatan, Jakarta Barat & Selatan. Stok terlengkap.",
      phone: "Tokopedia",
    },
    {
      id: "tiktok-shop",
      name: "TikTok Shop Official",
      address: "Live stream review interaktif harian dengan harga flash sale eksklusif.",
      phone: "@balisurfersperfume",
    },
    {
      id: "reseller-wa",
      name: "WhatsApp Hub Reseller",
      address: "Pusat pendaftaran kemitraan grosir minimal 12 botol untuk seluruh wilayah Indonesia.",
      phone: "+62 812-3456-7890",
      hours: "09.00 - 17.00",
    },
  ],
};

// ── LOCATION ─────────────────────────────────────────────────────
export const LOCATION_CONTENT: LocationContent = {
  eyebrow: "Lokasi Kantor & Produksi",
  headline: "Pusat Operasional Kami",
  subheadline: "Diproduksi dengan Bangga di Bandung, Jawa Barat",
  description:
    "Meskipun seluruh konsep, nama varian, dan citra brand kami mengangkat keindahan pantai tropis Bali, proses peracikan dan produksi massal Bali Surfer's Perfume dilakukan di Bandung. Kami menggunakan esensi minyak premium yang diimpor dari Grasse, Prancis, untuk menjamin wewangian berkelas internasional.",
  address:
    "Jl. Swadaya Raya No.28, RT.006/RW.006, Larangan Indah, Kec. Larangan, Kota Tangerang, Banten 15154",
  phone: "+62 812-3456-7890",
  hours: {
    "Senin - Sabtu": "09.00 – 17.00 WIB",
    "Minggu / Merah": "Tutup (Hanya online)",
  },
};

// ── FACILITY ─────────────────────────────────────────────────────
export const FACILITY_CONTENT: FacilityContent = {
  eyebrow:     "Kelebihan Produk",
  headline:    "Standar Kualitas Premium",
  subheadline: "Bali Surfer's Perfume dibuat dengan standar olfaktori terbaik untuk mendukung rasa percaya diri Anda seharian.",
  items: [
    { id: "edp",      label: "Eau de Parfum (EDP)", description: "Konsentrasi konsentrat minyak wangi tinggi, memberikan ketahanan wangi yang bersaing.", icon: "droplets" },
    { id: "france",   label: "Esens Grasse Prancis", description: "Esens dasar diimpor dari kota Grasse Prancis, kiblat wewangian legendaris dunia.", icon: "award" },
    { id: "bpom",     label: "BPOM Certified",      description: "Lolos uji laboratorium, tersertifikasi resmi BPOM sehingga aman untuk kulit.", icon: "shield" },
    { id: "fresh",    label: "Fresh Aquatic Vibe",  description: "Memiliki karakter khas wangi laut, buah, dan kayu segar yang cocok untuk siang hari.", icon: "waves" },
    { id: "affordable",label: "Harga Terjangkau",   description: "Menyediakan kualitas parfum kelas dunia dengan harga yang bersahabat bagi kantong anak muda.", icon: "sun" },
    { id: "local",    label: "Produksi Bandung",    description: "Kebanggaan produk lokal buatan Bandung yang membawa spirit petualangan dan keindahan Bali.", icon: "trees" },
  ],
};

// ── ADVANTAGE ────────────────────────────────────────────────────
export const ADVANTAGE_CONTENT: AdvantageContent = {
  eyebrow:     "Keunggulan Kami",
  headline:    "Mengapa Memilih Bali Surfer's?",
  subheadline: "Wewangian tropis yang dirancang khusus untuk menemani gaya hidup aktif kaum urban.",
  items: [
    {
      id:          "longevity",
      number:      "01",
      title:       "Ketahanan Outdoor Teruji",
      description: "Formula kami dirancang khusus agar tetap segar dan menyatu dengan keringat tubuh saat beraktivitas aktif di bawah terik matahari.",
    },
    {
      id:          "story",
      number:      "02",
      title:       "Storytelling Liburan Bali",
      description: "Setiap varian membawa memori liburan, angin laut tropis, pasir hangat, dan momen matahari terbenam pantai Bali ke genggaman Anda.",
    },
    {
      id:          "projection",
      number:      "03",
      title:       "Proyeksi & Sillage Optimal",
      description: "Memberikan sebaran aroma yang luas di udara pada semprotan pertama, meninggalkan jejak wewangian yang wangi dan menyenangkan.",
    },
    {
      id:          "safety",
      number:      "04",
      title:       "Aman & Tidak Berbekas",
      description: "Menggunakan pelarut ramah kulit kualitas kosmetik yang aman di kulit sensitif dan tidak meninggalkan noda kuning di pakaian putih.",
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────
export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Kisah Brand",
  headline: "Bali Surfer's Perfume",
  subheadline: "Membawa Spirit Kebebasan Pantai Tropis Ke Dalam Botol",
  description:
    "Bali Surfer's Perfume lahir dari kecintaan personal sang founder pada olahraga surfing dan petualangan pantai tropis di Bali. Mengambil inspirasi dari deburan ombak laut lepas, hadirlah varian pertama kami, Blue Point, yang mengawali petualangan olfaktori tropis ini. Menggunakan bahan baku esens premium yang diimpor dari Grasse, Prancis, dan diproduksi secara lokal di Bandung, kami berkomitmen menyajikan wewangian berkualitas ekspor dengan harga yang ramah.",
  stats: [
    { id: "variants", value: "24+", label: "Varian Aroma Aktif" },
    { id: "longevity", value: "4-7", label: "Jam Rata-rata Longevity" },
    { id: "sales", value: "100K+", label: "Botol Terjual Nasional" },
    { id: "rating", value: "4.8", label: "Rating Kepuasan Pembeli" },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_CONTENT: FAQContent = {
  eyebrow:  "FAQ",
  headline: "Pertanyaan yang Sering Diajukan",
  items: [
    {
      id:       "longevity-faq",
      question: "Berapa lama daya tahan wangi Bali Surfer's Perfume?",
      answer:   "Parfum kami berjenis Eau de Parfum (EDP) dengan konsentrasi esens minyak wangi tinggi. Rata-rata daya tahan berkisar antara 4 hingga 7 jam di kulit, dan dapat bertahan seharian jika disemprotkan pada serat pakaian.",
    },
    {
      id:       "bpom-faq",
      question: "Apakah parfum ini aman untuk kulit sensitif dan ber-BPOM?",
      answer:   "Ya, semua varian produk Bali Surfer's Perfume 100% aman digunakan karena telah lulus uji laboratorium kosmetika dan memiliki izin edar resmi dari BPOM.",
    },
    {
      id:       "production-faq",
      question: "Apakah parfum ini benar-benar diproduksi di Bali?",
      answer:   "Konsep wewangian, nama varian, dan citra petualangan brand kami mengangkat nuansa pantai Bali. Namun, untuk memastikan kapasitas distribusi nasional, proses produksi massal kami lakukan di pabrik Bandung, Jawa Barat, dengan bahan baku esens diimpor langsung dari Grasse, Prancis.",
    },
    {
      id:       "reseller-faq",
      question: "Bagaimana cara mendaftar kemitraan sebagai reseller resmi?",
      answer:   "Sangat mudah! Anda cukup menghubungi WhatsApp kemitraan kami di nomor yang tertera di website ini. Pembelian grosir awal minimal 12 botol sudah mendapatkan harga diskon reseller resmi hingga 30% dan materi promosi siap pakai.",
    },
    {
      id:       "stain-faq",
      question: "Apakah semprotan parfum ini meninggalkan noda di baju?",
      answer:   "Parfum kami diracik menggunakan cairan pelarut tingkat kosmetik super bersih yang tidak meninggalkan noda kuning di kain. Untuk keamanan ekstra, disarankan menyemprot dari jarak 15-20 cm pada pakaian.",
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────
export const CTA_CONTENT: CTAContent = {
  eyebrow: "Dapatkan Aroma Tropismu",
  headline: "Siap Menikmati Kesegaran Pantai Bali?",
  subheadline: "Pilih aroma aquatic signature Anda sekarang juga. Tersedia paket bundling hemat dan pendaftaran kemitraan reseller resmi.",
  cta: {
    primary: "Check Product Variant",
    secondary: "Hubungi Kemitraan",
  },
};

// ── FOOTER ───────────────────────────────────────────────────────
export const FOOTER_CONTENT: FooterContent = {
  tagline:   "Parfum lokal bertema tropis Bali dengan kualitas esens premium dari Grasse, Prancis. Menghadirkan kesegaran, kebebasan, dan petualangan harian Anda.",
  copyright: `© ${new Date().getFullYear()} Bali Surfer's Perfume. All rights reserved.`,
  links: [
    { label: "Varian Parfum", href: "#menu" },
    { label: "Promo & Bundling", href: "#promo" },
    { label: "Kelebihan",    href: "#facility" },
    { label: "Jaringan Reseller", href: "#branches" },
    { label: "FAQ",          href: "#faq" },
  ],
};
