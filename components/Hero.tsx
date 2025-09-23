"use client";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-12 relative">
      {/* Heading */}
      <div className="text-center">
        <h1 className="md:text-[70px] font-bold">
          <span style={{ color: "#418CFF" }} className="ml-150">
            ScaleUp Conclave{" "}
          </span>
          <Image
            src="/assets/images/Vector.svg"
            alt="rose icon"
            width={50}
            height={50}
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

      {/* Banner Box */}
      <div
        className="w-full rounded-2xl md:p-10 relative -mt-20"
        style={{ backgroundColor: "#202020", color: "#ffffff" }}
      >
        {/* Icons Top Right */}
        <div className="absolute top-4 right-4 mt-8">
          <Image
            src="/assets/images/Group 1171275378.svg"
            alt="icons"
            width={120}
            height={30}
          />
        </div>

        {/* Banner Text */}
        <p className="text-lg md:text-4xl mb-6 leading-relaxed">
          ScaleUp Conclave 2026 <br /> is back and this time,{" "}
          <span
            className="font-bold underline underline-offset-4"
            style={{ color: "#ffffff", textDecorationColor: "#00FF85" }}
          >
            it’s AI.
          </span>
        </p>

        {/* Scale to Intelligence */}
        <div className="flex items-center gap-4 mt-6">
          <Image
            src="/assets/images/Group 48096055.svg"
            alt="arrow button"
            width={60}
            height={60}
          />
        </div>
        <h2 className="text-3xl md:text-6xl font-semibold leading-snug">
          Scale to <br />
          Intelligence
        </h2>

        {/* Bottom Info */}
      </div>
    </section>
  );
}

export default Hero;
