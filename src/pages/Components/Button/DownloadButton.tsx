import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface Props{
    hrefLink :string,
    downloadLink:string,
    text:string
}
const DownloadButton = (props:Props) => {
  const handleDownload = () => {
    // اینجا لینک فایل PDF یا هر چیزی که می‌خوای دانلود بشه بذار
    const link = document.createElement("a");
    link.href = props.hrefLink; 
    link.download = props.downloadLink;
    link.click();
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      startIcon={<DownloadIcon />}
      className="!bg-gradient-to-r !from-indigo-500 !to-purple-500 hover:!from-indigo-600 hover:!to-purple-600 text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md transition-all duration-300"
    >
      {props.text}
    </Button>
  );
};

export default DownloadButton;
