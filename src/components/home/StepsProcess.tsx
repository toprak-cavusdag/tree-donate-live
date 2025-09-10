// src/components/StepsProcess.tsx
import { motion, type Variants, cubicBezier } from "framer-motion";
import {
  FaGlobeAmericas,
  FaSolarPanel,
  FaRecycle,
  FaShoppingBag,
} from "react-icons/fa";

type Step = {
  icon: React.ReactNode;
  title: string;
  desc?: string;
};

const steps: Step[] = [
  {
    icon: <FaGlobeAmericas className="text-emerald-600 text-3xl" />,
    title: "Sürdürülebilir Çözümler",
    desc: "Doğaya zarar vermeden yaşam için stratejiler.",
  },
  {
    icon: <FaSolarPanel className="text-emerald-600 text-3xl" />,
    title: "Yenilenebilir Enerji",
    desc: "Güneş, rüzgar ve temiz enerji yatırımları.",
  },
  {
    icon: <FaRecycle className="text-emerald-600 text-3xl" />,
    title: "Yeşil Yapılar",
    desc: "Geri dönüşüm ve çevre dostu inşaat yöntemleri.",
  },
  {
    icon: <FaShoppingBag className="text-emerald-600 text-3xl" />,
    title: "Sürdürülebilir Tüketim",
    desc: "Doğaya dost alışveriş ve yaşam tarzı.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1), // ✅ tip güvenli easing
    },
  }),
};

export default function StepsProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 opacity-10">
        <LeafPattern />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 opacity-10">
        <LeafPattern />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-emerald-600">
          4 ADIMLIK SÜREÇ
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Daha Yeşil Bir Gelecek İçin <br /> Karbon Ayak İzini Azalt
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative flex size-32 items-center justify-center rounded-full bg-emerald-50 shadow-sm transition hover:shadow-md">
                {step.icon}
                <span className="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow">
                  {i + 1}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              {step.desc && (
                <p className="mt-2 max-w-[200px] text-sm text-gray-600">
                  {step.desc}
                </p>
              )}

              {i < steps.length - 1 && (
                <div className="absolute right-[-55%] top-16 hidden w-[100px] border-t-2 border-dashed border-gray-300 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeafPattern() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full text-emerald-400"
    >
      <g fill="currentColor">
        <path
          d="M100 10c40 25 65 55 65 90s-25 65-65 90c-40-25-65-55-65-90S60 35 100 10z"
          opacity="0.25"
        />
        <circle cx="65" cy="90" r="10" />
        <circle cx="120" cy="55" r="8" />
        <circle cx="135" cy="120" r="12" />
      </g>
    </svg>
  );
}
