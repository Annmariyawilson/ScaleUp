"use client";
import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-12 relative">
      <div className="text-center">
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
          <span className="font-semibold">Ai Summit</span>
        </h1>
      </div>

      <div
        className="w-full rounded-2xl md:p-10 relative -mt-20"
        style={{ backgroundColor: "#202020", color: "#FFFFFF" }}
      >
        <div className="absolute top-4 right-4 mt-8">
          <img
            src="/assets/images/img_icon2.svg"
            alt="icons"
            width={120}
            height={30}
          />
        </div>

        <p className="text-lg md:text-4xl mb-6 leading-relaxed">
          ScaleUp Conclave 2026 <br /> is back and this time,{" "}
          <span
            className="font-bold underline underline-offset-4"
            style={{ color: "#FFFFFF", textDecorationColor: "#00FF85" }}
          >
            it’s AI.
          </span>
        </p>

        <div className="flex items-center gap-4 mt-6">
          <img
            src="/assets/images/arrow_circle.svg"
            alt="arrow button"
            width={60}
            height={60}
          />
        </div>
        <h2
          className="text-3xl md:text-6xl font-semibold leading-snug"
          style={{ color: "#FFFFFF" }}
        >
          Scale to <br />
          Intelligence
        </h2>

        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-sm md:text-base font-medium"
            style={{ backgroundColor: "#3F26DB", color: "#FFFFFF" }}
          >
            <img
              src="/assets/images/calender.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            Jan 17th & 18th, 2026
          </button>

          <button
            className="flex items-center gap-2 px-5 py-1 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl text-sm md:text-base font-medium"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #4B4DFF",
              color: "#FFFFFF",
            }}
          >
            Shifa Convention Center
            <br /> Perinthalmanna
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
