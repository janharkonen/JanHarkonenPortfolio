import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Härkönen - Bachelor's Thesis",
};

export default function PdfPage() {
  return (
    <embed
      src="/Jan_Harkonen_Bachelors_thesis.pdf"
      type="application/pdf"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'absolute', 
        top: 0, 
        left: 0 
      }}
      title="Jan Härkönen's Bachelor's Thesis"
      />
  );
}