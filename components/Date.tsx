"use client";

import React from "react";

function DateSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-[var(--color-bg)]">
      {/* LEFT SIDE TEXT */}
      <div className="space-y-4 text-[var(--color-text)] font-medium text-4xl md:text-6xl">
        <p className="flex items-center gap-2">
          2 Days
          <img
            src="/assets/images/Repeat group 1.svg"
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
            src="/assets/images/Group 48096065.svg"
            alt="blue-icon"
            className="h-9 w-9"
          />
        </p>
      </div>

      {/* RIGHT SIDE STATIC NUMBERS */}
      <div className="text-center w-full md:w-auto">
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { label: "months", value: "03" },
            { label: "days", value: "29" },
            { label: "minutes", value: "59" },
            { label: "seconds", value: "59" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-6xl text-black md:text-8xl tracking-[0.10em]">
                {item.value}
              </span>
              <span
                className="text-s border rounded-full px-14 py-1 -mt-6"
                style={{ backgroundColor: "white" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-gray-600 md:text-xl">
          Keralas biggest AI & Technology Conclave
        </p>
      </div>
    </section>
  );
}

export default DateSection;
