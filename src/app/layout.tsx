import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Audio AI | Free ElevenLabs Alternative for PC (Offline Voice Generator)",
  description: "Download Creative Audio AI — 100% free, unlimited, offline AI voice cloning and continuous speech generation for Windows 10/11 (64-bit). Powered by OpenBMB VoxCPM2. Zero subscriptions.",
  keywords: [
    "Free ElevenLabs alternative for PC",
    "Creative Audio AI",
    "Download free AI voice generator Windows",
    "Best offline AI voice cloning software",
    "Creative Creature AI",
    "Sayak 007",
    "OpenBMB VoxCPM2",
    "Zero shot voice cloning software free"
  ],
  authors: [{ name: "Sayak 007" }],
  verification: {
    google: "zeHQzQn1T4PlbdVol_BbhPe3MzTdDVRddt5xwmxtWS4",
  },
  openGraph: {
    title: "Creative Audio AI - Free ElevenLabs Alternative for PC",
    description: "Unlimited studio-quality 48kHz AI voice synthesis & cloning on Windows PC.",
    type: "website",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Creative Audio AI",
  "operatingSystem": "Windows 10, Windows 11 (64-bit)",
  "applicationCategory": "MultimediaApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Free ElevenLabs Alternative — Unlimited offline AI voice cloning and text-to-speech software for Windows PC, powered by OpenBMB VoxCPM.",
  "author": {
    "@type": "Person",
    "name": "Sayak 007",
    "url": "https://isayak007.vercel.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Creative Creature",
    "url": "https://instagram.com/we.arecc"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="zeHQzQn1T4PlbdVol_BbhPe3MzTdDVRddt5xwmxtWS4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
