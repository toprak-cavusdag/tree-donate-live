"use client";

import { motion, type Variants } from "framer-motion";
import { FaCheckCircle, FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  photo?: string;
  sticker?: string;
  name?: string;
  role?: string;
  progress?: number;
};

// type-safe cubic-bezier
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: EASE },
  }),
};

export default function AboutTrees({
  photo = "/images/home/02.jpg",
  sticker = "/images/home/01.jpg",
  name = "Samed Ağırbaş",
  role = "Sıfır Atık Vakfı Başkanı",
  progress = 85,
}: Props) {
  const pct = Math.max(0, Math.min(100, progress));

  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8">

        <div className="relative">
          <div className="absolute -left-4 top-1/2 hidden h-[62%] -translate-y-1/2 rounded bg-emerald-600 md:block w-2" />
          <div className="absolute -left-1 top-1/2 hidden h-[62%] -translate-y-1/2 rounded bg-emerald-300 md:block w-1" />

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="relative overflow-hidden rounded-[22px] shadow-sm ring-1 ring-gray-200"
          >
            <img
              src={photo}
              alt="Toprak ve fide tutan eller"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* küçük kart */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="absolute -bottom-8 left-1/2 w-[68%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200 md:left-auto md:right-8 md:translate-x-0"
          >
            <div className="flex items-center gap-3">
              <img
                src={sticker}
                alt=""
                className="h-14 w-14 rounded-xl object-cover ring-1 ring-gray-200"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">Ağaç Dikimi</p>
                <p className="text-xs text-gray-500">Gönüllülerle birlikte ormanlar</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-xl">
          <motion.span
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="mb-3 inline-block text-[12px] font-semibold tracking-[0.22em] text-emerald-600"
          >
            HAKKIMIZDA
          </motion.span>

          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl"
          >
            Daha yeşil bir <br /> gelecek için birlikte
          </motion.h2>

          <motion.p
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="mt-5 text-gray-600"
          >
            Her bağışlanan ağaç; doğaya nefes, çocuklara gölge, geleceğe umut
            demektir. Hedefimiz milyonlarca fidanı toprakla buluşturmak.
          </motion.p>

          <motion.ul
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            className="mt-6 space-y-3"
          >
            {[
              "Her bağış doğrudan dikim alanlarına aktarılır",
              "Yerel halkla birlikte sürdürülebilir ormanlar",
            ].map((t, i) => (
              <li
                key={t}
                className="flex items-start gap-3 text-[15px] font-semibold text-gray-900"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                  <FaCheckCircle className="text-emerald-600" />
                </span>
                <motion.span variants={fade} custom={i}>
                  {t}
                </motion.span>
              </li>
            ))}
          </motion.ul>

          {/* progress */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
            className="mt-6"
          >
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-900">
              <span>Hedefe Ulaşma</span>
              <span>{pct}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-emerald-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </motion.div>

          {/* uzman + buton */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={5}
            className="mt-7 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <img
                src="/images/home/samed-bey.png"
                alt={name}
                className="h-20 w-20 rounded-full object-cover ring-2 ring-white shadow"
                loading="lazy"
              />
              <div>
                <div className="text-xs font-semibold text-emerald-600">{role}</div>
                <div className="text-base font-semibold text-gray-900">{name}</div>
              </div>
            </div>

            <a
              href="#explore"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Daha Fazla Keşfet
              <FaAngleDoubleRight className="transition group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
