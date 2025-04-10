import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Härkönen - Special Assignment",
};

export default function PdfPage() {
  return (
    <embed
      src="/Jan_Harkonen_Special_Assignment.pdf"
      type="application/pdf"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'absolute', 
        top: 0, 
        left: 0 
      }}
      title="Jan Härkönen - Special Assignment"
      />
  );
}