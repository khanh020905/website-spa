import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CtaFooter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start bottom", "bottom top"]
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  
  // Parallax the whole CTA block upwards as we scroll
  const ctaY = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#e7d7bd] text-[#101811] px-6 py-24">
      <motion.div 
        style={{ x: marqueeX }}
        className="marquee absolute top-16 text-[15vw] leading-none font-serif text-black/5 whitespace-nowrap select-none"
      >
        RELAX · RESTORE · RENEW · RELAX · RESTORE · RENEW ·
      </motion.div>

      <motion.div
        style={{ y: ctaY }}
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="cta text-center z-10 max-w-4xl pt-16 mx-auto"
      >
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.5em] text-[10px] text-[#8c6b35] mb-6"
        >
          Book Your Escape
        </motion.p>
        <h2 className="text-6xl md:text-9xl font-serif leading-[0.9]">
          Your calm <span className="italic text-[#8c6b35]">starts</span> here.
        </h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-sm max-w-sm mx-auto text-black/60 leading-relaxed"
        >
          Enter a sanctuary of warm light, soft silence, and personalized wellness.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 px-8 py-4 rounded-full bg-[#101811] text-white text-[11px] uppercase tracking-widest font-bold hover:bg-[#8c6b35] transition-colors"
        >
          Reserve Appointment
        </motion.button>
      </motion.div>
    </section>
  );
}
