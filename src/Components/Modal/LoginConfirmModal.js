import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import routes from "../../Helper/routes";

const LoginConfirmModal = ({ isModalShow, setModalClose }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(routes.login);
  };

  return (
    <>
      <Modal
        show={isModalShow}
        onHide={setModalClose}
        size="l"
        aria-labelledby="example-modal-sizes-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Please login...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="row g-3 mb-4">
              <div className="col-12 ">
                <h6>You are not able to proceed!</h6>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginConfirmModal;
