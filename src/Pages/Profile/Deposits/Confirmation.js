import React from "react";

const Confirmation = (props) => {
  const back = () => {
    props.prevStep();
  };

  const saveAndContinue = () => {
    props.nextStep();
  };

  return (
    <div>
      <div className="mb-4">
        <p>
          Thank you for your payment. Should you encounter any problems, please
          don't hesitate to contact our customer service for assistance.
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-primary transition-3d-hover mr-1"
          onClick={saveAndContinue}
          disabled={props.loading}
        >
          Request Payment
        </button>
        <button
          className="btn btn-soft-secondary transition-3d-hover mr-1"
          onClick={back}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
