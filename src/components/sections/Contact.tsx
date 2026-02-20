"use client";

import { useState } from "react";

const services = ["ブランディング", "生成AI導入", "DX支援", "Shopify/EC", "TikTok運用", "Notion導入", "まだ決まっていない"];
const challenges = ["認知・集客が弱い", "採用がうまくいかない", "売上・利益を伸ばしたい", "組織・仕組みを整えたい", "ブランドを見直したい", "DX・IT化を進めたい", "AI活用を始めたい"];
const budgets = ["〜50万円", "50〜200万円", "200万円〜", "未定・相談したい"];

type Step = 1 | 2 | 3 | 4;

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", tel: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, item: string) => {
    setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const pillStyle = (active: boolean) => ({
    padding: "10px 20px",
    borderRadius: "100px",
    border: `1.5px solid ${active ? "var(--indigo)" : "var(--border)"}`,
    background: active ? "var(--indigo-light)" : "var(--white)",
    color: active ? "var(--indigo)" : "var(--ink2)",
    fontSize: "13px",
    fontWeight: active ? 600 : 400,
    cursor: "pointer",
    transition: "all .2s",
    fontFamily: "var(--ja)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="s" style={{ background: "var(--cream2)" }}>
        <div className="si" style={{ textAlign: "center", maxWidth: "560px" }}>
          <div style={{ fontSize: "48px", marginBottom: "24px" }}>✓</div>
          <h2 style={{ fontFamily: "var(--en)", fontSize: "28px", fontWeight: 800, color: "var(--navy)", marginBottom: "16px" }}>
            送信完了しました。
          </h2>
          <p style={{ fontSize: "15px", color: "var(--ink2)", lineHeight: 2 }}>
            内容を確認の上、2営業日以内にご連絡いたします。<br />
            今しばらくお待ちください。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="s" style={{ background: "var(--cream2)" }}>
      <div className="si" style={{ maxWidth: "760px" }}>
        <p className="tag tag-light rv">Contact</p>
        <h2 className="h2 h2-light rv d1">まずは、ご相談から。</h2>
        <p className="sdesc sdesc-light rv d2">
          無料でヒアリングを行い、最適な支援をご提案します。
        </p>

        {/* Step indicator */}
        <div style={{ display: "flex", gap: "8px", marginTop: "40px", marginBottom: "40px", alignItems: "center" }}>
          {([1, 2, 3, 4] as Step[]).map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: step >= s ? "var(--navy)" : "var(--border)",
                  color: step >= s ? "white" : "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--en)",
                  fontSize: "11px",
                  fontWeight: 700,
                  transition: "background .3s",
                  flexShrink: 0,
                }}
              >
                {s}
              </div>
              {s < 4 && <div style={{ width: "24px", height: "1px", background: step > s ? "var(--navy)" : "var(--border)", transition: "background .3s" }} />}
            </div>
          ))}
        </div>

        <div style={{ background: "var(--white)", borderRadius: "20px", padding: "clamp(24px,4vw,48px)" }}>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".15em", color: "var(--muted)", marginBottom: "8px" }}>STEP 01</p>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "24px" }}>気になるサービスを選んでください（複数可）</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {services.map((s) => (
                  <button key={s} style={pillStyle(selectedServices.includes(s))} onClick={() => toggleItem(selectedServices, setSelectedServices, s)}>
                    {s}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                style={{ marginTop: "32px", padding: "14px 36px", background: "var(--navy)", color: "white", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", fontWeight: 700, cursor: "pointer", border: "none" }}
              >
                次へ →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".15em", color: "var(--muted)", marginBottom: "8px" }}>STEP 02</p>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "24px" }}>現在の課題を選んでください（複数可）</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {challenges.map((c) => (
                  <button key={c} style={pillStyle(selectedChallenges.includes(c))} onClick={() => toggleItem(selectedChallenges, setSelectedChallenges, c)}>
                    {c}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
                <button onClick={() => setStep(1)} style={{ padding: "14px 24px", border: "1.5px solid var(--border)", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", cursor: "pointer", background: "none", color: "var(--ink2)" }}>← 戻る</button>
                <button onClick={() => setStep(3)} style={{ padding: "14px 36px", background: "var(--navy)", color: "white", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", fontWeight: 700, cursor: "pointer", border: "none" }}>次へ →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".15em", color: "var(--muted)", marginBottom: "8px" }}>STEP 03</p>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "24px" }}>想定予算を選んでください</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {budgets.map((b) => (
                  <button key={b} style={pillStyle(selectedBudget === b)} onClick={() => setSelectedBudget(b)}>
                    {b}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
                <button onClick={() => setStep(2)} style={{ padding: "14px 24px", border: "1.5px solid var(--border)", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", cursor: "pointer", background: "none", color: "var(--ink2)" }}>← 戻る</button>
                <button onClick={() => setStep(4)} style={{ padding: "14px 36px", background: "var(--navy)", color: "white", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", fontWeight: 700, cursor: "pointer", border: "none" }}>次へ →</button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <p style={{ fontFamily: "var(--en)", fontSize: "11px", fontWeight: 700, letterSpacing: ".15em", color: "var(--muted)", marginBottom: "8px" }}>STEP 04</p>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "24px" }}>お客様情報を入力してください</h3>

              {[
                { label: "お名前", key: "name", required: true, placeholder: "山田 太郎" },
                { label: "会社名", key: "company", required: false, placeholder: "株式会社〇〇" },
                { label: "メールアドレス", key: "email", required: true, placeholder: "info@example.com" },
                { label: "電話番号", key: "tel", required: false, placeholder: "090-0000-0000" },
              ].map((field) => (
                <div key={field.key} style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--ink)", marginBottom: "8px" }}>
                    {field.label}{field.required && <span style={{ color: "var(--indigo)", marginLeft: "4px", fontSize: "11px" }}>*必須</span>}
                  </label>
                  <input
                    type={field.key === "email" ? "email" : "text"}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1.5px solid var(--border)",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontFamily: "var(--ja)",
                      color: "var(--ink)",
                      background: "var(--cream)",
                      outline: "none",
                      transition: "border-color .2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--indigo)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--ink)", marginBottom: "8px" }}>その他ご要望（任意）</label>
                <textarea
                  rows={4}
                  placeholder="自由にご記入ください"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1.5px solid var(--border)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontFamily: "var(--ja)",
                    color: "var(--ink)",
                    background: "var(--cream)",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color .2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--indigo)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button type="button" onClick={() => setStep(3)} style={{ padding: "14px 24px", border: "1.5px solid var(--border)", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", cursor: "pointer", background: "none", color: "var(--ink2)" }}>← 戻る</button>
                <button
                  type="submit"
                  style={{ padding: "14px 36px", background: "var(--indigo)", color: "white", borderRadius: "100px", fontFamily: "var(--en)", fontSize: "13px", fontWeight: 700, cursor: "pointer", border: "none", transition: "background .3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--indigo2)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--indigo)")}
                >
                  送信する →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
