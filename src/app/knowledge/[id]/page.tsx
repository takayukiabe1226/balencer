import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getKnowledgeDetail, getKnowledgeList } from "@/lib/microcms";

export async function generateStaticParams() {
  try {
    const list = await getKnowledgeList(100);
    const ids = list.contents.map((a) => ({ id: a.id }));
    return ids.length > 0 ? ids : [{ id: "_placeholder" }];
  } catch {
    return [{ id: "_placeholder" }];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  try {
    const { id } = await params;
    const article = await getKnowledgeDetail(id);
    return {
      title: `${article.title} | ナレッジ | BALENCER`,
      description: article.summary ?? "",
    };
  } catch {
    return {};
  }
}

export default async function KnowledgeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "_placeholder") notFound();
  let article;
  try {
    article = await getKnowledgeDetail(id);
  } catch {
    notFound();
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: "var(--navy)", padding: "120px clamp(24px,6vw,80px) 64px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <Link href="/knowledge" style={{ fontFamily: "var(--en)", fontSize: "12px", color: "rgba(255,255,255,.4)", letterSpacing: ".1em", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
              ← Knowledge
            </Link>
            {article.category && (
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, color: "var(--indigo)", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "16px" }}>
                {article.category}
              </p>
            )}
            <h1 style={{ fontSize: "clamp(22px,3.5vw,40px)", fontWeight: 800, color: "white", lineHeight: 1.5, marginBottom: "16px" }}>
              {article.title}
            </h1>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)" }}>
              {new Date(article.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        {/* Thumbnail */}
        {article.thumbnail && (
          <div style={{ background: "var(--navy)", padding: "0 clamp(24px,6vw,80px)" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto", borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9", position: "relative" }}>
              <Image src={article.thumbnail.url} alt={article.title} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        )}

        {/* Content */}
        <section className="s" style={{ background: "var(--white)" }}>
          <div className="si" style={{ maxWidth: "760px" }}>
            {article.summary && (
              <p style={{ fontSize: "17px", color: "var(--ink2)", lineHeight: 2.2, marginBottom: "48px", borderLeft: "3px solid var(--indigo)", paddingLeft: "20px" }}>
                {article.summary}
              </p>
            )}
            {article.content && (
              <div
                className="cms-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--cream2)", padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px)", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".2em", color: "var(--muted)", marginBottom: "16px" }}>CONTACT</p>
          <h2 style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 800, color: "var(--navy)", marginBottom: "24px" }}>
            この記事について、詳しく話しませんか？
          </h2>
          <Link href="/#contact" className="btn-indigo" style={{ display: "inline-flex" }}>
            無料相談する →
          </Link>
        </section>
      </main>
      <Footer />
      <style>{`
        .cms-content h2 { font-size: clamp(20px,2.5vw,28px); font-weight: 800; color: var(--navy); margin: 48px 0 16px; line-height: 1.4; }
        .cms-content h3 { font-size: clamp(17px,2vw,22px); font-weight: 700; color: var(--navy); margin: 36px 0 12px; }
        .cms-content p  { font-size: 16px; color: var(--ink2); line-height: 2.2; margin-bottom: 24px; }
        .cms-content ul, .cms-content ol { padding-left: 24px; margin-bottom: 24px; }
        .cms-content li { font-size: 15px; color: var(--ink2); line-height: 2; margin-bottom: 8px; }
        .cms-content img { border-radius: 12px; margin: 32px 0; max-width: 100%; }
        .cms-content a  { color: var(--indigo); text-decoration: underline; }
        .cms-content blockquote { border-left: 3px solid var(--border); padding: 16px 20px; margin: 32px 0; color: var(--ink2); }
      `}</style>
    </>
  );
}
