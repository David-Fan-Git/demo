import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡爪宠物洗护",
  description: "专业宠物洗护、美容造型、上门接送与透明护理反馈。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
