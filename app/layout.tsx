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

export const metadata: Metadata = {
  title: "Din Taste",
  description: "Un blog anonim despre proiecte personale.",
  keywords: ['blog', 'student', 'romania', 'proiecte personale', 'tehnologie', 'filme', 'seriale', 'recenzii', 'tutoriale', 'muzica'],
  openGraph: {
    title: 'Din Taste',
    description: 'Jurnal de bord al unui dezvoltator pasionat.',
    url: 'https://dintaste.me',
    siteName: 'Din Taste',
    images: [
      {
        url: 'https://dintaste.me/logo.png', // Fă o poză simplă cu logo-ul tău și pune-o în folderul public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ro_RO',
    type: 'website',
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
