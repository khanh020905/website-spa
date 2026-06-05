import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What should I bring?",
    answer: "We provide plush robes, slippers, and premium grooming amenities in our locker rooms. Simply bring a swimsuit if you plan to use the communal hydrotherapy pools and steam rooms."
  },
  {
    question: "When should I arrive?",
    answer: "We recommend arriving at least 30 to 45 minutes before your scheduled ritual. This allows ample time to check in, change, and begin unwinding in our quiet relaxation lounges."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours' notice for any cancellations or rescheduling. Changes made with less notice will incur a 100% cancellation fee to respect our therapists' time."
  },
  {
    question: "Are there age restrictions?",
    answer: "To maintain an atmosphere of profound silence and calm, our sanctuary is reserved exclusively for guests 18 years of age and older."
  },
  {
    question: "Can I request a specific therapist?",
    answer: "Absolutely. While all our practitioners are highly trained in our signature rituals, you may request a specific therapist or express a preference for a male or female therapist at the time of booking."
  }
];

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#121a14] text-white px-6 py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#d8b979] uppercase tracking-[0.5em] text-[10px] mb-6"
          >
            Guest Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif leading-[0.9] mb-8"
          >
            Curating your <span className="italic text-[#d8b979]">sanctuary.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/40 text-sm leading-relaxed max-w-sm"
          >
            To ensure a deeply restorative experience for yourself and others,
            we ask that you review our spa etiquette and arrival policies
            prior to your visit.
          </motion.p>
        </div>

        <div className="md:w-1/2 flex flex-col border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                key={i}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
                >
                  <h3 className={`text-xl font-serif transition-colors duration-500 ${isOpen ? "text-[#d8b979]" : "text-white group-hover:text-white/80"}`}>
                    {faq.question}
                  </h3>
                  <div className={`transition-colors duration-500 ml-4 shrink-0 ${isOpen ? "text-[#d8b979]" : "text-white/30 group-hover:text-[#d8b979]"}`}>
                    {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-white/40 text-sm leading-relaxed max-w-md">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
