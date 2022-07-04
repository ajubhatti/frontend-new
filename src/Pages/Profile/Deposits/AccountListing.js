import React from "react";

const AccountListing = (props) => {

  const saveAndContinue = () => {
    props.nextStep();
  };

  const addBankDetail = (id) => {
    props.handleChange(id);
    saveAndContinue();
  }
  return (
    <>
      <div className="mb-4">
        {props.list.length > 0 &&
          props.list.map((bank, index) => {
            return (
              <div
                className="card card-frame mb-2 pointer"
                key={index}
                onClick={() => addBankDetail(bank.bankId)}
              >
                <div className="card-body align-items-sm-center p-2">
                  <div className="media align-items-center">
                    <div className="u-avatar mr-3">
                      <div className="btn btn-icon btn-soft-success rounded-circle mr-3">
                        <span className="btn-icon__inner">
                          {bank.bankName.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4 className="h6 mb-0">{bank.bankName}</h4>
                      <small className="d-block text-secondary">
                        {bank.ifscCode}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary transition-3d-hover mr-1"
          onClick={saveAndContinue}
          disabled={!props.inputValues.creditAccount}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AccountListing;
