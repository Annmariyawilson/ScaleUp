"use client";

import React from "react";

function Navbar() {
  return (
    <div className="p-2">
      {" "}
      <nav
        style={{ backgroundColor: "var(--color-bg)" }}
        className="w-full shadow-sm rounded-4xl px-9 py-3 my-3"
      >
        <div className="flex justify-between items-center">
          {/* Left Logo */}
          <div className="flex items-center">
            <img
              src="/assets/images/icon.svg"
              alt="ScaleUp 2025"
              className="h-8 md:h-10"
            />
          </div>

          {/* Center Text */}
          <div
            className="text-sm md:text-base font-medium text-center"
            style={{ color: "var(--color-text)" }}
          >
            <span>Previous editions:&nbsp;</span>
            <a href="#" className="hover:underline">
              2024
            </a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:underline">
              2025
            </a>
          </div>

          {/* Right Logo */}
          <div className="flex items-center">
            <img
              src="/assets/images/ai_summit_blue.svg"
              alt="The AI Summit"
              className="h-8 md:h-10"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
