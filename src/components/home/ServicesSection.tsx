// src/components/ServicesSectionPro.tsx
import { motion, type Variants } from "framer-motion";
import { FaLeaf, FaSolarPanel, FaRecycle, FaShieldAlt, FaGlobe } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets?: string[];
  img: string;
  badge?: string;
};

type Stat = { number: number; suffix?: string; label: string; decimals?: number };

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

// basit countup animasyonu
function CountUp({
  to,
  duration = 1600,
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const [val, setVal] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = (t: number) => {
      if (start.current == null) start.current = t;
      const p = Math.min(1, (t - start.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <span className={className}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function ServicesSectionPro() {
  const services: Service[] = [
    {
      icon: <FaLeaf className="text-emerald-600 text-2xl" />,
      title: "Karbon Dengeleme",
      desc: "Karbon salımlarınızı yerli tür ağaçlandırma projeleriyle dengeliyoruz.",
      bullets: ["Sertifikalı dikim", "Uydu izleme", "Yıllık bakım"],
      img: "/images/home/planting.png",
      badge: "Popüler",
    },
    {
      icon: <FaSolarPanel className="text-emerald-600 text-2xl" />,
      title: "Enerji Danışmanlığı",
      desc: "Enerji verimliliği ve yenilenebilir çözümlerle karbon ayak izinizi küçültün.",
      bullets: ["Enerji etüdü", "Güneş potansiyeli", "Teşvik rehberi"],
      img: "/images/home/sustan.png",
    },
    {
      icon: <FaRecycle className="text-emerald-600 text-2xl" />,
      title: "İklim Adaptasyonu",
      desc: "Toplum ve ekosistemlerin iklim risklerine uyum sürecini destekliyoruz.",
      bullets: ["Yerel ortaklar", "Erozyon kontrolü", "Su verimliliği"],
      img: "/images/home/trash.png",
    },
  ];

  const stats: Stat[] = [
    { number: 200, suffix: "+", label: "Takım üyesi" },
    { number: 45, suffix: "+", label: "Tamamlanan proje" },
    { number: 20, suffix: "+", label: "Kazanılan ödül" },
    { number: 50000, suffix: "+", label: "Dikilen ağaç" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F9FAFB] py-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-emerald-600">
            HİZMETLERİMİZ
          </span>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Gelecek Nesiller İçin Dünyayı Korumak
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
            Doğayı koruyan hizmetlerimizle karbonu azaltıyor, toplulukları güçlendiriyoruz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-grid size-12 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                    {s.icon}
                  </div>
                  {s.badge && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      {s.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>

                {s.bullets && (
                  <ul className="mt-1 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 inline-flex size-4 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200">
                          <span className="size-2 rounded-full bg-emerald-500" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 rounded-2xl ring-1 ring-gray-200">
                  <img src={s.img} alt={s.title} className="h-44 w-full rounded-2xl object-cover" />
                </div>

                <div className="mt-auto flex items-center justify-start pt-2 text-xs text-gray-500">
                  <FaShieldAlt className="mr-1 text-emerald-500" /> Şeffaf raporlama
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-[1px] shadow-lg"
        >
          <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 px-8 py-10 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((st) => (
              <div key={st.label} className="text-center">
                <CountUp
                  to={st.number}
                  suffix={st.suffix}
                  decimals={st.decimals ?? 0}
                  className="text-3xl font-extrabold text-white drop-shadow-sm"
                />
                <div className="mt-1 text-sm text-emerald-50/90">{st.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alt bilgi */}
        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-gray-500">
          <FaGlobe className="text-emerald-600" />
          12 bölgede aktif — uydu görüntüleri ve saha raporlarıyla doğrulanır.
        </div>
      </div>
    </section>
  );
}
