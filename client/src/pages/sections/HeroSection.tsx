import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const HeroSection = (): JSX.Element => {
  // Data for the event cards
  const eventCards = [
    {
      title: "For companies",
      description:
        "Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable accommodations, and exceptional cuisine that elevate every professional gathering.",
    },
    {
      title: "Family gatherings",
      description:
        "We know how much your event means to you—be it a jubilee, anniversary, or wedding, we're here to make every detail count with elegance, care, and unforgettable experiences tailored just for you.",
    },
  ];

  return (
    <ScrollArea className="w-full max-w-[524px] h-[750px] relative">
      <div className="flex flex-col items-start gap-[730px] pt-10 pb-[750px] px-[46px]">
        {eventCards.map((card, index) => (
          <Card
            key={`event-card-${index}`}
            className="w-[440px] h-[440px] bg-[#ffffff1a] border-[0.8px] border-solid border-[#b0acac] rounded-none"
          >
            <CardContent className="p-0">
              <div className="relative w-[440px] h-[440px]">
                <div className="relative w-[400px] h-[400px] top-5 left-5 bg-white">
                  <div className="relative w-[360px] h-[360px] top-5 left-5 border-[0.8px] border-solid border-[#b0acac]" />
                </div>

                <div className="flex flex-col w-[317px] items-center gap-3 px-0 py-4 absolute top-[59px] left-[62px]">
                  <div className="flex flex-col items-center relative self-stretch w-full">
                    <h2 className="relative w-fit mt-[-1.00px] font-['Crimson_Text',Helvetica] font-normal text-black text-[40px] text-center tracking-[2.40px] leading-[50px] whitespace-nowrap">
                      {card.title}
                    </h2>
                  </div>

                  <div className="inline-flex flex-col items-center gap-12 relative">
                    <p className="relative w-[295px] mt-[-1.00px] font-['Poppins',Helvetica] font-normal text-[#767676] text-base text-center tracking-[0.16px] leading-5">
                      {card.description}
                    </p>

                    <Button
                      variant="outline"
                      className="w-[120px] h-12 bg-[#ffffff33] rounded-[50px] border-[0.6px] border-solid border-[#767676]"
                    >
                      <span className="font-['Poppins',Helvetica] font-medium text-[#6a6c6d] text-sm tracking-[0.14px] leading-[50px]">
                        MORE
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};
