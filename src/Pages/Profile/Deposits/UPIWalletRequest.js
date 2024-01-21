import React, { useEffect, useRef, useState } from "react";
import { Bank, CheckCircle, Wallet } from "react-bootstrap-icons";
import PaymentDetail from "./PaymentDetail";
import { getUser } from "../../../Helper/LocalStorage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchBankList, walletBalanceUpdate } from "../store/actions";
import { fetchType } from "../store/actions";
import axios from "axios";
import { wallet } from "../../../Helper/fetch_helper/apiList";
import { axiosApi } from "../../../Helper/api_helper";
import QRCode from "react-qr-code";

const API_URL = process.env.REACT_APP_FETCH_URL;

const UPIWalletRequest = (props) => {
  const canvasRef = useRef();
  const [values, setValues] = useState({
    amount: "",
  });

  const [paymentURL, setPaymentURL] = useState("");
  const [loading, setLoading] = useState(false);

  const createUpiOrder = async () => {
    setLoading(true);
    let payload = {
      amount: values.amount,
    };
    console.log({ payload });
    const res = await axiosApi.post(
      API_URL + wallet.addByPaymentGateway.url,
      payload
    );
    if (res.data.status === 200 && res.data.data.status === true) {
      setPaymentURL(res.data.data.data.payment_url);
      window.location.replace(res.data.data.data.payment_url);
    }
    setLoading(false);
    console.log({ res });
  };

  const cancelHandler = () => {
    props.onHide();
  };

  const submitHandler = async () => {
    createUpiOrder();
    props.onHide();
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
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-sm-6 mb-4">
                <label className="form-label">Amount</label>
                <div className="js-form-message u-has-success d-flex">
                  <div className="input-group input-group-sm">
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      value={values.amount}
                      onChange={(e) =>
                        setValues({ ...values, amount: e.target.value })
                      }
                      placeholder="0"
                    />
                  </div>
                  {/* <div>
                    <button
                      type="button"
                      className="btn btn-primary transition-3d-hover ml-3"
                      onClick={createUpiOrder}
                    >
                      Add
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                disabled={loading}
                type="button"
                className="btn btn-primary transition-3d-hover mr-1"
                onClick={createUpiOrder}
              >
                Submit
              </button>
              <button
                disabled={loading}
                type="button"
                className="btn btn-soft-secondary transition-3d-hover mr-1"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UPIWalletRequest;
