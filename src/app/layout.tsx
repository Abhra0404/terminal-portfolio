import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminal Portfolio | Abhra ",
  description: "A keyboard-first, interactive terminal-style portfolio that feels like SSH-ing into a developer's personal system.",
  keywords: ["portfolio", "developer", "terminal", "CLI", "interactive"],
  authors: [{ name: "Abhra Jaiswal" }],
  openGraph: {
    title: "Terminal Portfolio",
    description: "Interactive terminal-style developer portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
