"use client";

import React from "react";

function DateSection() {
  return (
    <section
      className="w-full px-4 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="space-y-4  text-4xl font-extrabold md:text-6xl"
        style={{ color: "var(--color-text)" }}
      >
        <p className="flex items-center gap-2">
          2 Days
          <img
            src="/assets/images/star_icon.svg"
            alt="rose-icon"
            className="h-9 w-9"
          />
        </p>
        <p className="flex items-center gap-2">
          50+ Speakers
          <img
            src="/assets/images/Union.svg"
            alt="green-icon"
            className="h-9 w-9"
          />
        </p>
        <p className="flex items-center gap-2">
          5000+ Innovators
          <img
            src="/assets/images/four_dot.svg"
            alt="blue-icon"
            className="h-9 w-9"
          />
        </p>
      </div>

      <div className="text-center w-full md:w-auto">
        <div className="flex justify-center gap-4 font-extrabold flex-wrap">
          {[
            { label: "months", value: "03" },
            { label: "days", value: "29" },
            { label: "minutes", value: "59" },
            { label: "seconds", value: "59" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className="text-6xl md:text-8xl tracking-[0.10em]"
                style={{ color: "#000000" }}
              >
                {item.value}
              </span>
              <span
                className="text-s border rounded-full px-14 py-1 -mt-6"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#000000" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 md:text-xl" style={{ color: "#4B5563" }}>
          Keralas biggest AI & Technology Conclave
        </p>
      </div>
    </section>
  );
}

export default DateSection;
