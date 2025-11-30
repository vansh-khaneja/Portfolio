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
  title: "Vansh Khaneja - Full Stack Developer & UI Designer",
  description: "Portfolio website of Vansh Khaneja - Full Stack Developer specializing in modern web technologies, UI/UX design, and building beautiful digital experiences.",
  keywords: ["Vansh Khaneja", "Full Stack Developer", "Web Developer", "UI Designer", "Portfolio"],
  authors: [{ name: "Vansh Khaneja" }],
  openGraph: {
    type: "website",
    title: "Vansh Khaneja - Full Stack Developer & UI Designer",
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
