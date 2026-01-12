import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminal Portfolio | Your Name",
  description: "A keyboard-first, interactive terminal-style portfolio that feels like SSH-ing into a developer's personal system.",
  keywords: ["portfolio", "developer", "terminal", "CLI", "interactive"],
  authors: [{ name: "Your Name" }],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
