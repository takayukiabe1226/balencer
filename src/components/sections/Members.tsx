const members = [
  {
    name: "Takayuki Abe",
    nameJa: "阿部 貴之",
    role: "Founder / Brand Strategist",
    twitter: "https://twitter.com/tabebalencer",
    note: "https://note.com/abefis",
    bg: "linear-gradient(145deg,#1a1a2e,#2d2d5a)",
  },
  {
    name: "Member 02",
    nameJa: "メンバー 02",
    role: "AI / DX Consultant",
    bg: "linear-gradient(145deg,#1a2e1a,#2d5a2d)",
  },
  {
    name: "Member 03",
    nameJa: "メンバー 03",
    role: "Web Designer",
    bg: "linear-gradient(145deg,#2e1a1a,#5a2d2d)",
  },
  {
    name: "Member 04",
    nameJa: "メンバー 04",
    role: "Marketing Strategist",
    bg: "linear-gradient(145deg,#1a2e2e,#2d5a5a)",
  },
];

export default function Members() {
  return (
    <section id="members" className="s" style={{ background: "var(--cream2)" }}>
      <div className="si">
        <p className="tag tag-light rv">Members</p>
        <h2 className="h2 h2-light rv d1">チームを知る。</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
            marginTop: "56px",
          }}
          className="members-grid"
        >
          {members.map((m, i) => (
            <div key={m.name} className={`rv d${i % 4 + 1}`} style={{ cursor: "pointer" }}>
              <div
                style={{
                  aspectRatio: "3/4",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  position: "relative",
                  background: m.bg,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top,rgba(0,0,0,.3),transparent 50%)",
                    opacity: 0,
                    transition: "opacity .4s",
                  }}
                  className="member-overlay"
                />
              </div>
              <p style={{ fontFamily: "var(--en)", fontSize: "14px", fontWeight: 700, letterSpacing: ".04em", color: "var(--navy)", marginBottom: "3px" }}>
                {m.name}
              </p>
              <p style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "6px" }}>{m.nameJa}</p>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", color: "var(--muted)", letterSpacing: ".04em" }}>
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .members-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .members-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
