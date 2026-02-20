"use client";

import Link from "next/link";

const tiles = [
  { label: "Branding", title: "ブランドポジショニング・VI策定", bg: "linear-gradient(145deg,#1e3a5f,#2d5a8e)" },
  { label: "Recruiting", title: "採用ブランディング・求人メディア展開", bg: "linear-gradient(145deg,#1a2f1a,#2d5a2d)" },
  { label: "Web & DX", title: "コーポレートサイト制作・社内DX推進", bg: "linear-gradient(145deg,#2f1a2f,#5a2d5a)" },
  { label: "SNS & PR", title: "SNS運用・採用広報コンテンツ制作", bg: "linear-gradient(145deg,#2f2a1a,#5a4d2d)" },
];

export default function CaseStudy() {
  return (
    <section id="cases" className="s case-section" style={{ background: "var(--cream)" }}>
      <div className="si">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          <div>
            <p className="tag tag-light rv">Case Study</p>
            <h2 className="h2 h2-light rv d1">1社まるごと、<br />変える。</h2>
          </div>

          <div className="rv d2" style={{ maxWidth: "400px" }}>
            <div
              style={{
                background: "var(--navy)",
                color: "var(--white)",
                borderRadius: "16px",
                padding: "24px 28px",
              }}
            >
              <p style={{ fontFamily: "var(--en)", fontSize: "9px", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: "10px" }}>
                CLIENT INSIGHT
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "rgba(255,255,255,.7)" }}>
                「採用もブランドも、Webも全部バラバラだった。バレンサーに依頼してから、すべてが一本の軸でつながった。」
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "24px",
            alignItems: "start",
          }}
          className="case-main-grid"
        >
          {/* Hero card */}
          <div
            className="rv"
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              aspectRatio: "4/3",
              cursor: "pointer",
              background: "linear-gradient(145deg,#0F2942,#1A3A5C,#0A2030)",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px" }}>
              <p style={{ fontFamily: "var(--en)", fontSize: "10px", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: "10px" }}>
                睦備建設株式会社
              </p>
              <h3 style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.5 }}>
                採用・ブランド・Web・SNSを<br />ワンストップで刷新
              </h3>
            </div>
          </div>

          {/* Tiles */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "12px",
              }}
            >
              {tiles.map((tile, i) => (
                <div
                  key={tile.label}
                  className={`rv d${i + 1}`}
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    aspectRatio: "3/2",
                    transition: "transform .4s cubic-bezier(0.16,1,0.3,1)",
                    background: tile.bg,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                >
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.15) 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px" }}>
                    <p style={{ fontFamily: "var(--en)", fontSize: "9px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: "5px" }}>{tile.label}</p>
                    <h4 style={{ fontSize: "12px", fontWeight: 700, color: "var(--white)", lineHeight: 1.5 }}>{tile.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rv"
              style={{
                marginTop: "20px",
                padding: "24px",
                background: "var(--white)",
                borderRadius: "14px",
                border: "1.5px solid var(--border)",
              }}
            >
              <p style={{ fontSize: "14px", color: "var(--ink2)", lineHeight: 2 }}>
                建設業界の採用難という課題に対し、ブランド・採用・Web・SNSを統合した戦略で、採用応募数を前年比3倍に向上。
              </p>
              <Link
                href="#"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--en)", fontSize: "12px", fontWeight: 700, color: "var(--indigo)", marginTop: "16px", transition: "gap .3s" }}
              >
                事例詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .case-main-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
