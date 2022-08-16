import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { simplePlanData, rOfferData } from "../../Shared/MplanStaticResponse";
import { useState } from "react";
import { stateData } from "../../Shared/constant";

const DthOfferModal = ({
  isModalShow,
  setModalClose,
  isShowHeader,
  planType,
  selectCircle,
  selectedPlan,
}) => {
  const [planList, setPlanList] = useState(simplePlanData);
  const [selectCircleValue, setSelectCircleValue] = useState(selectCircle);
  const [selectPlanValue, setSelectPlanValue] = useState("");

  useEffect(() => {
    setPlanList(simplePlanData);
  }, []);

  const handlePlanChange = (e) => {
    setSelectPlanValue(e.target.value);
  };

  const handleCircleChange = (e) => {
    setSelectCircleValue(e);
  };

  const getRofferTable = (plan, index) => (
    <React.Fragment key={plan.rs + index}>
      <div className="row align-items-center">
        <div className="col-4 col-lg-2 text-5 text-primary text-center">
          {plan.rs}
          <span className="text-1 text-muted d-block">Amount</span>
        </div>
        <div className="col-7 col-lg-7 my-2 my-lg-0 text-1 text-muted">
          {plan.desc}
        </div>
        <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
          <button
            className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
            type="button"
            onClick={() => {
              handleSelectPlan(plan);
            }}
          >
            Recharge
          </button>
        </div>
      </div>
      <hr className="my-4" />
    </React.Fragment>
  );

  const getAllPlanTable = (x, index) => (
    <React.Fragment key={x.rs + index}>
      <div className="row align-items-center">
        <div className="col-4 col-lg-2 text-5 text-primary text-center">
          {x.rs}
          <span className="text-1 text-muted d-block">Amount</span>
        </div>

        <div className="col-4 col-lg-2 text-3 text-center">
          {x.validity}
          <span className="text-1 text-muted d-block">Validity</span>
        </div>
        <div className="col-7 col-lg-5 my-2 my-lg-0 text-1 text-muted">
          {x.desc}
        </div>
        <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
          <button
            className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
            type="button"
            onClick={() => {
              handleSelectPlan(x);
            }}
          >
            Recharge
          </button>
        </div>
      </div>
      <hr className="my-4" />
    </React.Fragment>
  );

  const handleSelectPlan = (data) => {
    selectedPlan(data);
    setModalClose();
  };

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
            {isShowHeader && (
              <Form.Group className="row g-3 mb-4" method="post">
                {/* ----------------------- circle selction ---------------------- */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <select
                    className="form-select"
                    required=""
                    value={selectCircleValue}
                    onChange={handleCircleChange}
                  >
                    <option value="" disabled>
                      Select Your Circle
                    </option>
                    {stateData.map((x) => (
                      <option>{x.name}</option>
                    ))}
                  </select>
                </div>

                {/* ----------------------- plan selection ---------------------- */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <select
                    className="form-select"
                    required=""
                    value={selectPlanValue}
                    onChange={handlePlanChange}
                  >
                    <option value="">ALL PLAN</option>
                    {Object.keys(planList.records).map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </select>
                </div>
              </Form.Group>
            )}

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div className="plans">
                {planType === "roffer"
                  ? rOfferData.records.map((plan, index) =>
                      getRofferTable(plan, index)
                    )
                  : Object.keys(simplePlanData?.records).map((plan) =>
                      selectPlanValue === ""
                        ? simplePlanData?.records[plan].map((x, index) =>
                            getAllPlanTable(x, index)
                          )
                        : simplePlanData?.records[selectPlanValue].map(
                            (x, index) => getAllPlanTable(x, index)
                          )
                    )}
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

export default DthOfferModal;
