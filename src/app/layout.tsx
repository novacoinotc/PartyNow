import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PartyNow - Encuentra tu crew para esta noche",
  description:
    "Conecta con personas que quieren salir de fiesta ahora mismo. Encuentra planes, únete a grupos y haz nuevos amigos.",
  keywords: [
    "fiesta",
    "salir",
    "amigos",
    "planes",
    "noche",
    "antro",
    "bar",
    "social",
  ],
  authors: [{ name: "PartyNow" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PartyNow",
  },
  openGraph: {
    title: "PartyNow - Encuentra tu crew para esta noche",
    description: "Conecta con personas que quieren salir de fiesta ahora mismo",
    type: "website",
    locale: "es_MX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased bg-zinc-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
