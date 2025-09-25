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
      style={{
        maxWidth: isMobile ? "350px" : "1400px",
        margin: "0 auto",
        padding: isMobile ? "30px 10px" : "64px 24px",
      }}
    >
      <div className="flex justify-between items-start mb-12 flex-wrap">
        <div className="basis-[60%] flex-1">
          <p
            className="text-[35px] leading-tight sm:text-[48px] md:text-[57px] font-semibold m-0"
            style={{ color: "#202020" }}
          >
            Get Involved
          </p>
          <p
            className="mt-4 text-[18px] leading-6 sm:text-[18px] sm:leading-7 md:text-[28px] md:leading-9 font-light"
            style={{ color: "#4B5563" }}
          >
            Be part of Kerala's biggest AI & Technology Conclave and connect{" "}
            <br />
            with innovators, leaders, and enthusiasts from across the country.
          </p>
        </div>

        <img
          src="/assets/images/img_icon2.svg"
          alt="Decorative icons"
          className={`h-8 ${isMobile ? "hidden" : "block"}`}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          paddingBottom: "16px",
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
              style={{
                flex: "0 0 auto",
                width: isMobile ? "216.11px" : "310.53px",
                height: isMobile ? "271.11px" : "389.54px",
                borderRadius: isMobile ? "26.86px" : "38.59px",
                border: isMobile ? "0.7px solid #000" : "1px solid #000",
                padding: isMobile ? "12px" : "30px",
                backgroundColor: isActive ? "#1E90FF" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#202020",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                scrollSnapAlign: "start",
                transition: "all 0.3s",
              }}
            >
              <div>
                <img
                  src={icon}
                  alt="Card icon"
                  style={{ height: "40px", width: "40px" }}
                />
                <h3
                  style={{
                    marginTop: "24px",
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: 700,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    marginTop: "12px",
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
                style={{
                  marginTop: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  fontWeight: 600,
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
