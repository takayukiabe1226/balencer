"use client";

const items = [
  {
    num: "01",
    title: "3領域を一社で完結",
    desc: "ブランディング・AI・DXを個別ではなく統合して支援。一貫した戦略で施策の効果を最大化します。",
  },
  {
    num: "02",
    title: "中小企業に特化した実績",
    desc: "1,000社以上の支援実績。大企業向けの理論ではなく、中小企業の現場に即した実践的なアプローチです。",
  },
  {
    num: "03",
    title: "デザイン思考で本質を捉える",
    desc: "表面的な課題ではなく、組織・文化・戦略の根本から変革を支援します。",
  },
  {
    num: "04",
    title: "97%の高い顧客継続率",
    desc: "短期的な施策ではなく、長期的なパートナーとして伴走します。成果が出るまで一緒に走ります。",
  },
];

export default function WhyBalencer() {
  return (
    <section id="why" className="s why-section" style={{ background: "var(--navy)" }}>
      <div className="si">
        <p className="tag tag-dark rv">Why BALENCER</p>
        <h2 className="h2 h2-dark rv d1">選ばれる理由。</h2>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", marginTop: "48px" }}>
          {items.map((item, i) => (
            <div
              key={item.num}
              className={`rv d${i % 3 + 1}`}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 280px",
                gap: "clamp(20px,4vw,56px)",
                alignItems: "center",
                padding: "clamp(28px,3.5vw,44px) 0",
                borderBottom: "1px solid rgba(255,255,255,.06)",
                transition: "background .3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.02)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              <span style={{ fontFamily: "var(--en)", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,.2)", letterSpacing: ".1em" }}>
                {item.num}
              </span>
              <h3 style={{ fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.5 }}>
                {item.title}
              </h3>
              <p className="why-desc" style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", lineHeight: 1.9 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-section .si > div > div { grid-template-columns: 40px 1fr !important; }
          .why-desc { display: none !important; }
        }
      `}</style>
    </section>
  );
}
