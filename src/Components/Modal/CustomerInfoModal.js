import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const CustomerInfoModal = ({
  isModalShow,
  setModalClose,
  customerInfo,
  type = "mobile",
}) => {
  return (
    <>
      <Modal
        show={isModalShow}
        onHide={setModalClose}
        size="xl"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Customer Info</Modal.Title>
        </Modal.Header>
        {type === "mobile" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                {customerInfo?.records?.map((x, index) => (
                  <React.Fragment key={index}>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Balance : {x.Balance}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Monthly Recharge : {x.MonthlyRecharge}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Next Recharge Date : {x.NextRechargeDate}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Customer Name : {x.customerName}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Last Recharge Amount : {x.lastrechargeamount}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Last Recharge Date :{x.lastrechargedate}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-grid">
                      Plan Name : {x.planname}
                    </div>
                  </React.Fragment>
                ))}
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        {type === "dth" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                {customerInfo?.records?.map((x, index) => (
                  <React.Fragment key={index}>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Balance : {x.Balance}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Monthly Recharge : {x.MonthlyRecharge}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Next Recharge Date : {x.NextRechargeDate}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Customer Name : {x.customerName}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Last Recharge Amount : {x.lastrechargeamount}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Last Recharge Date :{x.lastrechargedate}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-grid">
                      Plan Name : {x.planname}
                    </div>
                  </React.Fragment>
                ))}
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        {type === "electricity" && (
          <Modal.Body>
            <Form>
              <Form.Group className="row g-3 mb-4" method="post">
                {customerInfo?.records?.map((x, index) => (
                  <React.Fragment key={index}>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Customer Name : {x.CustomerName ? x.CustomerName : "N/A"}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Bill Amount : {x.Billamount ? x.Billamount : "N/A"}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Bill Date: {x.Billdate ? x.Billdate : "N/A"}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      Due Date : {x.Duedate ? x.Duedate : "N/A"}
                    </div>
                  </React.Fragment>
                ))}
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={setModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomerInfoModal;
