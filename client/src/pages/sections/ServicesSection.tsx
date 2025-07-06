import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const ServicesSection = (): JSX.Element => {
  // Define service categories for easy maintenance and scalability
  const serviceCategories = ["Corporate Events", "Social Celebrations"];

  return (
    <section className="w-full py-16 overflow-hidden bg-transparent">
      <Carousel className="w-full">
        <CarouselContent className="flex items-center justify-center gap-16 px-8 md:px-16 lg:px-24">
          {serviceCategories.map((category, index) => (
            <CarouselItem key={index} className="flex-none">
              <h2 className="opacity-70 font-['Crimson_Text',Helvetica] font-normal text-white text-6xl md:text-8xl lg:text-[179.2px] text-center tracking-[10.75px] leading-tight whitespace-nowrap">
                {category}
              </h2>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
