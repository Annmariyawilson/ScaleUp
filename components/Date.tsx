"use client";

import React, { useEffect, useState } from "react";

function DateSection() {
  const targetDate = new Date("2026-01-17T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    months: "00",
    days: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ months: "00", days: "00", minutes: "00", seconds: "00" });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const days = totalHours >= 24 ? Math.floor(totalHours / 24) : 0;

      const months = Math.floor(days / 30);
      const remainingDays = days % 30;

      setTimeLeft({
        months: String(months).padStart(2, "0"),
        days: String(remainingDays).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      className="w-full px-4 sm:px-8 md:px-12 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Stats (below on mobile, left on desktop) */}
      <div
        className="font-gilmer leading-[42px] md:leading-[85.97px] p-4 text-2xl sm:text-3xl md:text-[60px] text-left"
        style={{ color: "var(--color-text)", fontWeight: "600" }}
      >
        <p className="flex items-center justify-start gap-2 text-3xl md:text-[60px]">
          2 Days
          <img
            src="/assets/images/star_icon.svg"
            alt="rose-icon"
            className="h-6 w-6 md:h-9 md:w-9"
          />
        </p>
        <p className="flex items-center justify-start gap-2 text-3xl sm:text-2xl md:text-[60px]">
          50+ Speakers
          <img
            src="/assets/images/Union.svg"
            alt="green-icon"
            className="h-6 w-6 md:h-9 md:w-9"
          />
        </p>
        <p className="flex items-center justify-start gap-2 text-3xl sm:text-2xl md:text-[60px]">
          5000+ Innovators
          <img
            src="/assets/images/four_dot.svg"
            alt="blue-icon"
            className="h-6 w-6 md:h-9 md:w-9"
          />
        </p>
      </div>

      {/* Timer (top on mobile, right on desktop) */}
      <div className="font-gilmer text-center w-full md:w-auto mt-2 md:mt-0">
        <div className="flex justify-center gap-2 md:gap-4 flex-nowrap overflow-x-auto">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[50px] md:min-w-auto"
            >
              <span
                className="text-3xl sm:text-4xl md:text-8xl tracking-[0.10em]"
                style={{ color: "#000000", fontWeight: "600" }}
              >
                {value}
              </span>
              <span
                className="border rounded-full px-4 py-1 sm:px-6 md:px-12 md:py-1 -mt-1 sm:-mt-2 md:-mt-4 text-xs sm:text-sm md:text-base"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#000000",
                  color: "#000000",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <p
          className="font-gilmer mt-3 text-xs sm:text-sm md:text-xl"
          style={{ color: "#4B5563" }}
        >
          Kerala's biggest AI & Technology Conclave
        </p>
      </div>
    </section>
  );
}

export default DateSection;
