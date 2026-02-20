import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getWorks } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "事例 | BALENCER",
  description: "BALENCERの支援実績・事例一覧。ブランディング・AI・DXで中小企業を変えた事例をご紹介します。",
};

export default async function WorksPage() {
  let works: Awaited<ReturnType<typeof getWorks>> | null = null;
  try {
    works = await getWorks(20);
  } catch {
    // APIが空でもビルドを通す
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "var(--navy)",
            padding: "120px clamp(24px,6vw,80px) 80px",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: "16px" }}>
            Works
          </p>
          <h1
            style={{
              fontFamily: "var(--en)",
              fontSize: "clamp(40px,7vw,80px)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-.03em",
              lineHeight: 1.05,
            }}
          >
            事例・実績
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,.5)", marginTop: "20px", lineHeight: 2 }}>
            1,000社以上の支援から選んだ、変化の記録。
          </p>
        </section>

        {/* Works grid */}
        <section className="s" style={{ background: "var(--cream)" }}>
          <div className="si">
            {!works || works.contents.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "24px" }}>
                  事例は準備中です。
                </p>
                <Link href="/" className="btn-indigo">トップに戻る</Link>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                }}
                className="works-grid"
              >
                {works.contents.map((work) => (
                  <Link
                    key={work.id}
                    href={`/works/${work.id}`}
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <div className="work-card">
                      {/* Thumbnail */}
                      <div style={{ aspectRatio: "16/9", background: "var(--navy)", overflow: "hidden", position: "relative" }}>
                        {work.thumbnail ? (
                          <Image
                            src={work.thumbnail.url}
                            alt={work.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontFamily: "var(--en)", fontSize: "12px", color: "rgba(255,255,255,.3)", letterSpacing: ".1em" }}>NO IMAGE</span>
                          </div>
                        )}
                      </div>
                      {/* Body */}
                      <div style={{ padding: "20px" }}>
                        {work.tags && (
                          <p style={{ fontFamily: "var(--en)", fontSize: "10px", fontWeight: 700, color: "var(--indigo)", letterSpacing: ".1em", marginBottom: "8px", textTransform: "uppercase" }}>
                            {work.tags}
                          </p>
                        )}
                        <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--navy)", marginBottom: "6px", lineHeight: 1.6 }}>{work.title}</h2>
                        {work.client && (
                          <p style={{ fontSize: "12px", color: "var(--muted)" }}>{work.client}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <style>{`
            @media (max-width: 900px) { .works-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 560px) { .works-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--indigo)", padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--en)", fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: "white", marginBottom: "24px" }}>
            あなたの会社も、変えられる。
          </h2>
          <Link href="/#contact" className="btn-white" style={{ display: "inline-flex" }}>
            無料相談する →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
