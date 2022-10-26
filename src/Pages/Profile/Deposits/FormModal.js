import React from "react";
import { Modal } from "react-bootstrap";
import MultiStepForm from "./MultiStepForm";
import WalletRequestForm from "./WalletRequestForm";

const FormModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <MultiStepForm {...props} />
      {/* <WalletRequestForm {...props} /> */}
    </Modal>
  );
};

export default FormModal;
