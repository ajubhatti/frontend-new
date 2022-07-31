import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ConfirmModel = ({
  isModalShow,
  setModalClose,
  userSelectedPlan,
  mobileNo,
}) => {
  const [transactionPin, setTransactionPin] = useState("");

  return (
    <>
      <Modal
        show={isModalShow}
        onHide={setModalClose}
        size="xl"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Browse Plans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="row g-3 mb-4" method="post">
              <div className="col-12 col-sm-6 col-lg-3">
                mobile no : {mobileNo}
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
                  id="mobileNumber"
                  required=""
                  placeholder="Enter Mobile Number"
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
          <Button variant="primary" onClick={setModalClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModel;
