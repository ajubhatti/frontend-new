import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({
  isModalShow,
  setModalClose,
  userSelectedPlan,
  accountNo,
  handleConfirm,
  type,
  transactionPin,
  setTransactionPin,
}) => {
  const handleSubmit = () => {
    if (!transactionPin) {
      toast.error("please enter transaction pin");
      return;
    }
    handleConfirm();
  };

  return (
    <>
      <Modal
        show={isModalShow}
        onHide={setModalClose}
        centered
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="row g-3 mb-4" method="post">
              <div className="col-12 col-sm-6 col-lg-3">
                {type === "mobile" ? "Mobile No." : "Customer No."} :{" "}
                {accountNo}
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                Amount : {userSelectedPlan.rs}
              </div>
              {(type === "dth" || type === "mobile") && (
                <div className="col-12 col-sm-6 col-lg-3">
                  Description : {userSelectedPlan.desc}
                </div>
              )}

              <div className="col-12 col-sm-6 col-lg-3 d-grid">
                <input
                  type="text"
                  className="form-control"
                  data-bv-field="number"
                  id="transaction pin"
                  required=""
                  placeholder="Enter transaction pin"
                  value={transactionPin}
                  onChange={(e) => {
                    setTransactionPin(e.target.value);
                  }}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={setModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
