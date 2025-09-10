// src/components/NavbarScrollBg.tsx
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarScrollBg() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#071710]/85 border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
       <img src="/sifiratikvakfiwhite.svg" alt="" className="w-36 h-auto" />
        </Link>

        {/* Donate Button */}
        <a
          href="#donate"
          className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 shadow shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          <FaHeart className="transition group-hover:scale-110" />
          Bağış Yap
        </a>
      </div>
    </header>
  );
}
