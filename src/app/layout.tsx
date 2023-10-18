import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-800">{children}</body>
    </html>
  );
}
