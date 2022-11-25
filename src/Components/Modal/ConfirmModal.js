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
        {type === "mobile" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                <div className="col-12 col-sm-6 col-lg-3">
                  mobile no : {accountNo}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  Amount :{userSelectedPlan.rs}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  Description : {userSelectedPlan.desc}
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
                  Customer No. : {accountNo}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  Amount : {userSelectedPlan.rs}
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  Description : {userSelectedPlan.desc}
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

        {(type === "electricity" ||
          type === "broadband" ||
          type === "gasBill" ||
          type === "fastTag" ||
          type === "cableTv" ||
          type === "Water" ||
          type === "postpaid") && (
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

        {type === "broadband" && (
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
