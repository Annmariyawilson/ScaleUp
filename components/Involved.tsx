"use client";

import React, { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "Become a Sponsor",
    description: "Partner with us to shape the future of AI innovation.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScvtPBj8e9o1v2s7heNDGGW_iz2AwCQB_FKBqEv2OKITxcyzg/viewform",
  },
  {
    id: 2,
    title: "Become a Speaker",
    description: "Share your expertise and insights with the AI community.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfAZZpitA5SliZ1ivPH0PmQled6eyuyaHUnKLIY5TP1YXjRIQ/viewform",
  },
  {
    id: 3,
    title: "Become an Exhibitor",
    description:
      "Showcase your AI solutions and connect with industry leaders.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",
  },
  {
    id: 4,
    title: "Join as Volunteer",
    description: "Be part of the organizing team and gain valuable experience.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
  },
];

function Involved() {
  const [activeCard, setActiveCard] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-8"
      style={{
        maxWidth: isMobile ? "100%" : "1400px",
        paddingTop: isMobile ? "30px" : "64px",
        paddingBottom: isMobile ? "30px" : "64px",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start mb-12 gap-6">
        <div className="flex-1">
          <p
            className="font-semibold m-0 leading-tight"
            style={{
              fontSize: isMobile ? "32px" : "57px",
              color: "#202020",
            }}
          >
            Get Involved
          </p>
          <p
            className="mt-4 font-light"
            style={{
              fontSize: isMobile ? "16px" : "28px",
              lineHeight: isMobile ? "22px" : "36px",
              color: "#4B5563",
            }}
          >
            Be part of Kerala's biggest AI & Technology Conclave and connect
            <br />
            with innovators, leaders, and enthusiasts from across the country.
          </p>
        </div>

        {!isMobile && (
          <img
            src="/assets/images/img_icon2.svg"
            alt="Decorative icons"
            className="h-8"
          />
        )}
      </div>

      <div
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {cards.map((card) => {
          const isActive = activeCard === card.id;
          const icon = isActive
            ? "/assets/images/rectangle_green.svg"
            : "/assets/images/rectangle_blue.svg";
          const arrow = isActive
            ? "/assets/images/arrow_icon_green.svg"
            : "/assets/images/arrow_icon_blue.svg";

          return (
            <div
              key={card.id}
              onClick={() => setActiveCard(card.id)}
              className={`flex-shrink-0 flex flex-col justify-between cursor-pointer transition-all duration-300`}
              style={{
                width: isMobile ? "85%" : "310px",
                minWidth: isMobile ? "85%" : "310px",
                height: isMobile ? "270px" : "390px",
                borderRadius: isMobile ? "26px" : "38px",
                border: "1px solid #000",
                padding: isMobile ? "16px" : "30px",
                backgroundColor: isActive ? "#1E90FF" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#202020",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                scrollSnapAlign: "start",
              }}
            >
              <div>
                <img
                  src={icon}
                  alt="Card icon"
                  className="h-10 w-10"
                />
                <h3
                  className="mt-6 font-bold"
                  style={{ fontSize: isMobile ? "18px" : "24px" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: "22px",
                  }}
                >
                  {card.description}
                </p>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex justify-between items-center font-semibold no-underline"
                style={{
                  fontSize: isMobile ? "14px" : "16px",
                  color: isActive ? "#FFFFFF" : "#1E90FF",
                }}
              >
                <span>Apply Now</span>
                <img
                  src={arrow}
                  alt="Arrow icon"
                  style={{
                    height: isMobile ? "40px" : "56px",
                    width: isMobile ? "48px" : "64px",
                  }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Involved;
