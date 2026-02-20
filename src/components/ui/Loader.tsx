"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [out, setOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOut(true), 1200);
    const t2 = setTimeout(() => setHidden(true), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--navy)",
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: out ? 0 : 1,
        visibility: out ? "hidden" : "visible",
        transition: "opacity .7s cubic-bezier(0.16,1,0.3,1), visibility .7s",
      }}
    >
      <div
        style={{
          fontFamily: "var(--en)",
          fontSize: "clamp(24px,5vw,44px)",
          fontWeight: 700,
          letterSpacing: ".25em",
          color: "var(--white)",
          overflow: "hidden",
        }}
      >
        {"BALENCER".split("").map((ch, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              animation: `lUp .65s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s both`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          background: "linear-gradient(90deg,#4338CA,#7C3AED,#EC4899)",
          animation: "lBar 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      />

      <style>{`
        @keyframes lUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes lBar {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
