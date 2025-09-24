"use client";

import React from "react";

function Banner() {
  return (
    <div className="p-6">
      <section
        className="w-full rounded-2xl max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between"
        style={{ backgroundColor: "var(--color-banner-bg)" }}
      >
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1
            className="text-3xl md:text-5xl font-medium leading-snug p-9"
            style={{ color: "var(--color-bg)" }}
          >
            Want to Get <br /> Notified when we <br />
            release amazings?
          </h1>

          <div className="flex flex-wrap items-center gap-4 px-9">
            <a
              href="https://chat.whatsapp.com/DDdiTix9PosBX7PMLrB74U"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full px-3 py-2 shadow-md hover:shadow-lg transition"
              style={{
                backgroundColor: "var(--color-button-bg)",
                color: "var(--color-button-text)",
                textDecoration: "none",
              }}
            >
              <img
                src="/assets/images/whatsapp.svg"
                alt="WhatsApp"
                className="h-5 w-5"
              />
              <span className="font-medium text-sm md:text-base">
                Join Whatsapp
              </span>
              <img
                src="/assets/images/arrow_icon_blue.svg"
                alt=""
                className="w-15"
              />
            </a>

            <img
              src="/assets/images/img_icons.svg"
              alt=""
              className="w-20"
            />
          </div>
        </div>

        <div className="relative md:w-1/2 flex justify-center">
          <img
            src="/assets/images/banner_img.png"
            alt="img"
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
