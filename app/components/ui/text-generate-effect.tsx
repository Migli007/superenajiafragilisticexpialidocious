"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  delay?: number;
}

export const TextGenerateEffect = ({
  words,
  className = "",
  delay = 0.04,
}: TextGenerateEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(words.slice(0, i + 1));
      i++;
      if (i >= words.length) clearInterval(interval);
    }, delay * 1000);

    return () => clearInterval(interval);
  }, [words, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
    </motion.span>
  );
};
