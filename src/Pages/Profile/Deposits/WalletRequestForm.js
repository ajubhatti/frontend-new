import React, { useEffect, useState } from "react";
import { Bank, CheckCircle, Wallet } from "react-bootstrap-icons";
import AccountListing from "./AccountListing";
import Confirmation from "./Confirmation";
import PaymentDetail from "./PaymentDetail";
import { getUser } from "../../../Helper/LocalStorage";
import { toast } from "react-toastify";
import PaymentDetail2 from "./PaymentDetail2";
import { useDispatch, useSelector } from "react-redux";
import { fetchBankList, walletBalanceUpdate } from "../store/actions";

const WalletRequestForm = (props) => {
  const dispatch = useDispatch();
  const { bankList } = useSelector((state) => state.profile);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    userId: "",
    requestAmount: null,
    slipNo: "",
    remark: "",
    creditAccount: 0,
    paymentType: "636503acf2c7df71df257a03",
  });

  const [apiCall, setApiCall] = useState(false);

  useEffect(() => {
    const getUserData = getUser();
    setValues((prevState) => ({
      ...prevState,
      userId: getUserData?.id,
    }));

    dispatch(fetchBankList());
  }, [dispatch]);

  const bankHandleChange = (id) => {
    setValues((prevState) => ({
      ...prevState,
      creditAccount: id,
    }));
  };

  const cancelHandler = () => {
    props.onHide();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const submitHandler = async () => {
  //   setApiCall(true);
  //   try {
  //     await props.addMoneyInWallet(values).then((res) => {
  //       props.onHide();
  //       toast.success(res.message);
  //     });
  //   } finally {
  //     setApiCall(false);
  //   }
  // };

  const submitHandler = async () => {
    setApiCall(true);
    console.log({ values });
    try {
      dispatch(walletBalanceUpdate(values));
      props.onHide();
    } finally {
      setApiCall(false);
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
        <div className="py-4">
          <PaymentDetail2
            nextStep={submitHandler}
            prevStep={cancelHandler}
            handleChange={handleChange}
            bankHandleChange={bankHandleChange}
            inputValues={values}
            list={bankList}
          />
        </div>
      </div>
    </div>
  );
};

export default WalletRequestForm;
