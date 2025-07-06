import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  hover?: boolean;
}

export const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0, 
  direction = "up", 
  hover = true 
}: AnimatedCardProps) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 }
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
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={hover ? { 
        y: -5, 
        transition: { duration: 0.2 } 
      } : {}}
      className={cn("cursor-pointer", className)}
    >
      <Card className="h-full">
        {children}
      </Card>
    </motion.div>
  );
};