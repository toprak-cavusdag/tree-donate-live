// src/components/HeroTreeDonate.tsx
import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
  type Transition
} from "framer-motion";
import {
  FaTree,
  FaSeedling,
  FaShieldAlt,
  FaHeart,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

type Props = { image?: string };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.06 * custom,
      type: "spring",
      stiffness: 120,
      damping: 18
    } as Transition
  })
};

function Tilt({
  children,
  className,
  max = 10
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), {
    stiffness: 120,
    damping: 10
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), {
    stiffness: 120,
    damping: 10
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroTreeDonate({
  image = "/images/home/hero.jpg"
}: Props) {
  const [amount, setAmount] = useState<number>(5);
  const quick = [1, 3, 5, 10, 20];

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#071710] text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-[#0c241b] via-[#071710] to-[#0c241b]" />
      <div className="pointer-events-none absolute -left-[20%] -top-[25%] h-[60rem] w-[60rem] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[40rem] w-[40rem] rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-16 md:grid-cols-[1.05fr_1fr] md:pt-36 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-200/90 backdrop-blur"
          >
            <FaSeedling className="text-emerald-400" />
            TREE DONATION
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Bugün bir <span className="text-emerald-300">ağaç</span> dik,
            <br className="hidden md:block" /> yarına nefes bırak 🌱
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="max-w-xl text-lg text-emerald-100/85"
          >
            Bağışladığın her ağaç; karbonu dengeler, sel riskini azaltır ve
            yerel ekosistemleri güçlendirir. Sertifika ve dikim raporlarını
            hesabından takip edebilirsin.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={3}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <label className="mb-3 block text-sm font-semibold text-emerald-200/90">
              Kaç ağaç bağışlamak istersin?
            </label>

            <div className="flex flex-wrap items-center gap-2">
              {quick.map((q) => (
                <button
                  key={q}
                  onClick={() => setAmount(q)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    amount === q
                      ? "bg-emerald-400 text-emerald-950 shadow shadow-emerald-400/30"
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                  aria-pressed={amount === q}
                >
                  {q} ağaç
                </button>
              ))}
              <div className="ml-1 flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm">
                <input
                  type="number"
                  min={1}
                  value={amount}
                  onChange={(e) =>
                    setAmount(Math.max(1, Number(e.target.value || 1)))
                  }
                  className="w-20 bg-transparent text-center outline-none [appearance:textfield] [-moz-appearance:textfield]"
                />
                <span className="opacity-70">adet</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-emerald-200/80">
              <span className="inline-flex items-center gap-2">
                <FaShieldAlt className="text-emerald-400" /> 3D Secure & Şeffaf
                Rapor
              </span>
              <span className="inline-flex items-center gap-2">
                <FaHeart className="text-emerald-400" /> Bağış sertifikası dâhil
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                onClick={() => console.log("Donate", amount)}
              >
                {amount} ağaç bağışla
                <FaArrowRight className="transition group-hover:translate-x-0.5" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                onClick={() => console.log("Learn more")}
              >
                Programı incele
              </button>
            </div>
          </motion.div>

          {/* trust strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={4}
            className="flex flex-wrap items-center gap-6 pt-3 text-xs text-emerald-200/70"
          >
            <span className="inline-flex items-center gap-2">
              <FaGlobe className="text-emerald-400" />
              12 bölgede dikim
            </span>
            <span className="inline-flex items-center gap-2">
              <FaTree className="text-emerald-400" />
              Yerli tür önceliği
            </span>
          </motion.div>
        </div>

        {/* RIGHT (tilt + parallax-style kart) */}
        <Tilt className="relative h-[54vh] min-h-[340px] w-full md:h-[64vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.12 }}
            className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur"
            style={{ transform: "translateZ(40px)" }}
          >
            <img
              src={image}
              alt="Forest"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_20%,rgba(0,0,0,0.0),rgba(0,0,0,0.45))]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.28 }}
            className="absolute left-6 top-6 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs backdrop-blur"
            style={{ transform: "translateZ(80px)" }}
          >
            <FaCheckCircle className="text-emerald-400" />
            128,540+ ağaç dikildi
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.36 }}
            className="absolute bottom-6 right-6 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs backdrop-blur"
            style={{ transform: "translateZ(70px)" }}
          >
            1 ağaç ≈ 22 kg CO₂/yıl
          </motion.div>

          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 24, y: 24, rotate: 6 }}
            animate={{ opacity: 0.35, x: 0, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.18 }}
            className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-2xl bg-emerald-500/10"
            style={{ transform: "translateZ(10px)", backdropFilter: "blur(6px)" }}
          />
        </Tilt>
      </div>
    </section>
  );
}
