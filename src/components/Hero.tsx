import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgPosY = useTransform(scrollYProgress, [0, 1], ["50%", "85%"]);

  return (
    <motion.section
      ref={ref}
      style={{ backgroundPositionX: "50%", backgroundPositionY: bgPosY }}
      className="hero-bg min-h-screen relative flex items-center justify-center overflow-hidden w-full perspective-[1000px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,184,120,.22),transparent_45%)]" />

      <motion.div
        style={{ scale: contentScale, opacity: contentOpacity, y: contentY }}
        className="hero-content text-center z-10 px-6 origin-center"
      >
        <motion.p
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-kicker text-[#d8b979] text-[10px] uppercase tracking-[0.5em] mb-6"
        >
          Luxury Wellness Sanctuary
        </motion.p>
        <motion.h1
          initial={{ y: 150, opacity: 0, scale: 0.9, rotateX: -20, filter: "blur(12px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
          className="hero-title text-6xl md:text-8xl font-serif leading-[0.9] max-w-6xl transform-style-preserve-3d"
        >
          Breathe <span className="italic text-[#d8b979]">Into</span><br />Pure Calm
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-text mt-8 max-w-sm mx-auto text-white/40 text-sm leading-relaxed"
        >
          A cinematic spa experience crafted with botanical therapy,
          warm stone rituals, and peaceful luxury.
        </motion.p>
        <motion.button
          initial={{ y: 40, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "backOut" }}
          className="hero-btn mt-10 px-8 py-4 rounded-full bg-white text-black text-[11px] uppercase tracking-widest font-bold hover:bg-[#d8b979] transition-colors"
        >
          Explore Treatments
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-pulse"
      >
        Scroll to unwind
      </motion.div>
    </motion.section>
  );
}
