const items = [
  "Branding Strategy",
  "AI Integration",
  "DX Support",
  "Shopify / EC",
  "TikTok Marketing",
  "Notion Workflow",
  "Web Design",
  "Brand Identity",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(255,255,255,.06)",
        padding: "18px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "mq 28s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--en)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.55)",
              padding: "0 36px",
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ color: "rgba(255,255,255,.28)", padding: "0 8px" }}>·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
