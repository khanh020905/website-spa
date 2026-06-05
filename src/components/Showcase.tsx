import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Showcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.4], [150, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]);

  const card1Y = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [450, -200]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [250, -120]);

  const cardRotate1 = useTransform(scrollYProgress, [0, 1], [10, -5]);
  const cardRotate2 = useTransform(scrollYProgress, [0, 1], [-8, 4]);
  const cardRotate3 = useTransform(scrollYProgress, [0, 1], [6, -2]);

  return (
    <section ref={containerRef} className="showcase min-h-[80vh] bg-[#f3eadc] text-[#172118] px-6 py-32 overflow-hidden perspective-[1000px]">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          style={{ opacity: titleOpacity }}
          className="text-[#a38345] uppercase tracking-[0.5em] text-[10px] mb-6"
        >
          Showcase
        </motion.p>
        <motion.h2
          style={{ y: titleY, opacity: titleOpacity }}
          className="show-title text-5xl md:text-8xl font-serif max-w-4xl leading-[0.9]"
        >
          Immersive spa spaces designed for <span className="italic text-[#a38345]">silence.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="image-card card h-[520px] rounded-[2rem] shadow-2xl"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=90')",
              y: card1Y, rotate: cardRotate1
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="image-card card h-[420px] rounded-[2rem] md:mt-24 shadow-2xl"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=90')",
              y: card2Y, rotate: cardRotate2
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="image-card card h-[520px] rounded-[2rem] shadow-2xl"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=90')",
              y: card3Y, rotate: cardRotate3
            }}
          />
        </div>
      </div>
    </section>
  );
}
