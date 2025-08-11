import React from "react";
import "./Loading.css"; // Import the CSS file

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <span className="loading-text">{message}</span>
    </div>
  );
};

export default Loading;
