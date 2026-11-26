import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Cormorant_Garamond,
  Cinzel,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Font undangan — diambil dari repo ijabkabul (4 font yang sama persis):
// Playfair Display, Cormorant Garamond, Cinzel, Great Vibes.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wedding of Fadhil & Meilany",
  description:
    "Undangan pernikahan Fadhil & Meilany. Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu.",
  keywords: ["Z.ai", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "The Wedding of Fadhil & Meilany",
    description:
      "Undangan pernikahan Fadhil & Meilany. Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu.",
    url: "https://chat.z.ai",
    siteName: "The Wedding of Fadhil & Meilany",
    type: "website",
    images: [
      {
        // Foto untuk preview saat link dibagikan di WhatsApp (og:image).
        // ?tr=... = resize via ImageKit ke 1200x630 biar preview WA muncul.
        url: "https://ik.imagekit.io/au8q7zdvt/FADHIL%20-%20MEILANY/DSC_0295.JPG?tr=w-1200,h-630,cm-fill,fo-center,q-80",
        width: 1200,
        height: 630,
        alt: "Fadhil & Meilany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Fadhil & Meilany",
    description:
      "Undangan pernikahan Fadhil & Meilany. Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu.",
    images: [
      "https://ik.imagekit.io/au8q7zdvt/FADHIL%20-%20MEILANY/DSC_0295.JPG?tr=w-1200,h-630,cm-fill,fo-center,q-80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
