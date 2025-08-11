import React from "react";
import { useTranslation } from "react-i18next";

interface Props{
    link:string;
}
const DownloadButton = (props: Props) => {
      const { t } = useTranslation();
    
  return (
    <a
      href={props.link} // مسیر فایل دانلود
      download
      className="download-btn"
    >
      📥 {t("download.catalog")}
    </a>
  );
};

export default DownloadButton;
