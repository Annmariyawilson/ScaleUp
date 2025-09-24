"use client";

import React from "react";

const cards = [
  {
    id: 1,
    highlighted: false,
    icon: "/assets/images/rectangle_blue.svg",
    arrow: "/assets/images/arrow_icon_blue.svg",
    title: "Become a Sponsor",
    description:
      "Partner with us to shape the future of AI innovation.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScvtPBj8e9o1v2s7heNDGGW_iz2AwCQB_FKBqEv2OKITxcyzg/viewform",
  },
  {
    id: 2,
    highlighted: true,
    icon: "/assets/images/rectangle_green.svg",
    arrow: "/assets/images/arrow_icon_green.svg",
    title: "Become a Speaker",
    description:
      "Share your expertise and insights with the AI community.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfAZZpitA5SliZ1ivPH0PmQled6eyuyaHUnKLIY5TP1YXjRIQ/viewform",
  },
  {
    id: 3,
    highlighted: false,
    icon: "/assets/images/rectangle_blue.svg",
    arrow: "/assets/images/arrow_icon_blue.svg",
    title: "Become an Exhibitor",
    description:
      "Showcase your AI solutions and connect with industry leaders.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",
  },
  {
    id: 4,
    highlighted: false,
    icon: "/assets/images/rectangle_blue.svg",
    arrow: "/assets/images/arrow_icon_blue.svg",
    title: "Join as Volunteer",
    description:
      "Be part of the organizing team and gain valuable experience.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
  },
];

function Involved() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold" style={{ color: "#111827" }}>
            Get Involved
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#4B5563" }}>
            Be part of Kerala's biggest AI & Technology Conclave and connect <br />
            with innovators, leaders, and enthusiasts from across the country.
          </p>
        </div>
        <img
          src="/assets/images/img_icon2.svg"
          alt="Decorative icons"
          className="hidden h-8 sm:block"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex h-full flex-col justify-between rounded-3xl border p-8 shadow-sm transition hover:shadow-lg"
            style={{
              borderColor: "#000000",
              backgroundColor: card.highlighted ? "#3B82F6" : "#FFFFFF",
              color: card.highlighted ? "#FFFFFF" : "#1F2937",
            }}
          >
            <div>
              <img src={card.icon} alt="Card icon" className="h-12 w-12" />
              <h3 className="mt-8 text-2xl font-bold">{card.title}</h3>
              <p className="mt-4 text-base leading-relaxed">
                {card.description}
              </p>
            </div>

            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between group cursor-pointer"
              style={{ color: card.highlighted ? "#FFFFFF" : "#1F2937" }}
            >
              <span className="font-semibold group-hover:underline">
                Apply Now
              </span>
              <img
                src={card.arrow}
                alt="Arrow icon"
                className="h-14 w-16 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Involved;
