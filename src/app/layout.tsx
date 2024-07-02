import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RuleCMS Web Components Demo",
  description: "Demo site for RuleCMS Web Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://wc.rulecms.com/css/rulecms.css" />
        <script src="https://wc.rulecms.com/wc/greeting/rulecms-greeting.js" async type="module" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
