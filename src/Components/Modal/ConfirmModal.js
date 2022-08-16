import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ConfirmModal = ({
  isModalShow,
  setModalClose,
  userSelectedPlan,
  accountNo,
  handleConfirm,
  type,
}) => {
  const [transactionPin, setTransactionPin] = useState("");

  console.log("userSelectedPlan :>> ", userSelectedPlan);
  return (
    <>
      <Modal
        show={isModalShow}
        onHide={setModalClose}
        size="xl"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        {type === "mobile" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                <div className="col-12 col-sm-6 col-lg-3">
                  mobile no : {accountNo}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {userSelectedPlan.rs}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {userSelectedPlan.desc}
                </div>
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
        )}
        {type === "dth" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                <div className="col-12 col-sm-6 col-lg-3">
                  mobile no : {accountNo}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {userSelectedPlan.rs}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {userSelectedPlan.desc}
                </div>
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
        )}

        {type === "electricity" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                <div className="col-12 col-sm-6 col-lg-3">
                  Customer No. : {accountNo}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  Amount : {userSelectedPlan.rs}
                </div>

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
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={setModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
