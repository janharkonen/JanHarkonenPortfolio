import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Härkönen - Resume",
};

export default function PdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
      <header></header>
        {children}
      </body>
    </html>
  );
}