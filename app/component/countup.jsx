// components/CountUp.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Animated counter. The final value is rendered on the server (so crawlers
 * and no-JS visitors see the real number instead of "0"); the count-up
 * animation only runs in the browser when the element scrolls into view.
 */
export default function CountUp({ value, duration = 2000 }) {
  // Extract numeric part from value like "500+", "$2B+", "98%"
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.split(numericMatch?.[0] || "")[0] || "";
  const restSuffix = value.split(numericMatch?.[0] || "").slice(1).join("") || "";

  const [displayValue, setDisplayValue] = useState(numericValue);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!numericMatch) return;
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = numericValue / (duration / 16);

          timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setDisplayValue(numericValue);
              clearInterval(timer);
            } else {
              setDisplayValue(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numericValue, duration]);

  if (!numericMatch) return <span>{value}</span>;

  const formatted = Number.isInteger(numericValue)
    ? Math.floor(displayValue)
    : displayValue.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {restSuffix}
    </span>
  );
}
