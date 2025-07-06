import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex justify-center">
      <div className="flex flex-col items-center justify-center gap-8 max-w-5xl">
        <h1 className="font-['Crimson_Text',Helvetica] font-semibold text-[#e1e1e1] text-7xl md:text-8xl lg:text-[115.2px] text-center tracking-[6.91px] leading-tight">
          Hotel <br />
          Royal Phoenicia
        </h1>

        <p className="font-['Poppins',Helvetica] font-medium text-[#cfcfcf] text-lg md:text-xl text-center tracking-[0.40px] leading-relaxed">
          YOUR FAVOURITE PLACE. OUR FAMILY STORY.
        </p>
      </div>
    </section>
  );
};
