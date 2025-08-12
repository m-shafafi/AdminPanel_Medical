import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface CatalogCardProps {
  pdfUrl: string;
  title: string;
  description: string;
}

const CatalogCard = (props:CatalogCardProps) => {
  return (
    <div className="catalog-card" style={{ border: "1px solid #ccc", padding: 10, borderRadius: 8 }}>
      <Document file="https://arxiv.org/pdf/quant-ph/0410100.pdf" loading="Loading preview..." noData="No PDF file">
        <Page pageNumber={1} width={250} />
      </Document>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.pdfUrl} target="_blank" rel="noopener noreferrer">
        📄 View PDF
      </a>
    </div>
  );
};

export default CatalogCard;
