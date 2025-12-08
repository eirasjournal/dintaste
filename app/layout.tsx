import type { Metadata } from "next";
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

// --- AICI AM SCHIMBAT METADATELE ---
export const metadata: Metadata = {
  // 1. Titlul Site-ului
  title: {
    default: "Din Taste",
    template: "%s | Din Taste" // Asta ajută pe viitor dacă avem pagini cu titlu dinamic
  },

  // 2. Descrierea (ce apare sub titlu pe Google)
  description: "A digital space for raw inputs. Code, broken hearts, and late-night thoughts. A personal aesthetic journal.",

  // 3. Cuvinte cheie (pentru SEO)
  keywords: ["blog", "programming", "journal", "tech", "aesthetic", "Next.js", "personal blog", "romania", "dark aesthetic"],

  // 4. Autor
  authors: [{ name: "eira" }],

  // 5. Open Graph (Cum arată când dai Share pe WhatsApp/Facebook/LinkedIn)
  openGraph: {
    title: "Din Taste",
    description: "Code, broken hearts, and late-night thoughts.",
    url: "https://dintaste.me", // Chiar dacă nu ai domeniul încă, e bine să fie setat
    siteName: "Din Taste",
    images: [
      {
        url: "/pixelcat.png", // Asigură-te că faci o imagine cu numele ăsta în folderul 'public'
        width: 1200,
        height: 630,
        alt: "Din Taste Blog Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 6. Twitter Card (Cum arată pe X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Din Taste",
    description: "Code, broken hearts, and late-night thoughts.",
    images: ["/pixelcat.png"],
  },

  // 7. Iconița din tab (Favicon)
  icons: {
    icon: "/pixelcat.png", // Folosim pisica ta pixelată
    shortcut: "/pixelcat.png",
    apple: "/pixelcat.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}