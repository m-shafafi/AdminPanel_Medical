import React from "react";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface CatalogCardProps {
  pdfUrl: string;
coverPdfUrl: string;
  title: string;
  description: string;
}

const CatalogCard = (props:CatalogCardProps) => {
    const { t } = useTranslation();
  return (
    <div className="catalog-card" style={{ border: "1px solid #ccc", padding: 10, borderRadius: 8 }}>
     <img src={props.coverPdfUrl} className="h-48 w-96 object-fill " style={{ width: "100%", height: "20rem" }}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.pdfUrl} target="_blank" rel="noopener noreferrer">
      {t("actions.viewPDF")}
      </a>
    </div>
  );
};

export default CatalogCard;
