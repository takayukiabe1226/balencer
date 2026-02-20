import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getWork, getWorks } from "@/lib/microcms";

export async function generateStaticParams() {
  try {
    const works = await getWorks(100);
    const ids = works.contents.map((w) => ({ id: w.id }));
    return ids.length > 0 ? ids : [{ id: "_placeholder" }];
  } catch {
    return [{ id: "_placeholder" }];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  try {
    const { id } = await params;
    const work = await getWork(id);
    return {
      title: `${work.title} | BALENCER`,
      description: work.description ?? "",
    };
  } catch {
    return {};
  }
}

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "_placeholder") notFound();
  let work;
  try {
    work = await getWork(id);
  } catch {
    notFound();
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: "var(--navy)", padding: "120px clamp(24px,6vw,80px) 64px" }}>
          <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
            <Link href="/works" style={{ fontFamily: "var(--en)", fontSize: "12px", color: "rgba(255,255,255,.4)", letterSpacing: ".1em", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
              ← Works
            </Link>
            {work.tags && (
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, color: "var(--indigo)", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "16px" }}>
                {work.tags}
              </p>
            )}
            <h1 style={{ fontFamily: "var(--en)", fontSize: "clamp(28px,4vw,56px)", fontWeight: 900, color: "white", letterSpacing: "-.02em", lineHeight: 1.2, marginBottom: "16px" }}>
              {work.title}
            </h1>
            {work.client && (
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,.5)" }}>{work.client}</p>
            )}
          </div>
        </section>

        {/* Thumbnail */}
        {work.thumbnail && (
          <div style={{ background: "var(--navy)", padding: "0 clamp(24px,6vw,80px) 0" }}>
            <div style={{ maxWidth: "var(--max)", margin: "0 auto", borderRadius: "20px", overflow: "hidden", aspectRatio: "16/7", position: "relative" }}>
              <Image src={work.thumbnail.url} alt={work.title} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        )}

        {/* Content */}
        <section className="s" style={{ background: "var(--white)" }}>
          <div className="si" style={{ maxWidth: "760px" }}>
            {work.description && (
              <div style={{ marginBottom: "48px" }}>
                <p className="tag tag-light">概要</p>
                <p style={{ fontSize: "16px", color: "var(--ink2)", lineHeight: 2.2, marginTop: "16px" }}>{work.description}</p>
              </div>
            )}
            {work.result && (
              <div style={{ background: "var(--indigo-light)", borderRadius: "16px", padding: "32px", border: "1.5px solid rgba(67,56,202,.15)" }}>
                <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, color: "var(--indigo)", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px" }}>Result</p>
                <p style={{ fontSize: "15px", color: "var(--navy)", lineHeight: 2, fontWeight: 500 }}>{work.result}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--indigo)", padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--en)", fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: "white", marginBottom: "24px" }}>
            あなたの会社も、変えられる。
          </h2>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contact" className="btn-white" style={{ display: "inline-flex" }}>無料相談する →</Link>
            <Link href="/works" style={{ padding: "16px 32px", border: "1.5px solid rgba(255,255,255,.3)", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "14px", color: "rgba(255,255,255,.8)", display: "inline-flex", alignItems: "center" }}>他の事例を見る</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
