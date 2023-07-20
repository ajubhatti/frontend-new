import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const DownloadApkButton = () => {
  const downloadFile = () => {
    if (window.location.hostname === "localhost") {
      window.location.href = "http://localhost:4000/files/BadiPAY.apk";
    } else {
      window.location.href = "https://api.badipay.co.in/files/BadiPAY.apk";
    }
  };
  return (
    <Button className="btn-primary btn-sm btn-custom" onClick={downloadFile}>
      Download
    </Button>
  );
};
export default DownloadApkButton;
