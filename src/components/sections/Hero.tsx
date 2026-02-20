"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.3, y: 0.4, r: 0.5, color: "rgba(67,56,202,0.35)", ox: 0, oy: 0 },
      { x: 0.7, y: 0.3, r: 0.45, color: "rgba(124,58,237,0.3)", ox: 1, oy: 0.5 },
      { x: 0.5, y: 0.7, r: 0.4, color: "rgba(236,72,153,0.25)", ox: 2, oy: 1 },
      { x: 0.2, y: 0.6, r: 0.35, color: "rgba(59,130,246,0.25)", ox: 0.5, oy: 1.5 },
      { x: 0.8, y: 0.7, r: 0.4, color: "rgba(139,92,246,0.2)", ox: 1.5, oy: 2 },
    ];

    let t = 0;
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      t += 0.004;

      blobs.forEach((b) => {
        const x = (b.x + Math.sin(t + b.ox) * 0.12) * w;
        const y = (b.y + Math.cos(t + b.oy) * 0.1) * h;
        const r = b.r * Math.min(w, h);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px clamp(24px,6vw,80px) 80px",
        overflow: "hidden",
        background: "var(--navy)",
      }}
    >
      {/* Canvas mesh gradient */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(6,16,30,.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            border: "1px solid rgba(255,255,255,.15)",
            borderRadius: "100px",
            fontFamily: "var(--en)",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: ".2em",
            textTransform: "uppercase" as const,
            color: "rgba(255,255,255,.5)",
            marginBottom: "32px",
            opacity: 0,
            animation: "fUp .9s cubic-bezier(0.16,1,0.3,1) .7s both",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ADE80",
              animation: "pulse 2s ease infinite",
              flexShrink: 0,
            }}
          />
          Branding × AI × DX Consulting
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--en)",
            fontSize: "clamp(48px,9vw,112px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-.03em",
            color: "var(--white)",
          }}
        >
          {/* Line 1: 勝てる */}
          <span style={{ display: "block", overflow: "hidden" }}>
            <span style={{ display: "block", opacity: 0, animation: "tUp .95s cubic-bezier(0.16,1,0.3,1) .85s both" }}>
              勝てる
            </span>
          </span>

          {/* Line 2: Brandを、 — "Brand" はグラデーション、"を、" は白 */}
          <span style={{ display: "block", overflow: "hidden" }}>
            <span style={{ display: "block", opacity: 0, animation: "tUp .95s cubic-bezier(0.16,1,0.3,1) 1s both" }}>
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(110deg,#A78BFA 20%,#F472B6 55%,#60A5FA 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Brand
              </span>
              <span style={{ fontStyle: "normal", color: "var(--white)" }}>を、</span>
            </span>
          </span>

          {/* Line 3: 設計する。 */}
          <span style={{ display: "block", overflow: "hidden" }}>
            <span style={{ display: "block", opacity: 0, animation: "tUp .95s cubic-bezier(0.16,1,0.3,1) 1.15s both" }}>
              設計する。
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(14px,1.6vw,17px)",
            color: "rgba(255,255,255,.55)",
            lineHeight: 2,
            maxWidth: "500px",
            margin: "28px auto 0",
            opacity: 0,
            animation: "fUp .9s cubic-bezier(0.16,1,0.3,1) 1.3s both",
          }}
        >
          デザイン思考で中小企業の「組織・魅せ方・戦略」を根本から変える。<br />
          ブランディング・AI・DXの複合支援で、選ばれ続ける企業へ。
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "44px",
            opacity: 0,
            animation: "fUp .9s cubic-bezier(0.16,1,0.3,1) 1.5s both",
          }}
        >
          <Link href="#contact" className="btn-primary">
            まずは相談する →
          </Link>
          <Link href="#cases" className="btn-ghost">
            事例を見る
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            gap: "clamp(28px,5vw,60px)",
            justifyContent: "center",
            marginTop: "64px",
            paddingTop: "36px",
            borderTop: "1px solid rgba(255,255,255,.1)",
            opacity: 0,
            animation: "fUp .9s cubic-bezier(0.16,1,0.3,1) 1.7s both",
            flexWrap: "wrap",
          }}
        >
          {[
            { n: "1,000", suf: "+社", label: "累計支援実績" },
            { n: "5", suf: "年+", label: "事業実績" },
            { n: "3", suf: "", label: "コア支援領域" },
            { n: "97", suf: "%", label: "顧客継続率" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--en)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--white)", letterSpacing: "-.02em" }}>
                {s.n}<span style={{ fontSize: ".5em", color: "rgba(255,255,255,.4)" }}>{s.suf}</span>
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,.35)", marginTop: "4px", letterSpacing: ".08em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0,
          animation: "fUp .9s cubic-bezier(0.16,1,0.3,1) 2s both",
        }}
      >
        <span style={{ fontFamily: "var(--en)", fontSize: "9px", letterSpacing: ".2em", color: "rgba(255,255,255,.25)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,.1)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: "-100%", left: 0, width: "100%", height: "100%", background: "rgba(255,255,255,.6)", animation: "sDrop 2s ease infinite" }} />
        </div>
      </div>

      <style>{`
        @keyframes fUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes tUp { from { opacity: 0; transform: translateY(100%); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sDrop { 0% { top: -100%; } 50% { top: 100%; } 50.01% { top: -100%; } 100% { top: 100%; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
      `}</style>
    </section>
  );
}
