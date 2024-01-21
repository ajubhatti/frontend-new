import React from "react";
import { Modal } from "react-bootstrap";
import UPIWalletRequest from "./UPIWalletRequest";
import WalletRequestForm from "./WalletRequestForm";

const UPIPaymentModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <UPIWalletRequest {...props} />
    </Modal>
  );
};

export default UPIPaymentModal;
