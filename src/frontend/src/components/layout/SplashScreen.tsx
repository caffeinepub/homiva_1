import { motion } from "motion/react";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "oklch(0.43 0.10 185)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        {/* Logo */}
        <div className="w-48 h-48 rounded-3xl bg-white flex items-center justify-center shadow-2xl p-4">
          <img
            src="/assets/uploads/IMG-20251217-WA0103.jpg-1-1.jpeg"
            alt="HOMIVA"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-white/70 text-sm tracking-widest uppercase font-medium mt-2">
          Your Home Care Partner
        </p>
      </motion.div>

      {/* Loader dots */}
      <motion.div
        className="flex gap-2 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-white/60"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
