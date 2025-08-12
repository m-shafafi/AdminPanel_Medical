import React, { FC } from "react";
import "./Loading.css";

interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
}

const LoadingModal: FC<LoadingModalProps> = ({ isOpen, message = "Loading..." }) => {
  if (!isOpen) return null;

  return (
    <div className="loading-modal-overlay">
      <div className="loading-modal">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoadingModal;
