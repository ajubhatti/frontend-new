import React, { useEffect, useState } from "react";
import { Bank, CheckCircle, Wallet } from "react-bootstrap-icons";
import AccountListing from "./AccountListing";
import Confirmation from "./Confirmation";
import PaymentDetail from "./PaymentDetail";
import { getUser } from "../../../Helper/LocalStorage";
import { toast } from "react-toastify";

const MultiStepForm = (props) => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    userId: "",
    requestAmount: 0,
    slipNo: "",
    remark: "",
    creditAccount: 0,
    paymentType: 1,
  });
  const [adminBankList, setAdminBankList] = useState([]);
  const [apiCall, setApiCall] = useState(false);

  useEffect(() => {
    const getUserData = getUser();
    setValues((prevState) => ({
      ...prevState,
      userId: getUserData.id,
    }));

    const getAdminBankingList = async () => {
      await props.getAdminBankList().then((res) => {
        setAdminBankList(res);
      });
    };

    getAdminBankingList();
  }, [props]);

  const nextStep = () => {
    setStep((prevCount) => prevCount + 1);
  };

  const prevStep = () => {
    setStep((prevCount) => prevCount - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const bankHandleChange = (id) => {
    setValues((prevState) => ({
      ...prevState,
      creditAccount: id,
    }));
  };

  const submitHandler = async () => {
    setApiCall(true);
    try {
      await props.addMoneyInWallet(values).then((res) => {
        props.onHide();
        toast.success(res.message);
      });
    } finally {
      setApiCall(false);
    }
  };

  const stepRanders = () => {
    switch (step) {
      case 1:
        return (
          <AccountListing
            nextStep={nextStep}
            handleChange={bankHandleChange}
            inputValues={values}
            list={adminBankList}
          />
        );
      case 2:
        return (
          <PaymentDetail
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            inputValues={values}
          />
        );
      default:
        return (
          <Confirmation
            nextStep={submitHandler}
            prevStep={prevStep}
            inputValues={values}
            loading={apiCall}
          />
        );
    }
  };

  return (
    <div className="card">
      <header className="card-header bg-light py-3 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="h6 mb-0">Request a payment</h3>
        </div>
      </header>
      <div className="card-body bg-white">
        <nav className="js-step-progress nav nav-icon nav-justified text-center py-4">
          <a
            href="javascript:;"
            className={`nav-item ${step === 1 ? "active" : ""}`}
          >
            <span className="nav-icon-action d-flex justify-content-center align-items-center">
              <Bank />
            </span>
            <span className="d-none d-sm-block">Select payer</span>
          </a>
          <a
            href="javascript:;"
            className={`nav-item ${step === 2 ? "active" : ""}`}
          >
            <span className="nav-icon-action d-flex justify-content-center align-items-center">
              <Wallet />
            </span>
            <span className="d-none d-sm-block">Payment Details</span>
          </a>
          <a
            href="javascript:;"
            className={`nav-item ${step === 3 ? "active" : ""}`}
          >
            <span className="nav-icon-action d-flex justify-content-center align-items-center">
              <CheckCircle />
            </span>
            <span className="d-none d-sm-block">Confirmation</span>
          </a>
        </nav>
        <div className="py-4">{stepRanders()}</div>
      </div>
    </div>
  );
};

export default MultiStepForm;
