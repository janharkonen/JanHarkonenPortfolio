export default function PdfPage() {
  return (
    <embed
      src="/CV_en_Jan_Härkönen.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw' }}
      title="Jan Härkönen's Resume"
      />
  );
}