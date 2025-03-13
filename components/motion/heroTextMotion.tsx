"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroTextMotion() {
  const words = ["connecting with coaches", "getting scholarships", "earning more from NILs"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1800);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[3.5rem]"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}