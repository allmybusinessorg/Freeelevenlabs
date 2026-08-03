import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxe Audio | Free ElevenLabs Alternative - Offline AI Voice Cloning",
  description: "Experience 100% free, unlimited, offline AI voice cloning and continuous speech generation. Powered by OpenBMB VoxCPM. No subscriptions, zero cloud latency.",
  keywords: [
    "Free ElevenLabs alternative",
    "VoxCPM Desktop",
    "AI voice cloning free",
    "Offline TTS software",
    "Sayak 007",
    "OpenBMB VoxCPM2",
    "Voice Design AI",
    "Zero shot voice cloning"
  ],
  authors: [{ name: "Sayak 007" }],
  openGraph: {
    title: "Luxe Audio - 100% Free Offline AI Voice Cloning",
    description: "Unlimited studio-quality AI voice synthesis on Windows PC.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
