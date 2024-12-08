"use client";

import React from "react";
import Image from "next/image";

const Hero3Section: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Container (center align with mx-auto) */}
      <div className="container mx-auto">
        {/* Row */}
        <div className="flex flex-row justify-between items-center gap-[30px] w-full">
          {/* First Column */}
          <div className="w-[704px] h-[682px] relative overflow-hidden">
            {/* hero-cover-1 */}
            <div className="absolute left-0 right-0 top-0 bottom-0">
              {/* Can be used for background styling */}
            </div>

            {/* Image in first column */}
            <div className="absolute w-full h-full left-0 top-0">
              <Image
                src="/hero3main.png"
                alt="Hero Image 3"
                width={704}   // Adjust width to match the column width
                height={682}  // Adjust height to match the column height
                layout="intrinsic"
                objectFit="contain"   // Ensures the image fits within the container
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Second Column for text */}
          <div className="w-[573px] h-[326px] flex flex-col justify-center items-start gap-[30px]">
            {/* "SUMMER 2020" */}
            <h5 className="w-[122px] h-[24px] font-semibold text-sm leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
              SUMMER 2020
            </h5>

            {/* Headline: "Part of the Neural Universe" */}
            <h1 className="w-[375px] h-[100px] font-bold text-4xl leading-[50px] tracking-[0.2px] text-[#252B42]">
              Part of the Neural Universe
            </h1>

            {/* Sub-headline: "We know how large objects will act..." */}
            <h4 className="w-[376px] h-[60px] font-normal text-lg leading-[30px] tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3Section;