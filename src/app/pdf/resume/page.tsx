import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Härkönen - Resume",
};

export default function PdfPage() {
  return (
    <embed
      src="/CV_en_Jan_Härkönen.pdf"
      type="application/pdf"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'absolute', 
        top: 0, 
        left: 0 
      }}
      title="Jan Härkönen's Resume"
      />
  );
}