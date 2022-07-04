import React from "react";

const PaymentDetail = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const { inputValues, handleChange } = props;
  return (
    <>
      <div className="row">
        <div className="col-sm-6 mb-4">
          <label className="form-label">Amount</label>
          <div className="js-form-message u-has-success">
            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                name="requestAmount"
                value={inputValues.requestAmount}
                onChange={handleChange}
                placeholder="00000"
                required
                data-msg="Please enter a valid name."
                data-error-className="u-has-error"
                data-success-className="u-has-success"
                aria-invalid
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label">Transaction No</label>
          <div className="js-form-message u-has-success">
            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                name="slipNo"
                value={inputValues.slipNo}
                onChange={handleChange}
                placeholder=""
                required
                data-msg="Please enter a valid name."
                data-error-className="u-has-error"
                data-success-className="u-has-success"
                aria-invalid
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mb-4">
          <label className="form-label">Type</label>
          <select
            className="custom-select custom-select-sm"
            name="paymentType"
            onChange={handleChange}
            aria-invalid
          >
            <option value="1">NEFT (National Electronic Fund Transfer)</option>
            <option value="2">RTGS (Real Time Gross Settlement)</option>
            <option value="3">IMPS (Immediate Payment Service)</option>
            <option value="4">UPI (Unified Payments Interface)</option>
            <option value="5">Cheque</option>
            <option value="6">Cash</option>
            <option value="7">Credit</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Remark</label>
        <div className="js-form-message">
          <div className="input-group input-group-sm">
            <textarea
              className="form-control"
              rows="2"
              name="remark"
              value={inputValues.remark}
              onChange={handleChange}
              placeholder="Your payer will see this description on the payment request"
              required
              data-msg="Please enter a valid reason."
              data-error-className="u-has-error"
              data-success-className="u-has-success"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary transition-3d-hover mr-1"
          onClick={saveAndContinue}
        >
          Next
        </button>
        <button
          type="button"
          className="btn btn-soft-secondary transition-3d-hover mr-1"
          onClick={back}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default PaymentDetail;
