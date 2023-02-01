import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Invoice from "../../common/Invoice";
import { toPng } from "html-to-image";

const InvoiceModal = ({
  isInvoiceModal,
  setIsInvoiceModal,
  invoiceData,
  setInvoiceData,
}) => {
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
        console.log(err);
      });
  };

  return (
    <Modal isOpen={isInvoiceModal} size="lg">
      <ModalBody>
        <Invoice data={invoiceData} />
      </ModalBody>
      <ModalFooter>
        <Button className="btn" color="primary" onClick={onButtonClick}>
          Print
        </Button>

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
