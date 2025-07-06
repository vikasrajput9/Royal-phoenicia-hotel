import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const AboutSection = (): JSX.Element => {
  // Navigation links data
  const navigationLinks = [
    "More about rooms",
    "120 comfortable rooms",
    "Dinings",
    "Packages",
    "Pools",
  ];

  // Contact information
  const contactInfo = [
    { text: "+973 1730 7307", icon: Phone },
    { text: "info@royalphoeniciahotel.com", icon: Mail },
    { text: "Contacts →", icon: MapPin },
  ];

  // Address information
  const addressInfo = [
    "Building 1288",
    "Road 3931, Block 339",
    "Umm Al Hasam – Manama",
    "Bahrain",
  ];

  // Social media icons
  const socialIcons = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Hotel Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Hotel Information</h3>
            <div className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hotel Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-2xl">R</span>
              </div>
            </div>

            {/* Hotel Name */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold">Wellness & Pools</h2>
              <h2 className="text-2xl font-bold">Hotel Royal Phoenicia</h2>
            </div>

            {/* Address */}
            <div className="space-y-1 text-center">
              {addressInfo.map((line, index) => (
                <p key={index} className="text-white/80 text-sm">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <item.icon size={18} />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <social.icon size={18} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};