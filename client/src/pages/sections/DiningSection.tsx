import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const DiningSection = (): JSX.Element => {
  // Package data for mapping
  const packages = [
    {
      id: 1,
      image: "/figmaAssets/rectangle-27-1.png",
      title: "Royal Weekend Escape Package",
      price: "From BHD 250 / Per person / 3 Night",
    },
    {
      id: 2,
      image: "/figmaAssets/rectangle-27-2.png",
      title: "Family Fun Staycation",
      price: "From BHD 150 / 4 person / 2 Night",
    },
    {
      id: 3,
      image: "/figmaAssets/rectangle-27-3.png",
      title: "Family Fun Staycation",
      price: "From BHD 150 / 4 person / 2 Night",
    },
  ];

  return (
    <section className="w-full h-[600px] py-[25px] overflow-hidden">
      <Carousel className="mx-auto max-w-[1540px]">
        <CarouselContent className="flex gap-10 pl-0 pr-5">
          {packages.map((pkg) => (
            <CarouselItem key={pkg.id} className="basis-[750px] flex-shrink-0">
              <Card className="w-full h-[550px] relative border-none rounded-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="h-full w-full bg-[#0000004c]" />
                </div>

                <div className="absolute top-5 left-5 w-[calc(100%-40px)] h-[calc(100%-40px)] border-[0.8px] border-solid border-[#b0acac]" />

                <CardContent className="flex flex-col items-center justify-center h-full relative z-10 pt-[74px] pb-[74px]">
                  <div className="flex flex-col w-[437px] h-[402px] items-center gap-[110px]">
                    <div className="self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-sm text-center tracking-[0.04px] leading-[50px]">
                      All season
                    </div>

                    <div className="flex flex-col items-center self-stretch w-full">
                      <h3 className="self-stretch [font-family:'Crimson_Text',Helvetica] font-semibold text-white text-3xl tracking-[1.80px] leading-[50px] text-center">
                        {pkg.title}
                      </h3>
                      <p className="self-stretch -mt-4 [font-family:'Poppins',Helvetica] font-medium text-[#d5d5d5] text-sm text-center tracking-[0.28px] leading-[50px]">
                        {pkg.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-9">
                      <Button
                        variant="outline"
                        className="w-[120px] h-12 rounded-[50px] bg-[#ffffff33] border-[0.6px] border-solid border-white [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0.14px]"
                      >
                        MORE
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-[50px] bg-[#ffffff33] border-[0.6px] border-solid border-white flex items-center justify-center"
                      >
                        <div className="relative w-3 h-[13px]">
                          <div className="absolute w-3 h-2.5 top-[3px] left-0 rounded-[1px] border-[1.6px] border-solid border-white" />
                          <img
                            className="absolute w-1.5 h-[5px] top-0 left-[3px]"
                            alt="Subtract"
                            src="/figmaAssets/subtract-1.svg"
                          />
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
