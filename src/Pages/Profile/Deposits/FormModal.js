import React from "react";
import { Modal } from "react-bootstrap";
import WalletRequestForm from "./WalletRequestForm";

const FormModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <WalletRequestForm {...props} />
    </Modal>
  );
};

export default FormModal;
