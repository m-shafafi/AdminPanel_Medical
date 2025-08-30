import React from "react";
import { useTranslation } from "react-i18next";
import DownloadButton from "../Button/DownloadButton";

interface CatalogCardProps {
  pdfUrl: string;
  coverPdfUrl: string;
  title: string;
  description: string;
}

const CatalogCard = (props: CatalogCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="catalog-card flex flex-col items-center bg-white rounded-lg shadow-md p-4"
      style={{ border: "1px solid #ccc" }}
    >
      {/* تصویر */}
      <img
        src={props.coverPdfUrl}
        alt={props.title}
        className="object-cover rounded-md mb-4"
        style={{ width: "100%"}}
      />

      {/* عنوان */}
      <h3 className="text-lg font-semibold mb-2 text-center">{props.title}</h3>

      {/* توضیح (اختیاری) */}
      {/* <p className="text-sm text-gray-600 text-center mb-4">{props.description}</p> */}

      {/* دکمه دانلود بیرون از کادر تصویر، وسط هر کارت */}
      <div className="w-full flex justify-center mt-2">
        <DownloadButton
          target="_blank"
          hrefLink={props.pdfUrl}
          downloadLink={props.pdfUrl}
          text={t("download.catalog")}
        />
      </div>
    </div>
  );
};

export default CatalogCard;
