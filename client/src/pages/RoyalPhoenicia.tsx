import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/ui/navbar";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/animated-section";
import { AboutSection } from "./sections/AboutSection";
import { DiningSection } from "./sections/DiningSection";
import { EventsSection } from "./sections/EventsSection";
import { GallerySection } from "./sections/GallerySection";
import { PoolSection } from "./sections/PoolSection";
import { ServicesSection } from "./sections/ServicesSection";

export const RoyalPhoenicia = (): JSX.Element => {
  const hotelFeatures = [
    "Luxury Accommodations",
    "Business & Event Spaces",
    "Diverse Dining Options",
    "Multiple Swimming Pools",
    "Family-Friendly Amenities",
  ];

  const featureCategories = [
    { title: "Rooms", image: "/figmaAssets/rectangle-79.png" },
    { title: "Pools", image: "/figmaAssets/rectangle-78.png" },
    { title: "Dining", image: "/figmaAssets/rectangle-80.png" },
  ];

  // Event cards data
  const eventCards = [
    {
      title: "For companies",
      description: "Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable accommodations, and exceptional cuisine.",
    },
    {
      title: "Family gatherings",
      description: "We know how much your event means to you—be it a jubilee, anniversary, or wedding, we're here to make every detail count with elegance and care.",
    },
  ];

  return (
    <div className="bg-white w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/figmaAssets/royal-phoenicia-hotel-1.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-blue-900/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hotel <br />
              Royal Phoenicia
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              YOUR FAVOURITE PLACE. OUR FAMILY STORY.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
              <span className="text-sm tracking-widest">2022</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <div key={star} className="w-4 h-4 text-yellow-400">★</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              The stay at Wellness & Pool Hotel Royal Phoenicia means enjoying every moment.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Relax. Find inspiration. Be fascinated.
            </p>
            <Button
              variant="outline"
              className="bg-white/80 hover:bg-white border-gray-300 text-gray-700 rounded-full px-8 py-6 text-lg"
            >
              Explore Hotel
            </Button>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Discover Our Amenities
            </h2>
          </AnimatedDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featureCategories.map((category, index) => (
              <AnimatedCard key={category.title} delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-lg">
                  <div 
                    className="h-64 sm:h-80 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div className="absolute inset-0 bg-blue-900/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedDiv className="mt-12 text-center">
            <Button
              variant="outline"
              className="bg-white/80 hover:bg-white border-gray-300 text-gray-700 rounded-full px-8 py-6 text-lg"
            >
              View Accommodations
            </Button>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Hotel Features */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimatedCard className="bg-white/80 border-gray-200 p-6 sm:p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                    Why Choose Royal Phoenicia
                  </h3>
                </div>
                <div className="space-y-4">
                  {hotelFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center py-2 text-gray-700 font-medium"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Event Cards Section */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Perfect for Every Occasion
            </h2>
          </AnimatedDiv>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eventCards.map((card, index) => (
              <AnimatedCard key={card.title} delay={index * 0.2}>
                <CardContent className="p-6 sm:p-8 h-full">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <Button
                      variant="outline"
                      className="bg-white/80 hover:bg-white border-gray-300 text-gray-700 rounded-full px-6 py-3"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <GallerySection />
      </AnimatedSection>

      {/* Sections */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20">
        <PoolSection />
      </AnimatedSection>

      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <DiningSection />
      </AnimatedSection>

      <AnimatedSection className="py-12 sm:py-16 md:py-20">
        <EventsSection />
      </AnimatedSection>

      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-blue-900">
        <AboutSection />
      </AnimatedSection>
    </div>
  );
};