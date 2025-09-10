// src/components/FaqSectionTrees.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

type Faq = { q: string; a: string };

const ACCENT = "#00A870"; // ← yeni marka rengi
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs: Faq[] = [
  { q: "Bağışladığım ağaçlar nereye dikiliyor?", a: "Bağışlarınız, yerel ormancılık müdürlükleri ve gönüllülerle iş birliği yapılarak belirlenen alanlarda toprakla buluşturuluyor. Hedefimiz erozyon riski yüksek bölgeler ve boş araziler." },
  { q: "Bağışımın gerçekten dikildiğini nasıl bilebilirim?", a: "Her bağış sonrası size sertifika veriliyor ve dikim raporları çevrimiçi olarak hesabınızdan takip edilebiliyor. Ayrıca uydu görüntüleri ve saha fotoğraflarıyla şeffaflık sağlıyoruz." },
  { q: "Minimum kaç ağaç bağışlayabilirim?", a: "Tek bir ağaç bağışında bulunabilirsiniz. Dilerseniz hızlı seçimlerden 5, 10 ya da 20 ağaç seçenekleri de mevcut." },
  { q: "Gönüllü olarak nasıl katılabilirim?", a: "Sitemizdeki gönüllü formunu doldurarak dikim etkinliklerine katılabilirsiniz. Haftada birkaç saatle doğrudan katkı sağlayın." },
];

/* Variants */
const sectionV: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(2px)" as any },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)" as any, transition: { duration: 0.6, ease: EASE } }
};
const listV: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } } };
const cardV: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: EASE } }
};

export default function FaqSectionTrees() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <motion.section
      variants={sectionV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative bg-[#F9FAF6] py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        {/* SOL görsel */}
        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-200"
          whileHover={{ rotateX: -2, rotateY: 2 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <motion.img
            src="/images/home/world.png"
            alt="Elinde dünya tutan kişi"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 300px at 80% 20%, rgba(0,168,112,0.12), rgba(255,255,255,0))"
            }}
          />
        </motion.figure>

        {/* SAĞ: FAQ */}
        <div>
          <span className="text-xs font-semibold tracking-[0.2em]" style={{ color: ACCENT }}>
            SORU-CEVAP
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ağaç bağışı hakkında merak ettiklerin 🌳
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Ağaç dikimi sürecimiz şeffaf, güvenilir ve katılıma açık. İşte en sık sorulan sorular:
          </p>

          <motion.div variants={listV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-8 space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.article
                  key={i}
                  variants={cardV}
                  layout
                  animate={{
                    y: isOpen ? -1 : 0,
                    boxShadow: isOpen
                      ? "0 18px 44px -24px rgba(0,168,112,0.45)"
                      : "0 8px 24px -16px rgba(2,6,23,0.08)"
                  }}
                  transition={{ layout: { type: "spring", stiffness: 280, damping: 26 }, duration: 0.25 }}
                  className={`relative overflow-hidden rounded-2xl border bg-white ring-1 ${
                    isOpen
                      ? "border-[rgba(0,168,112,0.7)] ring-[rgba(0,168,112,0.25)]"
                      : "border-gray-200 ring-gray-100"
                  }`}
                >
                  {/* üst aksan çizgisi */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.span
                        layoutId="faq-accent-bar"
                        className="absolute left-0 top-0 h-1 w-full"
                        style={{ backgroundColor: ACCENT }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28, ease: EASE }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Başlık */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-gray-900">{item.q}</span>

                    {/* ikon */}
                    <span className="relative inline-grid size-7 place-items-center rounded-full" style={{ backgroundColor: "rgba(0,168,112,0.12)" }}>
                      <AnimatePresence initial={false} mode="wait">
                        {isOpen ? (
                          <motion.span
                            key="minus"
                            initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            style={{ color: ACCENT }}
                          >
                            <FaMinus className="text-xs" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{ opacity: 0, rotate: 90, scale: 0.75 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.75 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            style={{ color: ACCENT }}
                          >
                            <FaPlus className="text-xs" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>

                  {/* İçerik */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        key="content"
                        initial={{ opacity: 0, height: 0, clipPath: "inset(0 0 100% 0 round 12px)" }}
                        animate={{ opacity: 1, height: "auto", clipPath: "inset(0 0 0% 0 round 12px)" }}
                        exit={{ opacity: 0, height: 0, clipPath: "inset(0 0 100% 0 round 12px)" }}
                        transition={{
                          opacity: { duration: 0.18, ease: EASE },
                          height: { type: "spring", stiffness: 320, damping: 32 },
                          clipPath: { duration: 0.28, ease: EASE }
                        }}
                        className="px-5"
                      >
                        <div className="pb-5 text-sm leading-relaxed text-gray-600">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
