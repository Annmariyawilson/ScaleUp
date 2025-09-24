"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  const socialIcons = [
    { src: "/assets/images/pinterest.svg", alt: "Pinterest" },
    { src: "/assets/images/facebook.svg", alt: "Facebook" },
    { src: "/assets/images/twitter.svg", alt: "Twitter" },
    { src: "/assets/images/dribbble.svg", alt: "Dribbble" },
    { src: "/assets/images/insta.svg", alt: "Instagram" },
  ];

  return (
    <footer className="w-full mt-24 px-1 md:px-2">
      <div
        className="relative mx-auto mb-6 max-w-10xl rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#202020", color: "#FFFFFF" }}
      >
        <Image
          src="/assets/images/scaleup.svg"
          alt="ScaleUp background text"
          width={1200}
          height={200}
          className="absolute bottom-0 left-0 w-full h-auto z-0 select-none"
        />

        <div className="relative z-10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/images/arrow_circle.svg"
                  alt="Scale to Intelligence icon"
                  width={40}
                  height={40}
                />
                <h2
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: "#FFFFFF" }}
                >
                  Scale to Intelligence
                </h2>
              </div>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "#D1D5DB" }}
              >
                Kerala's biggest AI & Technology <br /> conclave bringing
                together innovators, <br />
                entrepreneurs, and thought leaders to scale to <br /> intelligence.
              </p>
              <div className="flex gap-4">
                {socialIcons.map((icon, index) => (
                  <a
                    href="#"
                    key={index}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image src={icon.src} alt={icon.alt} width={32} height={32} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-5 text-left md:text-right">
              <Image
                src="/assets/images/ai_summit_icon.svg"
                alt="The AI Summit logo"
                width={150}
                height={70}
              />
              <p className="text-base" style={{ color: "#D1D5DB" }}>
                <strong>Location:</strong> Al Shifa Convention Center, <br /> Perinthalmanna
              </p>
              <div className="w-[250px] h-[160px] overflow-hidden rounded-md mb-9">
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

          <div
            className="mt-16 pt-8"
            style={{ borderColor: "rgba(107, 114, 128, 0.5)" }}
          >
            <p
              className="text-center mt-18 md:text-left text-sm"
              style={{ color: "#9CA3AF" }}
            >
              © 2026 ScaleUp Conclave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
