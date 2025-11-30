import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
