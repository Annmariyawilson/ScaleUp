"use client";

import React, { useEffect, useState } from "react";

function DateSection() {
  // Set your target date here
  const targetDate = new Date("2026-01-17T00:00:00"); // YYYY-MM-DDTHH:mm:ss
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

      // Approximate months (30 days)
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
      className="w-full px-4 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="space-y-4  text-4xl font-extrabold md:text-6xl"
        style={{ color: "var(--color-text)" }}
      >
        <p className="flex items-center gap-2">
          2 Days
          <img
            src="/assets/images/star_icon.svg"
            alt="rose-icon"
            className="h-9 w-9"
          />
        </p>
        <p className="flex items-center gap-2">
          50+ Speakers
          <img
            src="/assets/images/Union.svg"
            alt="green-icon"
            className="h-9 w-9"
          />
        </p>
        <p className="flex items-center gap-2">
          5000+ Innovators
          <img
            src="/assets/images/four_dot.svg"
            alt="blue-icon"
            className="h-9 w-9"
          />
        </p>
      </div>

      <div className="text-center w-full md:w-auto">
        <div className="flex justify-center gap-4 font-extrabold flex-wrap">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className="text-6xl md:text-8xl tracking-[0.10em]"
                style={{ color: "#000000" }}
              >
                {value}
              </span>
              <span
                className="text-s border rounded-full px-14 py-1 md:-mt-6 lg:-mt-6 -mt-3"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#000000" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 md:text-xl" style={{ color: "#4B5563" }}>
          Keralas biggest AI & Technology Conclave
        </p>
      </div>
    </section>
  );
}

export default DateSection;
