"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 1000, suffix: "+社", label: "累計支援実績" },
  { target: 5,    suffix: "年+", label: "事業実績" },
  { target: 3,    suffix: "",    label: "コア支援領域" },
  { target: 97,   suffix: "%",   label: "顧客継続率" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(target, 2000, active);

  useEffect(() => {
    // すでにビューポート内にある場合も含めて確実に発火させる
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--en)",
          fontSize: "clamp(48px,7vw,84px)",
          fontWeight: 900,
          letterSpacing: "-.04em",
          color: "var(--navy)",
          lineHeight: 1,
        }}
      >
        {target === 1000 ? count.toLocaleString() : count}
        <span style={{ fontSize: ".44em", fontWeight: 700, color: "var(--muted)" }}>{suffix}</span>
      </div>
      <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "10px", letterSpacing: ".06em" }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsRibbon() {
  return (
    <section
      style={{
        background: "var(--white)",
        padding: "clamp(52px,7vw,84px) clamp(24px,6vw,80px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(24px,5vw,80px)",
          flexWrap: "wrap",
          maxWidth: "var(--max)",
          margin: "0 auto",
        }}
      >
        {stats.map((s, i) => (
          <>
            <StatItem key={s.label} {...s} />
            {i < stats.length - 1 && (
              <div
                key={`div-${i}`}
                style={{
                  width: "1px",
                  height: "clamp(52px,6vw,70px)",
                  background: "var(--border)",
                  flexShrink: 0,
                }}
                className="sr-divider"
              />
            )}
          </>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) { .sr-divider { display: none; } }
      `}</style>
    </section>
  );
}
