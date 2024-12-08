"use client";

import React from "react";
import Image from "next/image";

const Hero2Section: React.FC = () => {
  return (
    <section className="relative w-full h-[800px]">
      {/* Background Image using Next.js Image component */}
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Image
          src="/hero2bg.png"
          alt="Hero Image"
          layout="fill"
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        {/* Container div for the row */}
        <div className="flex flex-col items-start py-[112px] gap-[80px] absolute w-[1036px] h-[711px] left-[calc(50%-1036px/2+7px)] top-0">
          {/* Row */}
          <div className="flex flex-row gap-8 w-full max-w-[1049px]">
            {/* Column 1: Text Section with Updated Styles */}
            <div className="flex flex-col items-start px-[60px] gap-[30px] w-[509px] h-[432px]">
              {/* "Summer 2020" Text */}
              <p className="text-sm font-light uppercase tracking-wide">Summer 2020</p>

              {/* "New Collection" Title */}
              <h2 className="text-3xl sm:text-5xl font-bold mt-2">Vita Classic Product</h2>

              {/* Description */}
              <p className="mt-4 text-lg">
                We know how large objects will act, We know how objects will act, We know.
              </p>

              {/* Container for Price and Button */}
              <div className="flex flex-row gap-[34px] items-center mt-6 w-[295px] h-[52px]">
                {/* Price */}
                <h5 className="w-[77px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] text-center tracking-[0.1px] text-white">
                  $16.48
                </h5>

                {/* Add to Cart Button */}
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-lg">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Column 2: Image Section */}
            <div className="w-full sm:w-[50%] flex flex-col items-center justify-center">
              <Image
                src="/hero2main.png"
                alt="Hero 2 Main Image"
                width={510}
                height={685}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2Section;