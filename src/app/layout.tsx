import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake - Clinical Psychologist | Los Angeles, CA",
  description: "Licensed clinical psychologist Dr. Serena Blake offers compassionate therapy for anxiety, relationships, and trauma recovery. Virtual and in-person sessions in Los Angeles.",
  keywords: "psychologist, therapy, anxiety, relationships, trauma, Los Angeles, clinical psychology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
