import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Härkönen - Master's Thesis",
};

export default function PdfPage() {
  return (
    <embed
      src="/Jan_Harkonen_Masters_thesis.pdf"
      type="application/pdf"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'absolute', 
        top: 0, 
        left: 0 
      }}
      title="Jan Härkönen's Master's Thesis"
      />
  );
}