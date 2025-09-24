"use client";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-12 relative">
      {/* DESKTOP HEADING - stays outside card */}
      <div className="text-center hidden md:block">
        <h1 className="md:text-[70px] font-bold">
          <span style={{ color: "#418CFF" }} className="ml-138">
            ScaleUp Conclave{" "}
          </span>
          <Image
            src="/assets/images/v.svg"
            alt="rose icon"
            width={60}
            height={60}
            className="inline-block"
          />
        </h1>
        <br />
        <h1
          className="md:text-[180px] -mt-26 tracking-[0.10em]"
          style={{ color: "#4028C8" }}
        >
          <span
            className="font-light tracking-tight"
            style={{ color: "#060832" }}
          >
            The
          </span>{" "}
          <span className="font-extrabold">Ai Summit</span>
        </h1>
      </div>

      <div
        className="w-full rounded-2xl p-6 md:p-10 relative -mt-10 md:-mt-20"
        style={{ backgroundColor: "#202020", color: "#FFFFFF" }}
      >
        {/* MOBILE HEADING - displayed inside card */}
        <div className="text-center block md:hidden mb-6">
          <h1 className="text-4xl font-bold leading-tight">
            <span style={{ color: "#418CFF" }}>
              ScaleUp Conclave{" "}
            </span>
            <Image
              src="/assets/images/v.svg"
              alt="rose icon"
              width={40}
              height={40}
              className="inline-block"
            />
          </h1>
          <h1
            className="text-[60px] tracking-[0.05em] leading-none mt-2"
            style={{ color: "#4028C8" }}
          >
            <span
              className="font-light tracking-tight"
              style={{ color: "#060832" }}
            >
              The
            </span>{" "}
            <span className="font-extrabold">Ai Summit</span>
          </h1>
        </div>

        {/* Top Right Icon */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4">
          <img
            src="/assets/images/img_icon2.svg"
            alt="icons"
            className="w-12 md:w-[120px]"
          />
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-xl md:text-6xl mb-4 md:mb-6 leading-relaxed">
          ScaleUp Conclave 2026 <br /> is back and this time,{" "}
          <span
            className="font-bold underline underline-offset-4"
            style={{ color: "#FFFFFF", textDecorationColor: "#00FF85" }}
          >
            it’s AI.
          </span>
        </p>

        {/* Arrow */}
        <div className="flex justify-center md:justify-start mt-4 md:mt-6">
          <img
            src="/assets/images/arrow_circle.svg"
            alt="arrow button"
            className="w-12 md:w-[60px]"
          />
        </div>

        {/* Main Subtitle */}
        <h2
          className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-snug mt-4 md:mt-6 text-center md:text-left"
          style={{ color: "#FFFFFF" }}
        >
          Scale to <br />
          Intelligence
        </h2>

        {/* Buttons */}
        <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center md:absolute md:bottom-6 md:right-6 gap-3">
          <button
            className="flex items-center gap-2 px-4 py-3 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-xs sm:text-sm md:text-base font-medium w-full md:w-auto justify-center"
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
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-4 py-3 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl text-xs sm:text-sm md:text-base font-medium w-full md:w-auto justify-center text-center"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #4B4DFF",
              color: "#FFFFFF",
            }}
          >
            Shifa Convention Center
            <span>Perinthalmanna</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
