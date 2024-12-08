"use client";

import React from "react";
import Image from "next/image";

const EditorPickSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div
        className="flex flex-col items-center justify-center"
        style={{
          padding: "80px 0px",
          gap: "48px",
          width: "1050px",
          margin: "0 auto", // Centering horizontally
        }}
      >
        {/* Editor's Pick Title and Description */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#252B42]" style={{ fontFamily: "Montserrat" }}>
            EDITOR&apos;S PICK
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light text-[#252B42]" style={{ fontFamily: "Montserrat" }}>
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Row Container for Cards with reduced gap */}
        <div className="flex flex-wrap gap-4 justify-between" style={{ width: "1050px" }}>
          {/* First Card: Men (larger, takes up 50%) */}
          <div className="col-md-6" style={{ width: "510px", height: "500px", position: "relative" }}>
            <Image
              src="/men.png"
              alt="Men's Collection"
              width={510}
              height={500}
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
            
            {/* Text Box for MEN */}
            <div
              className="card-content"
              style={{
                position: "absolute",
                height: "48px",
                left: "31px",
                right: "309px",
                bottom: "26px",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <h5
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                  letterSpacing: "0.1px",
                  color: "#252B42",
                }}
              >
                MEN
              </h5>
            </div>
          </div>

          {/* Second Card: Women (smaller, takes up 25%) */}
          <div className="col-md-3" style={{ width: "240px", height: "500px", position: "relative" }}>
            <Image
              src="/women.png"
              alt="Women's Collection"
              width={240}
              height={500}
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
            
            {/* Text Box for WOMEN */}
            <div
              className="card-content"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 48px",
                gap: "10px",
                position: "absolute",
                height: "48px",
                left: "21px",
                right: "83px",
                bottom: "18px",
                background: "#FFFFFF",
                borderRadius: "8px",
              }}
            >
              <h5
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                  letterSpacing: "0.1px",
                  color: "#252B42",
                }}
              >
                WOMEN
              </h5>
            </div>
          </div>

          {/* Third and Fourth Cards: Access & Kids (grouped in a column) */}
          <div className="flex flex-col gap-0" style={{ width: "240px" }}>
            {/* Third Card: Access */}
            <div
              className="flex-none"
              style={{
                width: "240px",
                height: "242px",
                backgroundColor: "#FFFFFF",
                marginBottom: "16px", // Set gap between 3rd and 4th card
                flex: "none",
                order: 0,
                flexGrow: 0,
                position: "relative",
              }}
            >
              <Image
                src="/access.png"
                alt="Access Collection"
                width={240}
                height={242}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              
              {/* Text Box for ACCESSORIES */}
              <div
                className="card-content"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "12px 26px",
                  gap: "10px",
                  position: "absolute",
                  height: "48px",
                  left: "14px",
                  right: "56px",
                  bottom: "23px",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                }}
              >
                <h5
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "0.1px",
                    color: "#252B42",
                  }}
                >
                  ACCESSORIES
                </h5>
              </div>
            </div>

            {/* Fourth Card: Kids */}
            <div
              className="flex-none"
              style={{
                width: "240px",
                height: "242px",
                backgroundColor: "#FFFFFF",
                marginTop: "0", // Ensure no additional margin at the top
                flex: "none",
                order: 1,
                flexGrow: 0,
                position: "relative",
              }}
            >
              <Image
                src="/kids.png"
                alt="Kids' Collection"
                width={240}
                height={242}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              
              {/* Text Box for KIDS */}
              <div
                className="card-content"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "12px 40px",
                  gap: "10px",
                  position: "absolute",
                  height: "48px",
                  left: "18px",
                  right: "102px",
                  bottom: "18px",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                }}
              >
                <h5
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "0.1px",
                    color: "#252B42",
                  }}
                >
                  KIDS
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPickSection;