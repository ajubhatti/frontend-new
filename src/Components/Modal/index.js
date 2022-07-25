import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { simplePlanData } from "../../Shared/MplanStaticResponse";
import { useState } from "react";

const CustomModal = ({ isModalShow, setModalClose }) => {
  const [planList, setPlanList] = useState({});

  useEffect(() => {
    setPlanList(simplePlanData);
  }, [simplePlanData]);

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
                <select className="form-select" required="">
                  <option value="">Select Your Operator</option>
                  <option>1st Operator</option>
                  <option>2nd Operator</option>
                  <option>3rd Operator</option>
                  <option>4th Operator</option>
                  <option>5th Operator</option>
                  <option>6th Operator</option>
                  <option>7th Operator</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <select className="form-select" required="">
                  <option value="">Select Your Circle</option>
                  <option>1st Circle</option>
                  <option>2nd Circle</option>
                  <option>3rd Circle</option>
                  <option>4th Circle</option>
                  <option>5th Circle</option>
                  <option>6th Circle</option>
                  <option>7th Circle</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <select className="form-select" required="">
                  <option value="">All Plans</option>
                  <option>Topup</option>
                  <option>Full Talktime</option>
                  <option>Validity Recharge</option>
                  <option>SMS</option>
                  <option>Data</option>
                  <option>Unlimited Talktime</option>
                  <option>STD</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 d-grid">
                <button className="btn btn-primary" type="submit">
                  View Plans
                </button>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div className="plans">
                {console.log("planList", planList)}
                {Object.keys(simplePlanData.records).map((plan) => {
                  console.log("plan", plan);
                  return (
                    <>
                      <div className="row align-items-center">
                        <div className="col-4 col-lg-2 text-5 text-primary text-center">
                          $10
                          <span className="text-1 text-muted d-block">
                            Amount
                          </span>
                        </div>
                        <div className="col-4 col-lg-2 text-3 text-center">
                          8
                          <span className="text-1 text-muted d-block">
                            Talktime
                          </span>
                        </div>
                        <div className="col-4 col-lg-2 text-3 text-center">
                          7 Days
                          <span className="text-1 text-muted d-block">
                            Validity
                          </span>
                        </div>
                        <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                          Talktime $8 &amp; 2 Local &amp; National SMS &amp;
                          Free SMS valid for 2 day(s)
                        </div>
                        <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                          <button
                            className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                            type="submit"
                          >
                            Recharge
                          </button>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </>
                  );
                })}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={setModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
