import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getKnowledgeList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "ナレッジ | BALENCER",
  description: "ブランディング・AI・DXに関するお役立ち情報をお届けします。",
};

export default async function KnowledgePage() {
  let articles = null;
  try {
    articles = await getKnowledgeList(20);
  } catch {
    // 空でもビルドを通す
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: "var(--navy)", padding: "120px clamp(24px,6vw,80px) 80px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: "16px" }}>Knowledge</p>
          <h1 style={{ fontFamily: "var(--en)", fontSize: "clamp(40px,7vw,80px)", fontWeight: 900, color: "white", letterSpacing: "-.03em" }}>
            ナレッジ
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,.5)", marginTop: "20px", lineHeight: 2 }}>
            ブランディング・AI・DXの実践知識をお届けします。
          </p>
        </section>

        {/* Articles */}
        <section className="s" style={{ background: "var(--cream)" }}>
          <div className="si">
            {!articles || articles.contents.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "24px" }}>記事は準備中です。</p>
                <Link href="/" className="btn-indigo">トップに戻る</Link>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="knowledge-grid">
                {articles.contents.map((article) => (
                  <Link key={article.id} href={`/knowledge/${article.id}`} style={{ display: "block" }}>
                    <div className="knowledge-card">
                      <div style={{ aspectRatio: "16/9", background: "var(--navy2)", position: "relative", overflow: "hidden" }}>
                        {article.thumbnail ? (
                          <Image src={article.thumbnail.url} alt={article.title} fill style={{ objectFit: "cover" }} />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontFamily: "var(--en)", fontSize: "12px", color: "rgba(255,255,255,.3)", letterSpacing: ".1em" }}>BALENCER</span>
                          </div>
                        )}
                      </div>
                      <div style={{ padding: "20px" }}>
                        {article.category && (
                          <p style={{ fontFamily: "var(--en)", fontSize: "10px", fontWeight: 700, color: "var(--indigo)", letterSpacing: ".1em", marginBottom: "8px", textTransform: "uppercase" }}>{article.category}</p>
                        )}
                        <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px", lineHeight: 1.6 }}>{article.title}</h2>
                        {article.summary && (
                          <p style={{ fontSize: "13px", color: "var(--ink2)", lineHeight: 1.8, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{article.summary}</p>
                        )}
                        <p style={{ fontFamily: "var(--en)", fontSize: "12px", fontWeight: 700, color: "var(--indigo)", marginTop: "12px" }}>
                          続きを読む →
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <style>{`
            @media (max-width: 900px) { .knowledge-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 560px) { .knowledge-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
