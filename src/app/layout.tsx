import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github-career.vercel.app"),

  title: "GitHub Career Analyzer — Discover Your Real Developer Value",
  description:
    "Analyze your GitHub profile with AI. Get insights on code quality, technologies, career readiness, and personalized growth roadmaps.",

  openGraph: {
    title: "GitHub Career Analyzer — Discover Your Real Developer Value",
    description:
      "Analyze repositories, code quality, technologies, contribution patterns, and career readiness using AI.",
    url: "https://github-career-analyzer.vercel.app",
    siteName: "GitHub Career Analyzer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GitHub Career Analyzer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GitHub Career Analyzer",
    description:
      "Analyze repositories, code quality, technologies, contribution patterns, and career readiness using AI.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
