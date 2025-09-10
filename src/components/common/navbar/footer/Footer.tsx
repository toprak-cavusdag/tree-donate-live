// src/components/Footer.tsx
"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiChevronRight } from "react-icons/fi";
import { IoArrowUp } from "react-icons/io5";

const BRAND = "#00A870";

type NewsItem = { title: string; date: string; image: string; href: string };

const recentNews: NewsItem[] = [
  {
    title: "Yeşil ol ve karbon ayak izini azalt",
    date: "3 Nisan 2023",
    image: "/images/news/leaf.jpg",
    href: "/blog/go-green",
  },
  {
    title: "Bir duruş sergile, sürdürülebilirliği destekle",
    date: "3 Nisan 2023",
    image: "/images/news/lake.jpg",
    href: "/blog/statement",
  },
];

export default function Footer() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    console.log("bülten:", email);
  }, []);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative isolate bg-[#181B17] text-white">
      {/* Üst: İletişim kutuları */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-5 md:grid-cols-3">
        <InfoCard
          icon={<FiMapPin />}
          title="Adres"
          desc="2416 Mapleview Drive, FL 33634"
        />
        <InfoCard
          icon={<FiMail />}
          title="E-posta"
          desc="admin.account@gmail.com"
        />
        <InfoCard
          icon={<FiPhone />}
          title="Telefon"
          desc="+90 212 555 55 55"
        />
      </div>

      {/* Orta: 4 kolon */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-10 md:grid-cols-4">
        {/* Hakkımızda */}
        <div>
          <h4 className="text-2xl font-extrabold tracking-tight mb-4">Hakkımızda</h4>
          <p className="text-white/70 leading-relaxed mb-6">
            Güvenilir, ölçeklenebilir dijital ürünler inşa ediyoruz—
            ölçülebilir sonuçlara ve uzun vadeli iş ortaklıklarına odaklanıyoruz.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-sm transition hover:-translate-y-0.5"
            style={{ backgroundColor: BRAND }}
          >
            Başla <FiChevronRight />
          </a>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="text-2xl font-extrabold tracking-tight mb-4">
            Hızlı Linkler
          </h4>
          <ul className="space-y-3 text-white/80">
            {[
              { label: "Hakkımızda", href: "/about" },
              { label: "Misyonumuz", href: "/mission" },
              { label: "Ekibimiz", href: "/team" },
              { label: "Projelerimiz", href: "/projects" },
              { label: "İletişim", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2 hover:text-white"
                >
                  <span
                    className="h-1 w-1 rounded-full opacity-60 group-hover:opacity-100"
                    style={{ backgroundColor: BRAND }}
                  />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Son Haberler */}
        <div>
          <h4 className="text-2xl font-extrabold tracking-tight mb-4">
            Son Haberler
          </h4>
          <ul className="space-y-4">
            {recentNews.map((n) => (
              <li key={n.href} className="flex items-center gap-3">
                <img
                  src={n.image}
                  alt=""
                  className="h-14 w-14 rounded-md object-cover ring-1 ring-white/10"
                  loading="lazy"
                />
                <div>
                  <a
                    href={n.href}
                    className="font-semibold hover:underline decoration-2 underline-offset-2"
                  >
                    {n.title}
                  </a>
                  <div className="text-xs text-white/60">{n.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bülten */}
        <div>
          <h4 className="text-2xl font-extrabold tracking-tight mb-4">
            Bülten
          </h4>
          <p className="text-white/70 mb-4">
            Ürün haberleri ve içgörülerden haberdar olun.
          </p>
          <form onSubmit={onSubmit} className="flex overflow-hidden rounded-xl">
            <input
              name="email"
              type="email"
              required
              placeholder="E-posta adresiniz"
              className="min-w-0 flex-1 bg-white text-[#111] placeholder:text-black/40 px-4 py-3 outline-none"
            />
            <button
              type="submit"
              className="px-5 font-semibold text-white"
              style={{ backgroundColor: BRAND }}
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Alt çizgi + telif */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            Telif Hakkı © {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <a href="/terms" className="hover:text-white">
              Şartlar & Koşullar
            </a>
            <a href="/privacy" className="hover:text-white">
              Gizlilik Politikası
            </a>
            <a href="/contact" className="hover:text-white">
              İletişim
            </a>
          </nav>
        </div>
      </div>

      {/* Yukarı dön */}
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={scrollTop}
        aria-label="Yukarı dön"
        className="fixed bottom-5 right-5 z-50 grid h-10 w-10 place-items-center rounded-lg text-white shadow-lg"
        style={{ backgroundColor: BRAND }}
      >
        <IoArrowUp />
      </motion.button>
    </footer>
  );
}

/* --- küçük info kartı --- */
function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 rounded-2xl px-5 py-5 shadow-sm"
      style={{ backgroundColor: BRAND }}
    >
      <span className="grid h-14 w-14 place-items-center rounded-xl bg-white text-[22px]" style={{ color: BRAND }}>
        {icon}
      </span>
      <div>
        <div className="text-lg font-extrabold tracking-tight">{title}</div>
        <div className="text-sm/6 opacity-95">{desc}</div>
      </div>
    </motion.div>
  );
}
