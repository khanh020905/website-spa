import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? "bg-[#0f1712]/90 backdrop-blur-xl border-b border-white/5 py-5" : "bg-transparent py-10"
      }`}
    >
      <div className="w-[90%] max-w-7xl flex justify-between items-center">
        <div className="text-xl tracking-[0.5em] font-light text-white">AURELIA</div>
        <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-white/50">
          <a href="#" className="hover:text-white transition-colors">RITUALS</a>
          <a href="#" className="hover:text-white transition-colors">GALLERY</a>
          <a href="#" className="hover:text-white transition-colors">WELLNESS</a>
          <a href="#" className="hover:text-white transition-colors">BOOK</a>
        </div>
        <button className="bg-white text-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-full font-bold hover:bg-[#d8b979] transition-colors">
          Reserve
        </button>
      </div>
    </motion.header>
  );
}
