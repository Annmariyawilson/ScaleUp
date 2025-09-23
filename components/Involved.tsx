"use client";

import React from "react";

function Involved() {
  const cards = [
    { id: 1, highlighted: false },
    { id: 2, highlighted: true },
    { id: 3, highlighted: false },
    { id: 4, highlighted: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text)]">
            Get Involved
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-2">
            Be part of Keralas biggest AI & Technology Conclave and connect{" "}
            <br />
            with innovators, leaders, and enthusiasts from across the country
          </p>
        </div>
        <img
          src="/assets/images/Group 1171275378.svg"
          alt="icons"
          className="h-6 md:h-8"
        />
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
              card.highlighted
                ? "bg-[#1E90FF] text-white"
                : "bg-white text-[var(--color-text)]"
            }`}
          >
            {/* ICON */}
            <div
              className={`h-6 w-6 rounded ${
                card.highlighted ? "bg-[#9CF694]" : "bg-[#1E90FF]"
              }`}
            ></div>

            {/* TEXT */}
            <h3 className="mt-4 text-lg font-medium">Become a speaker</h3>
            <p className="text-sm mt-2 leading-relaxed">
              Be part of Keralas biggest AI & Technology Conclave and connect
              with innovators, leaders, and enthusiasts.
            </p>

            {/* BUTTON */}
            <button
              className={`mt-6 flex items-center justify-between rounded-full px-4 py-2 font-medium shadow-md transition ${
                card.highlighted
                  ? "bg-white text-black"
                  : "bg-[#1E90FF] text-white"
              }`}
            >
              Apply Now
              <span
                className={`ml-2 flex items-center justify-center rounded-full h-6 w-6 ${
                  card.highlighted
                    ? "bg-[#9CF694] text-black"
                    : "bg-white text-[#1E90FF]"
                }`}
              >
                ➜
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Involved;
