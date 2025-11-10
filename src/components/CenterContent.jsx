import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CenterContent = ({ text }) => {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={text}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-light text-white drop-shadow-lg"
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default CenterContent;
