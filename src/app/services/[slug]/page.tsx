import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { services, getService } from "@/data/services";

// 静的書き出し用: 全スラッグを事前生成
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.en} | ${service.ja} — BALENCER`,
    description: service.description,
    alternates: { canonical: `https://balencer.jp/services/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          style={{
            background: service.bg,
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px clamp(24px,6vw,80px) 80px",
          }}
        >
          <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: "20px" }}>
            Service
          </p>
          <h1
            style={{
              fontFamily: "var(--en)",
              fontSize: "clamp(40px,7vw,88px)",
              fontWeight: 900,
              letterSpacing: "-.03em",
              color: "white",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            {service.en}
          </h1>
          <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "rgba(255,255,255,.6)", fontWeight: 500, marginBottom: "32px" }}>
            {service.ja}
          </p>
          <p
            style={{
              fontSize: "clamp(18px,2.5vw,26px)",
              fontWeight: 700,
              color: "white",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            {service.tagline}
          </p>
        </section>

        {/* Description */}
        <section className="s" style={{ background: "var(--white)" }}>
          <div className="si" style={{ maxWidth: "760px" }}>
            <p className="tag tag-light">Overview</p>
            <p style={{ fontSize: "clamp(16px,1.8vw,18px)", color: "var(--ink2)", lineHeight: 2.2, marginTop: "16px" }}>
              {service.description}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="s" style={{ background: "var(--cream)" }}>
          <div className="si">
            <p className="tag tag-light">Features</p>
            <h2 className="h2 h2-light" style={{ marginBottom: "48px" }}>
              できること。
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
              className="features-grid"
            >
              {service.features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--white)",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1.5px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--en)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--indigo)",
                      letterSpacing: ".15em",
                      marginBottom: "12px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--navy)", marginBottom: "10px", lineHeight: 1.5 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--ink2)", lineHeight: 2 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) { .features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Flow */}
        <section className="s" style={{ background: "var(--navy)" }}>
          <div className="si" style={{ maxWidth: "760px" }}>
            <p className="tag tag-dark">Flow</p>
            <h2 className="h2 h2-dark" style={{ marginBottom: "48px" }}>
              進め方。
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {service.flow.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "24px",
                    paddingBottom: "32px",
                    position: "relative",
                  }}
                >
                  {/* Line */}
                  {i < service.flow.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "23px",
                        top: "40px",
                        width: "1px",
                        bottom: "0",
                        background: "rgba(255,255,255,.1)",
                      }}
                    />
                  )}
                  {/* Step circle */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(255,255,255,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--en)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "rgba(255,255,255,.5)",
                      flexShrink: 0,
                      background: "rgba(255,255,255,.04)",
                      zIndex: 1,
                    }}
                  >
                    {f.step}
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "white", marginBottom: "8px" }}>{f.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", lineHeight: 1.9 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="s" style={{ background: "var(--white)" }}>
          <div className="si" style={{ maxWidth: "760px" }}>
            <p className="tag tag-light">FAQ</p>
            <h2 className="h2 h2-light" style={{ marginBottom: "40px" }}>
              よくある質問。
            </h2>
            {service.faq.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)", padding: "24px 0" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", lineHeight: 1.6 }}>
                  Q. {f.q}
                </p>
                <p style={{ fontSize: "14px", color: "var(--ink2)", lineHeight: 2 }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--indigo)",
            padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--en)",
                fontSize: "clamp(24px,3.5vw,40px)",
                fontWeight: 800,
                color: "white",
                marginBottom: "16px",
              }}
            >
              まずは無料相談から。
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,.7)", marginBottom: "32px", lineHeight: 2 }}>
              課題が整理されていなくても構いません。<br />
              ヒアリングを通じて最適なプランをご提案します。
            </p>
            <Link
              href="/#contact"
              className="btn-white"
              style={{ display: "inline-flex" }}
            >
              {service.cta} →
            </Link>
          </div>
        </section>

        {/* Other services */}
        <section className="s" style={{ background: "var(--cream)" }}>
          <div className="si">
            <p className="tag tag-light">Other Services</p>
            <h2 className="h2 h2-light" style={{ marginBottom: "40px" }}>他のサービス。</h2>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}
              className="other-svc-grid"
            >
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    style={{
                      padding: "24px",
                      borderRadius: "14px",
                      border: "1.5px solid var(--border)",
                      background: "var(--white)",
                      display: "block",
                      transition: "border-color .3s, transform .3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--indigo)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <p style={{ fontFamily: "var(--en)", fontSize: "15px", fontWeight: 700, color: "var(--navy)", marginBottom: "4px" }}>{s.en}</p>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>{s.ja}</p>
                  </Link>
                ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link href="/#services" style={{ fontFamily: "var(--en)", fontSize: "13px", fontWeight: 700, color: "var(--indigo)" }}>
                全サービスを見る →
              </Link>
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) { .other-svc-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
