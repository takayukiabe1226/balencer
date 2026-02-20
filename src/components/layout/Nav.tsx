"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { en: "Service", ja: "サービス", href: "#services" },
  { en: "Cases", ja: "事例", href: "#cases" },
  { en: "About", ja: "私たちについて", href: "#why" },
  { en: "Knowledge", ja: "ナレッジ", href: "#knowledge" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 800,
          height: "64px",
          padding: "0 clamp(20px,5vw,64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background .4s, backdrop-filter .4s, box-shadow .4s",
          background: scrolled ? "rgba(247,245,240,.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--en)",
            fontSize: "21px",
            fontWeight: 800,
            letterSpacing: ".18em",
            color: "var(--navy)",
          }}
        >
          BALENCER
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2px", listStyle: "none", alignItems: "center" }}>
          {navLinks.map((l) => (
            <li key={l.en} className="hidden-sp">
              <Link
                href={l.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "7px 13px",
                  borderRadius: "8px",
                  transition: "background .25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontFamily: "var(--en)", fontSize: "13px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink)", lineHeight: 1 }}>{l.en}</span>
                <span style={{ fontSize: "9px", color: "var(--muted)", lineHeight: 1, marginTop: "3px" }}>{l.ja}</span>
              </Link>
            </li>
          ))}
          <li className="hidden-sp">
            <Link
              href="#contact"
              style={{
                padding: "10px 22px",
                background: "var(--indigo)",
                borderRadius: "100px",
                fontFamily: "var(--en)",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--white)",
                letterSpacing: ".06em",
                transition: "background .3s, transform .3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--indigo2)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--indigo)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              Contact
            </Link>
          </li>
          {/* Hamburger */}
          <li className="show-sp">
            <button
              onClick={() => setMenuOpen(true)}
              style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none" }}
              aria-label="メニューを開く"
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{ width: "22px", height: "1.5px", background: "var(--ink)", display: "block" }} />
              ))}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--navy)",
            zIndex: 850,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "44px",
              height: "44px",
              border: "1px solid rgba(255,255,255,.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              color: "white",
              fontSize: "20px",
            }}
            aria-label="メニューを閉じる"
          >
            ×
          </button>
          {[...navLinks, { en: "Contact", ja: "お問い合わせ", href: "#contact" }].map((l) => (
            <Link
              key={l.en}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--en)",
                fontSize: "clamp(24px,6vw,36px)",
                fontWeight: 700,
                letterSpacing: ".1em",
                color: "rgba(255,255,255,.6)",
                padding: "12px 24px",
                transition: "color .3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.6)")}
            >
              {l.en}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-sp { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-sp { display: none !important; }
        }
      `}</style>
    </>
  );
}
