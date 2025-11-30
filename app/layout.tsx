import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Vansh Khaneja - AI Engineer & Full-Stack Developer",
  description: "Portfolio website of Vansh Khaneja - AI Engineer & Full-Stack Developer specializing in modern web technologies, AI/ML, and building innovative digital experiences.",
  keywords: ["Vansh Khaneja", "AI Engineer", "Full Stack Developer", "Web Developer", "Portfolio"],
  authors: [{ name: "Vansh Khaneja" }],
  openGraph: {
    type: "website",
    title: "Vansh Khaneja - AI Engineer & Full-Stack Developer",
    description: "Portfolio website showcasing projects and skills",
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
