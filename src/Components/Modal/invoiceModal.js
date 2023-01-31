import React from 'react'
import { Button, Modal,ModalBody,ModalFooter } from 'reactstrap';
import Invoice from '../../common/Invoice';

const InvoiceModal = ({
  isInvoiceModal,
  setIsInvoiceModal,
  invoiceData,
  setInvoiceData,
}) => {
  return (
    <Modal isOpen={isInvoiceModal} size="lg">
      <ModalBody>
        <Invoice data={invoiceData} />
      </ModalBody>
      <ModalFooter>
        <Button className="btn" color="primary">
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

export default InvoiceModal