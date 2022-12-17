import React, { useEffect, useState } from "react";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Helper/fetch_helper/apiList";
import axios from "axios";

const ResetTransactionPin = ({ phoneNumber }) => {
  const API_URL = process.env.REACT_APP_FETCH_URL;
  const location = useLocation();
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    mobileNo: "",
    transactionPin: "",
    confirmTransactionPin: "",
  });

  useEffect(() => {
    setValues((prevState) => ({
      ...prevState,
      mobileNo: phoneNumber,
    }));
  }, [phoneNumber]);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (values.transactionPin !== "" && values.confirmTransactionPin !== "") {
      try {
        const payload = {
          phoneNumber: values.mobileNo,
          transactionPin: values.transactionPin,
        };

        let res = await axios.post(
          API_URL + auth.resetTransactionPin.url,
          payload
        );
        if (res?.data?.status == 200) {
          toast.success(res?.data?.message);
        }
        setApiCall(false);
      } catch (err) {
        toast.error(err);
        setApiCall(false);
      }
    }
  };
  return (
    <Form name="reset-password-form">
      <div className="form-group">
        <label className="form-label">Transaction Pin</label>
        <input
          type="password"
          placeholder="Transaction Pin"
          required=""
          name="transactionPin"
          value={values.transactionPin}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.transactionPin ? " is-invalid" : "")
          }
        />
        {submitted && !values.transactionPin && (
          <div className="invalid-feedback">Transaction Pin is required</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Confirm Transaction Pin</label>
        <input
          type="password"
          placeholder="Confirm Transaction Pin"
          required=""
          name="confirmTransactionPin"
          value={values.confirmTransactionPin}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && values.transactionPin != values.confirmTransactionPin
              ? " is-invalid"
              : "")
          }
        />
        {submitted && values.transactionPin != values.confirmTransactionPin && (
          <div className="invalid-feedback">
            Confirm Transaction Pin is required
          </div>
        )}
      </div>
      <button
        type="button"
        className="btn btn-primary transition-3d-hover"
        onClick={(e) => submitHandler(e)}
        disabled={apiCall}
      >
        Get Started
      </button>
    </Form>
  );
};

export default ResetTransactionPin;
