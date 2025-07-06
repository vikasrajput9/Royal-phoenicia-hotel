import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const EventsSection = (): JSX.Element => {
  // Data for facility cards
  const facilities = [
    {
      icon: "/figmaAssets/group-51.png",
      iconAlt: "Restaurant icon",
      title: "Restaurant",
      description:
        "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.",
    },
    {
      icon: null, // Complex icon composed of multiple elements
      title: "POOL",
      description:
        "Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.",
    },
    {
      icon: "/figmaAssets/vector-2.svg",
      iconAlt: "Room icon",
      title: "ROOM",
      description:
        "Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and well-equipped rooms to suit diverse guest preferences.",
    },
  ];

  return (
    <section className="w-full py-12 flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[178px] max-w-7xl">
        {facilities.map((facility, index) => (
          <Card
            key={index}
            className="w-full md:w-[395px] border-none shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-center justify-center p-0">
              {/* Icon section */}
              {index === 1 ? (
                // Pool icon (complex structure)
                <div className="relative w-[45px] h-[31.25px] mb-4">
                  <div className="relative w-[45px] h-[31px]">
                    <div className="absolute w-[45px] h-[19px] top-3 left-0">
                      <div className="relative h-[19px]">
                        <img
                          className="absolute w-[45px] h-[9px] top-0 left-0"
                          alt="Pool icon part 1"
                          src="/figmaAssets/group-54.png"
                        />
                        <img
                          className="absolute w-[45px] h-[9px] top-[5px] left-0"
                          alt="Pool icon part 2"
                          src="/figmaAssets/group-55.png"
                        />
                        <img
                          className="absolute w-[45px] h-[9px] top-2.5 left-0"
                          alt="Pool icon part 3"
                          src="/figmaAssets/group-56.png"
                        />
                      </div>
                    </div>
                    <div className="absolute w-2.5 h-[18px] top-0 left-4">
                      <div className="absolute w-px h-4 top-0.5 left-[3px] bg-black" />
                      <div className="absolute w-px h-4 top-0.5 left-[9px] bg-black" />
                      <div className="absolute w-[5px] h-px top-[5px] left-1 bg-black" />
                      <div className="absolute w-[5px] h-px top-2 left-1 bg-black" />
                      <div className="absolute w-[5px] h-px top-[11px] left-1 bg-black" />
                      <div className="absolute w-[5px] h-px top-3.5 left-1 bg-black" />
                      <img
                        className="absolute w-1 h-0.5 top-0 left-0"
                        alt="Subtract"
                        src="/figmaAssets/subtract-7.svg"
                      />
                      <img
                        className="absolute w-1 h-0.5 top-0 left-1.5"
                        alt="Subtract"
                        src="/figmaAssets/subtract-3.svg"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  className={`${index === 0 ? "w-[40.96px] h-8" : "w-8 h-8"} mb-4`}
                  alt={facility.iconAlt}
                  src={facility.icon}
                />
              )}

              {/* Title section */}
              <div className="flex w-full h-20 items-center justify-center">
                <h3 className="[font-family:'Crimson_Text',Helvetica] font-normal text-[#201b15] text-[40px] tracking-[2.40px] leading-[80px]">
                  {facility.title}
                </h3>
              </div>

              {/* Description section */}
              <p className="[font-family:'Poppins',Helvetica] font-medium text-[#767676] text-base text-center tracking-[0.16px] leading-5">
                {facility.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
