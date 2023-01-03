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
      {/* <div className="card mb-7 mb-lg-0">
        <div className="card-header p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 font-bold">Deposits</h5>
            <div className="position-relative"></div>
          </div>
        </div> */}
        {/* <div className="card-body pt-5 pb-4 px-4 mb-3 mb-md-0">
          <hr className="mt-3 mb-4" />
          <div className="row mb-5">
            <div className="col-sm-12 mb-4 mb-sm-0">
              <h3 className="align-top mb-2">$ 50,102</h3>
              <p className="text-secondary font-size-1 mb-0">Deposit: $1,050</p>
            </div>
            <div className="col-md-12">
              <div className="deposits-chart">
                <RoundChart strokeWidth="22" sqSize="250" percentage={25} />
              </div>
            </div>
          </div>
          <button
            className="btn btn-block btn-sm btn-primary transition-3d-hover"
            onClick={buttonHandler}
          >
            Add Funds
          </button>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Deposits;
