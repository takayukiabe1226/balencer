import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// ── 型定義 ────────────────────────────────

export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  client: string;
  thumbnail?: MicroCMSImage;
  description?: string;
  result?: string;
  tags?: string;
};

export type Knowledge = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  thumbnail?: MicroCMSImage;
  category?: string;
  summary?: string;
  content?: string;
};

export type Member = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  nameJa: string;
  role: string;
  photo?: MicroCMSImage;
  bio?: string;
  twitter?: string;
};

// ── API取得関数 ────────────────────────────

export async function getWorks(limit = 10) {
  return client.getList<Work>({ endpoint: "works", queries: { limit } });
}

export async function getWork(id: string) {
  return client.getListDetail<Work>({ endpoint: "works", contentId: id });
}

export async function getKnowledgeList(limit = 10) {
  return client.getList<Knowledge>({ endpoint: "knowledge", queries: { limit } });
}

export async function getKnowledgeDetail(id: string) {
  return client.getListDetail<Knowledge>({ endpoint: "knowledge", contentId: id });
}

export async function getMembers() {
  return client.getList<Member>({ endpoint: "members", queries: { limit: 20 } });
}
