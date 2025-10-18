import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

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
      </body>
    </html>
  );
}
