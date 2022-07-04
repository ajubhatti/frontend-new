import React, { useState } from "react";
import RoundChart from "../../Components/Charts/RoundChart";
import FormModal from "./Deposits/FormModal";

const Deposits = (props) => {
  const [open, setOpen] = useState(false);

  const buttonHandler = () => {
    setOpen(true);
  };

  const modalHide = () => {
    setOpen(false);
  };
  return (
    <>
      {open && <FormModal show={open} onHide={modalHide} {...props} />}
      <div className="card mb-7 mb-lg-0">
        <div className="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Deposits</h6>
            <div className="position-relative"></div>
          </div>
          <hr className="mt-3 mb-4" />
          <div className="row mb-5">
            <div className="col-sm-6 mb-4 mb-sm-0">
              <span className="align-top">$</span>
              <span className="font-size-3 font-weight-medium text-lh-sm">
                50,102
              </span>
              <div className="mb-1">
                <span className="text-secondary font-size-1">Deposit:</span>
                <span className="font-weight-medium font-size-1">$1,050</span>
              </div>
            </div>
            <div className="col-sm-6 align-self-end">
              <RoundChart strokeWidth="4" sqSize="100" percentage={25} />
            </div>
          </div>
          <button
            className="btn btn-block btn-sm btn-primary transition-3d-hover"
            onClick={buttonHandler}
          >
            Add Funds
          </button>
        </div>
      </div>
    </>
  );
};

export default Deposits;
