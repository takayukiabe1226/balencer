import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      style={{
        background: "var(--indigo)",
        padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <h2
          className="rv"
          style={{
            fontFamily: "var(--en)",
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            color: "var(--white)",
            marginBottom: "16px",
          }}
        >
          まず、話してみませんか。
        </h2>
        <p
          className="rv d1"
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,.7)",
            marginBottom: "36px",
            lineHeight: 2,
          }}
        >
          課題が整理されていなくても構いません。<br />
          ヒアリングを通じて、最適な支援の形を一緒に見つけます。
        </p>
        <Link href="#contact" className="btn-white rv d2">
          無料相談する →
        </Link>
      </div>
    </section>
  );
}
