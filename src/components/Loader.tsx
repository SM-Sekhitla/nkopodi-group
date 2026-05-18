import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="font-display font-bold tracking-[0.3em] text-2xl">
              NKOPODI <span className="text-electric">GROUP</span>
            </div>
            <div className="h-px w-48 bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-electric to-electric-glow"
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Initialising · Industrial Systems
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
