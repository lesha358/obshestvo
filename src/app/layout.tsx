import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Защита прав собственников жилья",
    template: "%s — Защита прав собственников жилья",
  },
  description: "Общественная организация, защищающая права собственников жилья и оказывающая правовую поддержку в вопросах ЖКХ.",
  keywords: ["ЖКХ", "собственники жилья", "управляющие компании", "жилищное право", "правовая помощь"],
  authors: [{ name: "Защита прав собственников жилья" }],
  creator: "Защита прав собственников жилья",
  publisher: "Защита прав собственников жилья",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#dc2626",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://zashchita-zhilya.ru",
    title: "Защита прав собственников жилья",
    description: "Общественная организация, защищающая права собственников жилья и оказывающая правовую поддержку в вопросах ЖКХ.",
    siteName: "Защита прав собственников жилья",
  },
  twitter: {
    card: "summary_large_image",
    title: "Защита прав собственников жилья",
    description: "Общественная организация, защищающая права собственников жилья и оказывающая правовую поддержку в вопросах ЖКХ.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <Header />
        <main className="py-8">
          <Container>{children}</Container>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
