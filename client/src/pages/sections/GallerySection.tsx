import React from "react";

export const GallerySection = (): JSX.Element => {
  // Data for repeating text elements
  const marqueeTexts = [
    "Royal Phoenicia",
    "Royal Phoenicia",
    "Royal Phoenicia",
    "Royal Phoenicia",
  ];

  return (
    <section className="relative w-full h-[250px] overflow-hidden bg-transparent">
      <div className="flex items-center gap-[620px] py-16 animate-marquee whitespace-nowrap">
        {marqueeTexts.map((text, index) => (
          <div
            key={`marquee-text-${index}`}
            className="opacity-80 [font-family:'Crimson_Text',Helvetica] font-normal text-white text-[179.2px] text-center tracking-[10.75px] leading-[126px] whitespace-nowrap"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};
