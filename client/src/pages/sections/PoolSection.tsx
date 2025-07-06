import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const PoolSection = (): JSX.Element => {
  // Data for the three feature cards
  const featureCards = [
    {
      id: "fitness",
      backgroundImage: "/figmaAssets/rectangle-26.png",
      overlayColor: "bg-[#2f3339]",
      gradientColor:
        "bg-[linear-gradient(180deg,rgba(50,64,87,0)_0%,rgba(10,30,65,1)_92%)]",
      title: "Fitness",
      subtitle: "Center",
    },
    {
      id: "dining",
      backgroundImage: "/figmaAssets/rectangle-28.png",
      overlayColor: "bg-[#703808]",
      gradientColor:
        "bg-[linear-gradient(180deg,rgba(50,64,87,0)_0%,rgba(92,52,17,1)_92%)]",
      title: "On-Site",
      subtitle: "Dining",
    },
    {
      id: "wellness",
      backgroundImage: "/figmaAssets/rectangle-27.png",
      overlayColor: "bg-[#0b0c0e]",
      gradientColor:
        "bg-[linear-gradient(180deg,rgba(50,64,87,0)_0%,rgba(14,16,17,1)_85%)]",
      title: "Wellness Center",
      subtitle: "& Spa",
    },
  ];

  return (
    <section className="relative w-full h-[1010px] flex flex-row bg-[#c08a8a]">
      {featureCards.map((card) => (
        <Card
          key={card.id}
          className="relative w-1/3 h-full rounded-none border-none"
        >
          <CardContent className="p-0 h-full">
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 ${card.overlayColor} opacity-30`}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute w-full h-[505px] bottom-0 ${card.gradientColor}`}
              />

              {/* Text content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[30%] text-center">
                <h3 className="[font-family:'Crimson_Text',Helvetica] font-normal text-white text-[50px] tracking-[1.50px] leading-[70px]">
                  {card.title}
                </h3>
                <h2 className="[font-family:'Crimson_Text',Helvetica] font-semibold text-white text-[70px] tracking-[2.94px] leading-[70px]">
                  {card.subtitle}
                </h2>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
