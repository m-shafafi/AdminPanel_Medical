import React from "react";
import { useTranslation } from "react-i18next";
import DownloadButton from "./Button/DownloadButton";

interface VideoPlayerProps {
  src: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props:VideoPlayerProps) => {
    const { t } = useTranslation();
  return (
    <div style={{ maxWidth: 800, margin: "30px auto", textAlign: "center" }}>
      {props.title && <h2 style={{ marginBottom: 20 }}>{props.title}</h2>}
      <video
        src={props.src}
        controls
        style={{ width: "100%", borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        preload="metadata"
      />
      <div style={{ marginTop: 15 }}>
  
                <DownloadButton target="_BLANK" hrefLink={props.src} downloadLink={props.src} text={t("download.video")} />

        
      </div>
    </div>
  );
};

export default VideoPlayer;
