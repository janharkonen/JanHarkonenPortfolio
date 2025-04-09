import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Härkönen - Fullstack Developer",
  metadataBase: new URL("https://janharkonen.fi"),
  description: "Personal portfolio website of Jan Härkönen's work and skills as a fullstack developer.",
  authors: [
    {
      name: "Jan Härkönen",
      url: "https://janharkonen.fi",
    },
  ],
  creator: "Jan Härkönen",
  publisher: "Jan Härkönen",
  keywords: [
    "Jan Härkönen",
    "Jan",
    "Härkönen",
    "Fullstack Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
    "Software Engineer",
    "Cloud Engineer",
  ], 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          bg-orange-50/25 
          dark:bg-gray-950/97 
          text-gray-600 
          dark:text-gray-400 
          antialiased 
          flex 
          flex-col
          w-full
          min-h-screen
          `}
      >
        <Header />
        {/*
        <main className="max-w-3xl mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-8">
        */}
        <main>
          {children}
        </main>
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Jan Härkönen
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
