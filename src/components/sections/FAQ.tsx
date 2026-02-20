"use client";

import { useState } from "react";

const faqs = [
  {
    q: "どのサービスから相談すればいいですか？",
    a: "どこから始めるべきかわからない方がほとんどです。まずはお気軽にご相談ください。ヒアリングを通じて、最適な入り口を一緒に見つけます。",
  },
  {
    q: "予算はどれくらい必要ですか？",
    a: "サービスや規模によって異なりますが、まずは〜50万円のスモールスタートプランもご用意しています。予算に合わせた複数プランをご提案します。",
  },
  {
    q: "生成AIの導入、社員への浸透が心配です。",
    a: "導入後の研修・定着支援まで一貫してサポートします。ツール選定から社内ルール整備、勉強会の実施まで伴走しますのでご安心ください。",
  },
  {
    q: "相談から契約・開始までの流れは？",
    a: "①初回相談（無料）→ ②課題ヒアリング → ③提案書提出 → ④契約・キックオフ。初回相談から最短1週間でご提案をお届けします。",
  },
  {
    q: "Notionの問い合わせは多いですが、案件になりますか？",
    a: "はい、Notion単体でのご依頼も承っています。業務フロー整理から構築・運用サポートまで対応可能です。",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 0",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          gap: "16px",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.6 }}>{q}</span>
        <span
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1.5px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform .3s, border-color .3s, background .3s",
            transform: isOpen ? "rotate(45deg)" : "rotate(0)",
            background: isOpen ? "var(--navy)" : "transparent",
            borderColor: isOpen ? "var(--navy)" : "var(--border)",
            color: isOpen ? "white" : "var(--ink)",
            fontSize: "18px",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height .5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p style={{ fontSize: "14px", color: "var(--ink2)", lineHeight: 2, paddingBottom: "24px" }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="s" style={{ background: "var(--white)" }}>
      <div className="si" style={{ maxWidth: "760px" }}>
        <p className="tag tag-light rv">FAQ</p>
        <h2 className="h2 h2-light rv d1">よくある質問。</h2>

        <div style={{ marginTop: "48px" }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
