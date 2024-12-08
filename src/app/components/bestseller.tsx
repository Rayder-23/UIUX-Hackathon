import React from "react";
import Image from "next/image";

const BestsellerProducts: React.FC = () => {
  return (
    <div className="bg-white py-16">
      {/* Bestseller Products Section */}
      <section className="flex flex-col items-center gap-20 py-16 mt-20 w-[1124px] mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col items-center gap-2 w-[691px] h-[102px]">
          <h2 className="w-[191px] h-[30px] text-[#737373]">
            Featured Products
          </h2>
          <h3 className="w-[299px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] text-center tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="w-[347px] h-[20px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Row 2 (Product Cards) */}
        <div className="flex flex-wrap gap-7 justify-between w-[1049px] h-[615px]">
          {/* 1st Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card1.png"
              alt="Product Image 1"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 2nd Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card2.png"
              alt="Product Image 2"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3rd Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card3.png"
              alt="Product Image 3"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4th Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card4.png"
              alt="Product Image 4"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 (New Product Cards with updated image names) */}
        <div className="flex flex-wrap gap-7 justify-between w-[1049px] h-[615px]">
          {/* 5th Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card5.png"
              alt="Product Image 5"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 6th Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card6.png"
              alt="Product Image 6"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 7th Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card7.png"
              alt="Product Image 7"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* 8th Product Card */}
          <div className="w-[239px] h-[615px] flex flex-col bg-white">
            {/* Image */}
            <Image
              src="/best-card8.png"
              alt="Product Image 8"
              width={239}
              height={427}
              className="w-[239px] h-[427px] object-cover"
            />

            {/* Text Container */}
            <div className="flex flex-col items-center p-[25px] pb-[35px] gap-[10px] w-[239px] h-[188px]">
              <h5 className="text-center text-[#252B42] font-semibold text-[18px] leading-[24px]">
                Graphic Design
              </h5>
              <p className="text-center text-[#737373] text-[14px] leading-[20px]">
                English Department
              </p>

              {/* Prices */}
              <div className="flex flex-row items-start px-[5px] py-[3px] gap-[5px] w-[108px] h-[34px]">
                {/* Price 1 */}
                <h5 className="w-[52px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD]">
                  $16.48
                </h5>
                {/* Price 2 */}
                <h5 className="w-[45px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#23856D]">
                  $6.48
                </h5>
              </div>

              {/* Color Selector */}
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {/* Blue Color */}
                <Image
                  src="/blue-dot.png"
                  alt="Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Green Color */}
                <Image
                  src="/green-dot.png"
                  alt="Green Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Orange Color */}
                <Image
                  src="/orange-dot.png"
                  alt="Orange Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                {/* Dark Blue Color */}
                <Image
                  src="/dblue-dot.png"
                  alt="Dark Blue Color"
                  width={16}
                  height={16}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestsellerProducts;