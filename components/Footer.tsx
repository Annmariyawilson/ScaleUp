"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="w-full mt-16 md:px-12 py-12"
      style={{ backgroundColor: "#202020", color: "#ffffff" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          {/* Scale to Intelligence */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/images/Group 48096055.svg"
              alt="arrow icon"
              width={36}
              height={36}
            />
            <h2 className="text-xl md:text-2xl font-semibold">
              Scale to Intelligence
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            Kerala&apos;s biggest AI &amp; Technology conclave bringing together
            innovators, entrepreneurs, and thought leaders to scale to
            intelligence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Image
              src="/assets/images/Item → Link.svg"
              alt="Pinterest"
              width={28}
              height={28}
            />
            <Image
              src="/assets/images/Item → Link (1).svg"
              alt="Facebook"
              width={28}
              height={28}
            />
            <Image
              src="/assets/images/Item → Link (2).svg"
              alt="Twitter"
              width={28}
              height={28}
            />
            <Image
              src="/assets/images/Item → Link (3).svg"
              alt="Dribbble"
              width={28}
              height={28}
            />
            <Image
              src="/assets/images/Item → Link (4).svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-4">
          {/* The AI Summit Logo */}
          <Image
            src="/assets/images/Group 48096080.svg"
            alt="The AI Summit logo"
            width={140}
            height={60}
          />

          {/* Location */}
          <p className="text-sm md:text-base">
            Location: <br /> Al Shifa Convention Center, Perinthalmanna
          </p>

          {/* Map */}
          <div className="w-[250px] h-[160px] overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.210481508627!2d76.21416537475594!3d10.977623255711204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba878f7f5372cf1%3A0x179827465d174a23!2sAl%20Shifa%20Hospital%20Convention%20Center!5e0!3m2!1sen!2sin!4v1695839556284!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 ml-66 text-start text-sm md:text-base">
        © 2026 ScaleUp Conclave. All rights reserved.
      </div>

      {/* Big Background Text */}
      <img src="/assets/images/ScaleUp.svg" alt="" />
    </footer>
  );
}

export default Footer;
