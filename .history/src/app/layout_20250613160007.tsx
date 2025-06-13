import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DefaultTemplate } from "@/components/templates/DefaultTemplate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zamorana - Sonidos de la Naturaleza",
  description: "Explora y descubre los sonidos más relajantes de la naturaleza",
  icons: {
    icon: "/zamorana-logo.png",
    shortcut: "/zamorana-logo.png",
    apple: "/zamorana-logo.png",
  },
  openGraph: {
    title: "Zamorana - Sonidos de la Naturaleza",
    description:
      "Explora y descubre los sonidos más relajantes de la naturaleza",
    type: "website",
    locale: "es_ES",
    url: "https://zamorana.vercel.app",
    siteName: "Zamorana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DefaultTemplate>{children}</DefaultTemplate>
      </body>
    </html>
  );
}
