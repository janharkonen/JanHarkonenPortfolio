import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Härkönen - Research Paper as co-author",
};

export default function PdfPage() {
  return (
    <embed
      src="/Research_paper_as_co_author.pdf"
      type="application/pdf"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'absolute', 
        top: 0, 
        left: 0 
      }}
      title="Jan Härkönen - Research Paper as co-author"
      />
  );
}