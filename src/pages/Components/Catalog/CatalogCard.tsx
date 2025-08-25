import React from "react";
import { useTranslation } from "react-i18next";
import DownloadButton from "../Button/DownloadButton";


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
      {/* <p>{props.description}</p> */}


      <DownloadButton hrefLink={props.pdfUrl} downloadLink={props.pdfUrl} text={t("download.catalog")} />
    
    </div>
  );
};  

export default CatalogCard;