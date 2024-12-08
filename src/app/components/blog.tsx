"use client";

import React from "react";
import Image from "next/image";

const BlogSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] pt-[80px]">
      {/* Container for blog content */}
      <div className="flex flex-col items-center gap-20 w-[1050px] mx-auto py-[112px]">
        {/* First Row */}
        <div className="flex flex-col items-center w-[692px] h-[134px]">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-2 w-[691px] h-[134px]">
            {/* "Practice Advice" Text */}
            <p className="text-[14px] font-semibold text-[#23A6F0] tracking-[0.2px] text-center">
              Practice Advice
            </p>
            {/* "Featured Posts" Title */}
            <h3 className="text-[40px] font-bold text-[#252B42] text-center tracking-[0.2px]">
              Featured Posts
            </h3>
            {/* Description Paragraph */}
            <p className="text-[14px] font-normal text-[#737373] text-center tracking-[0.2px]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>

        {/* Second Row - Blog Post Columns */}
        <div className="flex flex-row justify-center items-start gap-7 w-full max-w-[1045px] h-[606px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center p-0 w-[328px] h-[606px]">
            {/* Content Card */}
            <div className="flex flex-col items-start p-0 w-[348px] h-[606px] bg-white shadow-md">
              {/* Image Div */}
              <div className="w-[348px] h-[300px] relative flex-none order-0 self-stretch flex-grow-0">
                <Image
                  src="/blog1.png"
                  alt="Blog Post 1"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              {/* Text Content */}
              <div className="flex flex-col items-start p-[25px] pb-[35px] gap-2 w-[348px] h-[306px]">
                {/* Tags */}
                <div className="flex flex-row items-center gap-[15px] w-[159px] h-[16px]">
                  <span className="text-[12px] font-normal text-[#8EC2F2]">Google</span>
                  <span className="text-[12px] font-normal text-[#737373]">Trending</span>
                  <span className="text-[12px] font-normal text-[#737373]">New</span>
                </div>
                {/* Post Title */}
                <h4 className="text-[20px] font-normal text-[#252B42] w-[247px] h-[60px]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                {/* Post Description */}
                <p className="text-[14px] font-normal text-[#737373] w-[280px] h-[60px]">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                {/* Frame 1 (For Buttons) */}
                <div className="flex flex-row justify-between items-center gap-[10px] w-[298px] h-[46px] p-[15px_0px]">
                  {/* Left Button with Clock Icon */}
                  <div className="flex flex-row items-center gap-[5px] w-[98px] h-[16px]">
                    <div className="w-[16px] h-[16px] relative flex-none order-0 flex-grow-0">
                      <Image
                        src="/clock-icon.png"
                        alt="Clock Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-[12px] font-normal text-[#737373] w-[77px] h-[16px]">
                      22 April 2021
                    </span>
                  </div>
                  {/* Right Button with Graph Icon */}
                  <div className="flex flex-row items-center gap-[5px] w-[105px] h-[16px]">
                    <div className="w-[16px] h-[14.67px] relative flex-none order-0 flex-grow-0">
                      <Image
                        src="/graph-icon.png"
                        alt="Graph Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-[12px] font-normal text-[#737373] w-[84px] h-[16px]">
                      10 comments
                    </span>
                  </div>
                </div>
                {/* Learn More Section */}
                <div className="flex flex-row items-center gap-[10px] w-[104px] h-[24px]">
                  {/* Learn More Text */}
                  <span className="text-[14px] font-bold text-[#737373] w-[85px] h-[24px]">
                    Learn More
                  </span>
                  {/* Arrow Icon */}
                  <div className="w-[9px] h-[16px] relative flex-none order-1 flex-grow-0">
                    <Image
                      src="/arrow-icon.png"
                      alt="Arrow Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center p-0 w-[328px] h-[606px]">
            {/* Content Card */}
            <div className="flex flex-col items-start p-0 w-[348px] h-[606px] bg-white shadow-md">
              {/* Image Div */}
              <div className="w-[348px] h-[300px] relative flex-none order-0 self-stretch flex-grow-0">
                <Image
                  src="/blog2.png"
                  alt="Blog Post 2"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              {/* Text Content */}
              <div className="flex flex-col items-start p-[25px] pb-[35px] gap-2 w-[348px] h-[306px]">
                {/* Tags */}
                <div className="flex flex-row items-center gap-[15px] w-[159px] h-[16px]">
                  <span className="text-[12px] font-normal text-[#8EC2F2]">Google</span>
                  <span className="text-[12px] font-normal text-[#737373]">Trending</span>
                  <span className="text-[12px] font-normal text-[#737373]">New</span>
                </div>
                {/* Post Title */}
                <h4 className="text-[20px] font-normal text-[#252B42] w-[247px] h-[60px]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                {/* Post Description */}
                <p className="text-[14px] font-normal text-[#737373] w-[280px] h-[60px]">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                {/* Frame 1 (For Buttons) */}
                <div className="flex flex-row justify-between items-center gap-[10px] w-[298px] h-[46px] p-[15px_0px]">
                  {/* Left Button with Clock Icon */}
                  <div className="flex flex-row items-center gap-[5px] w-[98px] h-[16px]">
                    <div className="w-[16px] h-[16px] relative flex-none order-0 flex-grow-0">
                      <Image
                        src="/clock-icon.png"
                        alt="Clock Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-[12px] font-normal text-[#737373] w-[77px] h-[16px]">
                      22 April 2021
                    </span>
                  </div>
                  {/* Right Button with Graph Icon */}
                  <div className="flex flex-row items-center gap-[5px] w-[105px] h-[16px]">
                    <div className="w-[16px] h-[14.67px] relative flex-none order-0 flex-grow-0">
                      <Image
                        src="/graph-icon.png"
                        alt="Graph Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-[12px] font-normal text-[#737373] w-[84px] h-[16px]">
                      10 comments
                    </span>
                  </div>
                </div>
                {/* Learn More Section */}
                <div className="flex flex-row items-center gap-[10px] w-[104px] h-[24px]">
                  {/* Learn More Text */}
                  <span className="text-[14px] font-bold text-[#737373] w-[85px] h-[24px]">
                    Learn More
                  </span>
                  {/* Arrow Icon */}
                  <div className="w-[9px] h-[16px] relative flex-none order-1 flex-grow-0">
                    <Image
                      src="/arrow-icon.png"
                      alt="Arrow Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center p-0 w-[328px] h-[606px]">
            {/* Content Card */}
            <div className="flex flex-col items-start p-0 w-[348px] h-[606px] bg-white shadow-md">
              {/* Image Div */}
              <div className="w-[348px] h-[300px] relative flex-none order-0 self-stretch flex-grow-0">
                <Image
                  src="/blog3.png"
                  alt="Blog Post 3"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              {/* Text Content */}
              <div className="flex flex-col items-start p-[25px] pb-[35px] gap-2 w-[348px] h-[306px]">
                {/* Tags */}
                <div className="flex flex-row items-center gap-[15px] w-[159px] h-[16px]">
                  <span className="text-[12px] font-normal text-[#8EC2F2]">Google</span>
                  <span className="text-[12px] font-normal text-[#737373]">Trending</span>
                  <span className="text-[12px] font-normal text-[#737373]">New</span>
                </div>
                {/* Post Title */}
                <h4 className="text-[20px] font-normal text-[#252B42] w-[247px] h-[60px]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                {/* Post Description */}
                <p className="text-[14px] font-normal text-[#737373] w-[280px] h-[60px]">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                {/* Frame 1 (For Buttons) */}
                <div className="flex flex-row justify-between items-center gap-[10px] w-[298px] h-[46px] p-[15px_0px]">
                  {/* Left Button with Clock Icon */}
                  <div className="flex flex-row items-center gap-[5px] w-[98px] h-[16px]">
                    <div className="w-[16px] h-[16px] relative flex-none order-0 flex-grow-0">
                      <Image
                        src="/clock-icon.png"
                        alt="Clock Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-[12px] font-normal text-[#737373] w-[77px] h-[16px]">
                      22 April 2021
                    </span>
                  </div>
                  {/* Right Button with Graph Icon */}
                  <div className="flex flex-row items-center gap-[5px] w-[105px] h-[16px]">
                    <div className="w-[16px] h-[14.67px] relative flex-none order-0 flex-grow-0">
                      <Image
                        src="/graph-icon.png"
                        alt="Graph Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-[12px] font-normal text-[#737373] w-[84px] h-[16px]">
                      10 comments
                    </span>
                  </div>
                </div>
                {/* Learn More Section */}
                <div className="flex flex-row items-center gap-[10px] w-[104px] h-[24px]">
                  {/* Learn More Text */}
                  <span className="text-[14px] font-bold text-[#737373] w-[85px] h-[24px]">
                    Learn More
                  </span>
                  {/* Arrow Icon */}
                  <div className="w-[9px] h-[16px] relative flex-none order-1 flex-grow-0">
                    <Image
                      src="/arrow-icon.png"
                      alt="Arrow Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
