import React, { FC } from "react";
import "./Loading.css";

interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
}

const LoadingModal = (props: LoadingModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className="loading-modal-overlay">
      <div className="loading-modal">
        <div className="spinner"></div>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default LoadingModal;
