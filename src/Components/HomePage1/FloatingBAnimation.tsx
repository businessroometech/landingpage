import React from "react";
import { motion } from "framer-motion";

const FloatingBAnimation = () => {
  const floatingVariants = {
    initial: { y: 0, opacity: 0.5 },
    animate: {
      y: [0, -20, 0], // Moves up and down
      opacity: [0.4, 0.8, 0.4],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const bLetters = Array.from({ length: 10 }).map((_, index) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 50 + 20}px`,
  }));

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}>
      {bLetters.map((b, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            left: b.left,
            top: b.top,
            fontSize: b.size,
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.2)",
          }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        >
          B
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBAnimation;
