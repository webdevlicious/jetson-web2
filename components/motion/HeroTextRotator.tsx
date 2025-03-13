"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroTextRotator() {
  // Phrases with highlighted words (indicated by * before the word to highlight)
  const phrasesWithHighlights = [
    "Connect with *Coaches",
    "Get *Recruited",
    "*Get NIL Deals",
    "Find *Best Fits",
    "Show Your *Skills",
    "*Match With Schools",
    "Plan Your *Path",
    "Grab Their *Eyes",
    "Map Your *Future",
    "Rise *Above Peers",
    "Get Fast *Results",
    "Grow Your *Reach",
    "*Jump The Line",
    "Write Your *Ticket"
  ];
  
  const [displayedIndices, setDisplayedIndices] = React.useState<number[]>([]);
  const [currentPhrase, setCurrentPhrase] = React.useState<React.ReactNode | null>(null);
  
  // Function to process a phrase and create React elements with the highlight
  const processPhrase = (phrase: string) => {
    const words = phrase.split(" ");
    return words.map((word, i) => {
      if (word.startsWith("*")) {
        // Remove the * and apply highlight color
        return (
          <span key={i} className="text-[#56F699]">
            {word.substring(1)}{i < words.length - 1 ? " " : ""}
          </span>
        );
      }
      return (
        <span key={i} className="text-white">
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  // Get next random index that hasn't been shown in the current cycle
  const getNextIndex = () => {
    const availableIndices = Array.from(
      { length: phrasesWithHighlights.length },
      (_, i) => i
    ).filter(i => !displayedIndices.includes(i));
    
    // If all phrases have been shown, reset the cycle
    if (availableIndices.length === 0) {
      setDisplayedIndices([]);
      return Math.floor(Math.random() * phrasesWithHighlights.length);
    }
    
    // Pick a random index from available ones
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    return availableIndices[randomIndex];
  };

  React.useEffect(() => {
    // Set initial phrase
    const initialIndex = getNextIndex();
    setDisplayedIndices([initialIndex]);
    setCurrentPhrase(processPhrase(phrasesWithHighlights[initialIndex]));
    
    const interval = setInterval(() => {
      const nextIndex = getNextIndex();
      setDisplayedIndices(prev => [...prev, nextIndex]);
      setCurrentPhrase(processPhrase(phrasesWithHighlights[nextIndex]));
    }, 2000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className="inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayedIndices.length > 0 ? displayedIndices[displayedIndices.length - 1] : "initial"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {currentPhrase}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}