import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface Props{
    hrefLink :string,
    downloadLink:string,
    text:string,
    target:string
}
const DownloadButton = (props:Props) => {
  const handleDownload = () => {
    // اینجا لینک فایل PDF یا هر چیزی که می‌خوای دانلود بشه بذار
    const link = document.createElement("a");
    link.href = props.hrefLink; 
    link.download = props.downloadLink;
    link.target=props.target;
    link.click();
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
  className="bg-gradient-to-r from-cyan-600 to-blue-900  !w-40 !h-10 !text-white rounded-xl px-6 py-3 !font-bold  !text-lg shadow-sm  transition-all duration-300"
    >
      {props.text}
    </Button>
  );
};

export default DownloadButton;
