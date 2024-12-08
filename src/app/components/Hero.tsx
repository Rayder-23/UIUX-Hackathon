"use client";

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[800px]">
      {/* Background Image using Next.js Image component */}
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Image
          src="/hero-section.png"
          alt="Hero Image"
          layout="fill"
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left text-white px-8">
        {/* "Summer 2020" Text */}
        <p className="text-sm font-light uppercase tracking-wide">Summer 2020</p>

        {/* "New Collection" Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mt-2">NEW COLLECTION</h2>

        {/* Description */}
        <p className="mt-4 text-lg">
          We know how large objects will act, but things on a small scale.
        </p>

        {/* Shop Now Button */}
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;