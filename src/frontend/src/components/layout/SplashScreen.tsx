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
        {/* Logo mark */}
        <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-2xl">
          <span
            className="text-5xl font-black"
            style={{ color: "oklch(0.43 0.10 185)" }}
          >
            H
          </span>
        </div>
        {/* Brand name */}
        <div className="flex items-baseline gap-0.5">
          <span className="text-4xl font-black text-white tracking-tight">
            HOMI
          </span>
          <span
            className="text-4xl font-black tracking-tight"
            style={{ color: "oklch(0.75 0.16 65)" }}
          >
            VA
          </span>
        </div>
        <p className="text-white/70 text-sm tracking-widest uppercase font-medium">
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
