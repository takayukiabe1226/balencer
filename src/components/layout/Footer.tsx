"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
        padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px) clamp(24px,4vw,40px)",
      }}
    >
      <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--en)",
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: ".18em",
                color: "var(--navy)",
                display: "block",
                marginBottom: "12px",
              }}
            >
              BALENCER
            </Link>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "280px" }}>
              デザイン思考で中小企業の<br />
              「選ばれる理由」をつくる。
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "clamp(32px,5vw,80px)", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".15em", color: "var(--muted)", marginBottom: "16px", textTransform: "uppercase" }}>Services</p>
              {["Branding", "AI Integration", "DX Support", "Shopify/EC", "TikTok", "Notion"].map((s) => (
                <Link key={s} href="#services" style={{ display: "block", fontSize: "13px", color: "var(--ink2)", marginBottom: "10px", transition: "color .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--navy)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink2)")}
                >{s}</Link>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".15em", color: "var(--muted)", marginBottom: "16px", textTransform: "uppercase" }}>Company</p>
              {[
                { label: "Cases", href: "#cases" },
                { label: "About", href: "#why" },
                { label: "Members", href: "#members" },
                { label: "Knowledge", href: "#knowledge" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <Link key={l.label} href={l.href} style={{ display: "block", fontSize: "13px", color: "var(--ink2)", marginBottom: "10px", transition: "color .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--navy)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink2)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>
            © {new Date().getFullYear()} BALENCER inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ fontSize: "12px", color: "var(--muted)", transition: "color .2s" }}>
              プライバシーポリシー
            </Link>
            <Link href="/terms" style={{ fontSize: "12px", color: "var(--muted)", transition: "color .2s" }}>
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
