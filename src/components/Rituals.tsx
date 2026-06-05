import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Rituals() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const titleX = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="min-h-screen bg-[#0f1712] px-6 py-32 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p 
          style={{ opacity: titleOpacity }}
          className="text-[#d8b979] uppercase tracking-[0.5em] text-[10px] mb-6"
        >
          Ritual Menu
        </motion.p>
        <motion.h2 
          style={{ x: titleX, opacity: titleOpacity }}
          className="ritual-title text-5xl md:text-8xl font-serif mb-20 leading-[0.9]"
        >
          Treatments that move<br/>with <span className="italic text-[#d8b979]">your body.</span>
        </motion.h2>

        <div className="space-y-2">
          {[
            { title: "Golden Oil Massage", desc: "Deep relaxation with warm botanical oils.", price: "$120" },
            { title: "Volcanic Stone Therapy", desc: "Heat, pressure, and slow-release calm.", price: "$150" },
            { title: "Botanical Facial Glow", desc: "Hydration and skin renewal ritual.", price: "$95" }
          ].map((ritual, idx) => (
            <motion.div 
              key={idx}
              initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="ritual border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/5 transition-colors duration-500 px-6 rounded-2xl cursor-pointer group"
            >
              <div>
                <h3 className="text-3xl font-serif group-hover:text-[#d8b979] transition-colors duration-500">{ritual.title}</h3>
                <p className="text-white/40 mt-2 text-sm max-w-sm group-hover:text-white/70 transition-colors duration-500">{ritual.desc}</p>
              </div>
              <span className="text-[#d8b979] text-xs uppercase tracking-widest">{ritual.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
