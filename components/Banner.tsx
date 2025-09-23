"use client";

import React from "react";

function Banner() {
  return (
    <div className="p-6">
      <section
        className="w-full rounded-2xl max-w-8xl mx-auto  flex flex-col md:flex-row items-center justify-between"
        style={{ backgroundColor: "var(--color-banner-bg)" }}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1
            className="text-3xl md:text-5xl font-medium leading-snug p-9"
            style={{ color: "var(--color-bg)" }}
          >
            Want to Get <br /> Notified when we <br />
            release amazings?
          </h1>

          {/* WhatsApp Button + Icons */}
          <div className="flex flex-wrap items-center gap-4 px-9">
            {/* WhatsApp Button */}
            <button
              className="flex items-center gap-3 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition"
              style={{
                backgroundColor: "var(--color-button-bg)",
                color: "var(--color-button-text)",
              }}
            >
              <img
                src="/assets/images/whatsapp-svgrepo-com (2) 1.svg"
                alt="WhatsApp"
                className="h-5 w-5"
              />
              <span className="font-medium text-sm md:text-base">
                Join Whatsapp
              </span>
              <span
                className="rounded-full px-3 py-2 text-xs"
                style={{
                  backgroundColor: "var(--color-button-arrow-bg)",
                  color: "#fff",
                }}
              >
                ➜
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (Notifications Mockup) */}
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src="/assets/images/Gemini_Generated_Image_tbcbijtbcbijtbcb 1.png"
            alt="img"
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
