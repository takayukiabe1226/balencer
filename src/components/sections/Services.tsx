"use client";

import Link from "next/link";

const coreServices = [
  {
    num: "01",
    en: "Branding",
    ja: "ブランド戦略",
    slug: "branding",
    desc: "MVV策定からVI設計まで、企業の「選ばれる理由」を一貫して設計します。",
    bg: "linear-gradient(145deg,#1a1a2e,#16213e,#0f3460)",
  },
  {
    num: "02",
    en: "AI Integration",
    ja: "生成AI導入",
    slug: "ai-integration",
    desc: "業務フロー分析から社員研修まで、AI活用を組織に浸透させます。",
    bg: "linear-gradient(145deg,#0d1b2a,#1b2838,#243447)",
  },
  {
    num: "03",
    en: "DX Support",
    ja: "DX推進",
    slug: "dx-support",
    desc: "デジタル化による業務効率化と、新たなビジネスモデルの創出を支援します。",
    bg: "linear-gradient(145deg,#1a0a2e,#2d1b69,#1a0a2e)",
  },
];

const subServices = [
  { en: "Shopify", ja: "ECサイト構築", slug: "shopify" },
  { en: "TikTok", ja: "SNSマーケティング", slug: "tiktok" },
  { en: "Notion", ja: "業務DX化", slug: "notion" },
];

export default function Services() {
  return (
    <section id="services" className="s services-section" style={{ background: "var(--white)" }}>
      <div className="si">
        <p className="tag tag-light rv">Our Services</p>
        <h2 className="h2 h2-light rv d1">
          3つの核で、<br />企業を変える。
        </h2>
        <p className="sdesc sdesc-light rv d2">
          ブランディング・AI・DXの複合支援で、中小企業の競争力を根本から底上げします。
        </p>

        {/* Core 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "56px",
          }}
          className="svc-grid"
        >
          {coreServices.map((s, i) => (
            <div
              key={s.en}
              className={`rv d${i + 1}`}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                padding: "clamp(28px,3.5vw,44px)",
                minHeight: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                cursor: "pointer",
                background: s.bg,
                transition: "transform .5s cubic-bezier(0.16,1,0.3,1), box-shadow .5s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(0,0,0,.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(0,0,0,.1) 0%,rgba(0,0,0,.65) 100%)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", marginBottom: "16px" }}>{s.num}</div>
                <h3 style={{ fontFamily: "var(--en)", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 800, color: "var(--white)", letterSpacing: "-.02em", marginBottom: "4px" }}>{s.en}</h3>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,.5)", marginBottom: "16px" }}>{s.ja}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,.65)", lineHeight: 1.9 }}>{s.desc}</p>
                <Link href={`/services/${s.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--en)", fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,.6)", marginTop: "20px" }}>
                  詳しく見る →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sub 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
            marginTop: "12px",
          }}
          className="svc-sub-grid"
        >
          {subServices.map((s, i) => (
            <div
              key={s.en}
              className={`rv d${i + 1}`}
              style={{
                padding: "24px",
                borderRadius: "14px",
                border: "1.5px solid var(--border)",
                background: "var(--cream)",
                transition: "border-color .3s, background .3s, transform .4s cubic-bezier(0.16,1,0.3,1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--indigo)";
                el.style.background = "var(--indigo-light)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.background = "var(--cream)";
                el.style.transform = "translateY(0)";
              }}
            >
              <Link href={`/services/${s.slug}`} style={{ display: "block" }}>
                <h4 style={{ fontFamily: "var(--en)", fontSize: "14px", fontWeight: 700, color: "var(--navy)", marginBottom: "4px" }}>{s.en}</h4>
                <p style={{ fontSize: "11px", color: "var(--muted)" }}>{s.ja}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="rv"
          style={{
            marginTop: "48px",
            padding: "32px",
            background: "var(--indigo-light)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--navy)" }}>
            <strong>どのサービスかわからない</strong>という方も、まずご相談ください。
          </p>
          <Link href="#contact" className="btn-indigo">
            無料相談する →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .svc-grid { grid-template-columns: 1fr 1fr !important; } .svc-grid > *:last-child { grid-column: span 2; } }
        @media (max-width: 600px) { .svc-grid, .svc-sub-grid { grid-template-columns: 1fr !important; } .svc-grid > *:last-child { grid-column: span 1; } }
      `}</style>
    </section>
  );
}
