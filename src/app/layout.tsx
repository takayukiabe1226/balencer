import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BALENCER｜勝てるBrandを設計する。ブランディング・AI・DXコンサルティング",
  description: "1000社以上の支援実績。ブランディング戦略・生成AI導入・DX推進で中小企業の「選ばれる理由」をつくる。まずはお気軽にご相談ください。",
  keywords: ["ブランディングコンサルティング", "生成AI導入", "DX支援", "中小企業", "Shopify", "Notion", "デザイン思考"],
  openGraph: {
    title: "BALENCER｜勝てるBrandを設計する。",
    description: "1000社以上の支援実績。ブランディング・AI・DXで中小企業の競争力を高める。",
    type: "website",
    url: "https://balencer.jp",
    siteName: "BALENCER",
  },
  alternates: {
    canonical: "https://balencer.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
