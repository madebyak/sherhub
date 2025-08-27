import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "SherHub - Marketing Agency",
    template: "%s | SherHub"
  },
  description: "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies, creative solutions, and comprehensive services.",
  keywords: ["marketing agency", "digital marketing", "creative solutions", "branding", "web development", "SEO", "social media marketing"],
  authors: [{ name: "SherHub" }],
  creator: "SherHub",
  publisher: "SherHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sherhub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SherHub - Marketing Agency",
    description: "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies, creative solutions, and comprehensive services.",
    url: 'https://sherhub.com',
    siteName: 'SherHub',
    images: [
      {
        url: '/og-image.jpg', // We'll need to create this
        width: 1200,
        height: 630,
        alt: 'SherHub Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SherHub - Marketing Agency",
    description: "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies and creative solutions.",
    images: ['/og-image.jpg'], // We'll need to create this
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // We'll create this
  },
  manifest: '/manifest.json', // We'll create this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-tomato antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
