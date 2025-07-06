import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ROOMS", href: "#rooms" },
    { label: "WELLNESS", href: "#wellness" },
    { label: "GASTRO", href: "#gastro" },
    { label: "HOTEL", href: "#hotel" },
    { label: "EVENTS", href: "#events" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md", className)}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="ml-2 text-white font-semibold text-lg hidden md:block">
              Royal Phoenicia
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Booking Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Button
              variant="outline"
              className="bg-blue-900/80 hover:bg-blue-800/80 text-white border-white/20 rounded-full px-6"
            >
              Booking
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                variant="outline"
                className="bg-blue-900/80 hover:bg-blue-800/80 text-white border-white/20 rounded-full w-full mt-4"
              >
                Booking
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};