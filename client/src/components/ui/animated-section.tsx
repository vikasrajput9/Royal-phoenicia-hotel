import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

export const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0, 
  staggerChildren = 0.1 
}: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        staggerChildren 
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn("", className)}
    >
      {children}
    </motion.section>
  );
};

export const AnimatedDiv = ({ 
  children, 
  className, 
  delay = 0,
  direction = "up"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};