
export default function PdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh', width: '100vw' }}>
        {children}
      </body>
    </html>
  );
}