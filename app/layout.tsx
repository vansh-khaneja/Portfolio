import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanshkhaneja.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vansh Khaneja - AI Engineer & Full-Stack Developer",
    template: "%s | Vansh Khaneja"
  },
  description: "Portfolio website of Vansh Khaneja - AI Engineer & Full-Stack Developer specializing in modern web technologies, AI/ML, RAG systems, computer vision, and building innovative digital experiences. Explore projects, blog posts, and connect.",
  keywords: [
    "Vansh Khaneja",
    "AI Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Machine Learning",
    "RAG Systems",
    "Computer Vision",
    "Next.js",
    "TypeScript",
    "React",
    "AI/ML Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Vansh Khaneja", url: siteUrl }],
  creator: "Vansh Khaneja",
  publisher: "Vansh Khaneja",
  generator: "Next.js",
  applicationName: "Vansh Khaneja Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vansh Khaneja Portfolio",
    title: "Vansh Khaneja - AI Engineer & Full-Stack Developer",
    description: "Portfolio website of Vansh Khaneja - AI Engineer & Full-Stack Developer specializing in modern web technologies, AI/ML, RAG systems, computer vision, and building innovative digital experiences.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vansh Khaneja - AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Khaneja - AI Engineer & Full-Stack Developer",
    description: "Portfolio website of Vansh Khaneja - AI Engineer & Full-Stack Developer specializing in modern web technologies, AI/ML, and building innovative digital experiences.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@vanshkhaneja",
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
  alternates: {
    canonical: siteUrl,
  },
  category: "Portfolio",
  classification: "Portfolio Website",
  other: {
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
