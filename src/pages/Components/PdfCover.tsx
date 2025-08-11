import React from 'react';
import { useEffect, useRef } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfCoverProps {
  pdfUrl: string;
}

const PdfCover = (props:PdfCoverProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log(props.pdfUrl)
    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(props.pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport,
      };

      await page.render(renderContext).promise;
    };

    loadPdf();
  }, [props.pdfUrl]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        cursor: 'pointer',
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 8,
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
      }}
      onClick={() => window.open(props.pdfUrl, '_blank')}
      title="Click to open full PDF"
    />
  );
};

export default PdfCover;
