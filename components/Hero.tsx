"use client";
import React from "react";

function Hero() {
  return (
    <section className="w-full flex flex-col items-center px-2 py-2 relative overflow-hidden">
      {/* --- RESPONSIVE HEADING SECTION --- */}
<div className="text-right md:text-center mb-8">
  {/* First Line */}
  <h1 className="text-xl md:text-[85px] mb-2 md:mb-18">
    <span
      style={{ color: "#418CFF", fontWeight: "600" }}
      className="font-gilmer md:ml-90"
    >
      ScaleUp Conclave{" "}
    </span>
    <img
      src="/assets/images/v.svg"
      alt="icon"
      className="inline-block w-5 h-5 md:w-[60px] md:h-[60px]"
    />
  </h1>

  {/* Second Line */}
  <h1
    className="text-right text-5xl sm:text-6xl -mb-9 -mt-4 md:text-[180px] md:-mt-29 md:mb-5"
    style={{ color: "#4028C8" }}
  >
    <span
      className="font-gilmer tracking-tight sm:text-6xl md:text-[140px] lg:text-[170px]"
      style={{ color: "#060832" }}
    >
      The
    </span>{" "}
    <span
      className="font-gilmer tracking-tight md:text-[140px] lg:text-[170px]"
      style={{ fontWeight: "700" }}
    >
      Ai Summit
    </span>
  </h1>
</div>

      {/* --- MAIN CARD --- */}
<div
  className="w-full max-w-md md:max-w-full rounded-3xl md:rounded-4xl 
             p-6 md:p-10 relative flex flex-col justify-between 
             mt-0 md:-mt-[76px] leading-normal md:leading-relaxed"
  style={{ backgroundColor: "#202020", color: "#FFFFFF" }}
>
        {/* Top Right Icon */}
        <div className="absolute top-6 right-6">
          <img
            src="/assets/images/img_icon2.svg"
            alt="icons"
            className="w-8 sm:w-10 md:w-[120px]"
          />
        </div>

        {/* Top Section of Card */}
        <div>
          {/* Tagline */}
          <p className="font-gilmer text-2xl sm:text-3xl md:text-5xl font-normal leading-tight md:leading-normal">
            ScaleUp Conclave{" "}
            <span
              className="font-gilmer font-bold underline underline-offset-4 decoration-[3px]"
              style={{ textDecorationColor: "#9CF694" }}
            >
              2026
            </span>{" "}
            <br /> is back and this time,{" "}
            <span
              className="font-gilmer font-bold underline underline-offset-4 decoration-[3px]"
              style={{ textDecorationColor: "#9CF694" }}
            >
              it’s AI.
            </span>
          </p>

          {/* Buttons for MOBILE/TABLET VIEW */}
          <div className="mt-8 flex flex-col items-start gap-3 md:hidden">
            <button
              className="font-gilmer flex items-center rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl gap-2 px-4 py-2 text-sm text-white"
              style={{ backgroundColor: "#3F26DB" }}
            >
              <img
                src="/assets/images/calender.svg"
                alt="calendar"
                width={18}
                height={18}
              />
              Jan 17th & 18th, 2026
            </button>
            <button
              className="font-gilmer text-left px-4 py-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl text-sm text-white"
              style={{ border: "1px solid #4B4DFF" }}
            >
              Shifa Convention Center
              <br />
              Perinthalmanna
            </button>
          </div>
        </div>

        {/* Bottom Section of Card */}
        <div className="mt-8 md:mt-0">
          {/* Arrow */}
          <div className="flex justify-start">
            <img
              src="/assets/images/arrow_circle.svg"
              alt="arrow button"
              className="w-12 sm:w-14 md:w-[70px]"
            />
          </div>

          {/* Main Subtitle */}
          <h2 className="font-gilmer text-3xl sm:text-4xl md:text-7xl font-semibold mt-4 text-left">
            Scale to <br /> Intelligence
          </h2>
        </div>

        {/* Buttons for DESKTOP VIEW */}
        <div className="hidden md:flex flex-col md:flex-row items-center md:absolute md:bottom-10 md:right-10 gap-3">
          <button
            className="font-gilmer flex items-center gap-2 px-4 py-3 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl h-[50px]"
            style={{ backgroundColor: "#3F26DB", color: "#FFFFFF" }}
          >
            <img
              src="/assets/images/calender.svg"
              alt="calendar"
              width={18}
              height={18}
            />
            Jan 17th & 18th, 2026
          </button>
          <button
            className="font-gilmer flex flex-col justify-center px-4 py-3 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl h-[50px] leading-tight text-sm"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #4B4DFF",
              color: "#FFFFFF",
            }}
          >
            Shifa Convention Center
            <span className="font-gilmer text-xs leading-tight">
              Perinthalmanna
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
