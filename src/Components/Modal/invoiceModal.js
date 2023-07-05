import React, { useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Invoice from "../../common/Invoice";
import { toPng } from "html-to-image";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
} from "react-component-export-image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import InvoiceShare from "../SocialShare/InvoiceShare";

const InvoiceModal = ({
  isInvoiceModal,
  setIsInvoiceModal,
  invoiceData,
  setInvoiceData,
}) => {
  const invoiceRef = useRef();

  const onButtonClick = async () => {
    let temp = document.getElementById("invoice_card");
    toPng(temp, { cacheBust: true })
      .then(async (dataUrl) => {
        const link = document.createElement("a");
        link.download = `${new Date()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    let temp = document.getElementById("invoice_card");
    doc.html(temp, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  const printDocument = () => {
    const pdf = new jsPDF({
      format: "a4",
      unit: "px",
    });

    pdf.setFont("Inter-Regular", "normal");
    const input = document.getElementById("invoice_card");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const imageDownload = () => {
    toPng(document.getElementById("invoice_card")).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      const pdf = new jsPDF();
      pdf.addImage(dataUrl, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const pdfDownload = () => {
    toPng(document.getElementById("invoice_card")).then(function (dataUrl) {
      let unixTime = Math.floor(new Date().getTime() / 1000);
      var link = document.createElement("a");
      link.download = `${unixTime}.jpeg`;
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${unixTime}.pdf`);
    });
  };

  return (
    <Modal isOpen={isInvoiceModal} size="lg">
      <ModalBody>
        <Invoice data={invoiceData} ref={invoiceRef} />
      </ModalBody>
      <ModalFooter>
        {/* <Button className="btn" color="primary" onClick={onButtonClick}>
          Print
        </Button> */}
        {/* <Button onClick={() => exportComponentAsJPEG(invoiceRef)}>
          Export As Image
        </Button>
        <Button onClick={() => exportComponentAsPDF(invoiceRef)}>
          Export As PDF
        </Button> */}

        {/* <Button onClick={imageDownload}>image</Button> */}

        <Button onClick={pdfDownload}>Download</Button>

        {/* <Button onClick={() => printDocument()}>printDocument As PDF</Button>

        <Button onClick={() => handleGeneratePdf()}>
          handleGeneratePdf As PDF
        </Button> */}

        {/* <InvoiceShare allowButtons={1} /> */}

        <Button
          className="btn"
          color="danger"
          onClick={() => {
            setIsInvoiceModal(false);
            setInvoiceData(null);
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InvoiceModal;
