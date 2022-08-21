import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OfferSlider from "../../../Components/Carousel/OfferSlider";
import ConfirmModal from "../../../Components/Modal/ConfirmModal";
import { stateData } from "../../../Shared/constant";

const BroadbandService = (props) => {
  const [listingData, setListingData] = useState([]);
  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState({
    operator: "0",
    customerNo: "",
    amount: "",
    circle: "0",
    rechargeData: {},
  });

  useEffect(() => {
    setMySelectedPlan({
      rs: values.amount,
    });
  }, [values.amount]);

  useEffect(() => {
    if (listingData.length !== 0 && values.operator !== 0) {
      let operator = listingData.find((x) => x._id === values.operator);
      setSelectedOperator(operator);
    }
  }, [listingData, values.operator]);

  useEffect(() => {
    const getserviceProviderListing = async () => {
      await props
        .getServiceProviderByType({ type: "Broadband" })
        .then((res) => {
          setListingData(res.data);
        });
    };
    getserviceProviderListing();
  }, [props]);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirm = () => {
    setIsConfirmShow(false);
    doRecharge();
  };

  const doRecharge = async () => {
    let payload = {
      amount: values.amount,
      operatorCode: selectedOperator.SPKey,
      areaPincode: 395002,
      regMobileNumber: values.customerNo,
      longitude: props?.coords?.longitude
        ? props?.coords?.longitude
        : 72.8399872,
      latitude: props?.coords?.latitude ? props?.coords?.latitude : 21.1910656,
      optional1: "",
      optional2: "",
      optional3: "",
      optional4: "",
    };
    console.log({ payload });

    try {
      await props.ambikaRechargeApi(payload).then((res) => {
        console.log("res.data", res);
        toast.success("Successfully charged");
      });
    } catch (error) {
      console.log("res.error", error);
      toast.error("Error: " + error);
    }
  };

  const handleContinue = () => {
    setSubmitted(true);
    if (
      values.operator !== "0" &&
      values.customerNo !== "" &&
      values.amount !== "" &&
      values.circle !== "0"
    ) {
      setIsConfirmShow(true);
    } else {
      console.log("else part");
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">Broadband Recharge</h2>
        <div className="row">
          <div className="col-lg-5 userPlan">
            <form
              id="recharge-bill"
              className="border rounded p-3"
              method="post"
            >
              <div className="row g-3">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className={
                      "form-control" +
                      ((submitted && !values.customerNo) ||
                      (isChecked && !values.customerNo)
                        ? " is-invalid"
                        : "")
                    }
                    data-bv-field="number"
                    id="customerNumber"
                    required
                    placeholder="Enter Customer Number"
                    value={values.customerNo}
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="customerNo"
                    onChange={handlerChange}
                  />
                  {((submitted && !values.customerNo) ||
                    (isChecked && !values.customerNo)) && (
                    <div className="invalid-feedback">
                      Enter Your Customer Number
                    </div>
                  )}
                </div>
                <div className="col-lg-12">
                  <select
                    className={
                      "form-control" +
                      ((submitted && values.operator === "0") ||
                      (isChecked && values.operator === "0")
                        ? " is-invalid"
                        : "")
                    }
                    id="operator"
                    required
                    value={values.operator}
                    onChange={handlerChange}
                    name="operator"
                  >
                    <option value="0">Select Your Operator</option>
                    {listingData.map((x) => (
                      <option value={x._id} key={x._id}>
                        {x.serviceProvider}
                      </option>
                    ))}
                  </select>
                  {((submitted && values.operator === "0") ||
                    (isChecked && values.operator === "0")) && (
                    <div className="invalid-feedback">
                      Please Select Operator
                    </div>
                  )}
                </div>

                <div className="col-lg-12">
                  <select
                    className={
                      "form-control" +
                      ((submitted && values.circle === "0") ||
                      (isChecked && values.circle === "0")
                        ? " is-invalid"
                        : "")
                    }
                    id="circle"
                    required
                    value={values.circle}
                    name="circle"
                    onChange={handlerChange}
                  >
                    <option value="0" disabled>
                      Select Your Circle
                    </option>
                    {stateData.map((x) => (
                      <option value={x.key} key={x.key}>
                        {x.name}
                      </option>
                    ))}
                  </select>
                  {((submitted && values.circle === "0") ||
                    (isChecked && values.circle === "0")) && (
                    <div className="invalid-feedback">Please Select Circle</div>
                  )}
                </div>

                <div className="col-lg-12">
                  <input
                    className={
                      "form-control" +
                      (submitted && !values.amount ? " is-invalid" : "")
                    }
                    id="amount"
                    placeholder="Enter Amount"
                    required
                    type="text"
                    name="amount"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    value={values.amount}
                    onChange={handlerChange}
                  />
                  {submitted && !values.amount && (
                    <div className="invalid-feedback">Amount is required</div>
                  )}
                </div>

                <div className="col-lg-12">
                  {" "}
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    onClick={() => {
                      handleContinue();
                    }}
                  >
                    Continue
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-7 user-offer-slide">
            <OfferSlider />
          </div>
        </div>
        <ConfirmModal
          isModalShow={isConfirmShow}
          setModalClose={() => setIsConfirmShow(false)}
          userSelectedPlan={mySelectedPlan}
          accountNo={values.customerNo}
          handleConfirm={handleConfirm}
          type={"broadband"}
        />
      </div>
    </>
  );
};

export default BroadbandService;
