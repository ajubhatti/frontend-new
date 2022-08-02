import axios from "axios";
import React, { useEffect, useState } from "react";
import OfferSlider from "../../../Components/Carousel/OfferSlider";
import Form from "../../../Components/Form";
import { stateData } from "../../../Shared/constant";
import { rOfferData } from "../../../Shared/MplanStaticResponse";
import { DTHOperator } from "../Operators/DTHOperator";

const DTHService = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    operator: "",
    customerNo: "",
    amount: "",
    circle: "",
  });

  const [isPlanShow, setIsPlanShow] = useState(false);
  const [isRofferShow, setIsRofferShow] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [selectCircleValue, setSelectCircleValue] = useState("");

  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  // useEffect(() => {
  //   fetchPlan();
  // }, []);

  useEffect(() => {
    const getserviceProviderListing = async () => {
      await props.getServiceProviderByType({ type: "DTH" }).then((res) => {
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

    // fetchPlan(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (values.customerNo !== "" && values.amount !== "") {
      try {
        // await props.api Name(values).then((res) => {
        //   // Logic
        // });
      } finally {
        setApiCall(false);
      }
    }
  };

  const fetchPlan = async (value) => {
    // https://www.mplan.in/api/plans.php?apikey=[yourapikey]&offer=roffer&tel=[mobile]&operator=[operator](BSNL,Idea,given below)
    let url = `https://www.mplan.in/api/dthplans.php?apikey=ff7c4e87910a29fc6fa601dd4a8469b6&operator=${value}`;
    let url2 = `https://www.mplan.in/api/plans.php?apikey=ff7c4e87910a29fc6fa601dd4a8469b6&offer=roffer&tel=9033501636&operator=Jio`;

    console.log({ url2 });

    axios
      .get(url2)
      .then(function (response) {
        console.log(response);
        return rOfferData;
      })
      .catch(function (error) {
        console.log(error);
        return rOfferData;
      })
      .then(function () {});
  };

  return (
    <Form submitHandler={submitHandler}>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">DTH Recharge</h2>
        <div className="row">
          <div className="col-lg-5">
            <form
              id="recharge-bill"
              className="border rounded p-3"
              method="post"
            >
              <div className="row g-3">
                <div className=" col-lg-12">
                  <input
                    type="text"
                    className={
                      "form-control" +
                      (submitted && !values.customerNo ? " is-invalid" : "")
                    }
                    data-bv-field="number"
                    id="customerNumber"
                    required
                    placeholder="Enter Customer Number"
                    value={values.customerNo}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="customerNo"
                    onChange={(e) => {
                      console.log(e.target);
                      handlerChange(e);
                    }}
                  />
                  {submitted && !values.customerNo && (
                    <div className="invalid-feedback">
                      Enter your 11-digits Smart Card Number
                    </div>
                  )}
                </div>

                <div className=" col-lg-12">
                  <select
                    className="form-select"
                    id="operator"
                    required
                    onChange={handlerChange}
                    value={values.operator}
                    name="operator"
                  >
                    <option value="">Select Your Operator</option>
                    {listingData.map((x) => (
                      <option value={x.serviceProvider} key={x._id}>
                        {x.serviceProvider}
                      </option>
                    ))}

                    {/* {DTHOperator.length > 0 &&
                      DTHOperator.map((operator, index) => {
                        return (
                          <option value={operator.key} key={index}>
                            {operator.value}
                          </option>
                        );
                      })} */}
                  </select>
                </div>

                <div className="col-lg-12">
                  <select
                    className="form-select"
                    required=""
                    id="circle"
                    // value={selectCircleValue}
                    value={values.circle}
                    name="circle"
                    onChange={handlerChange}
                  >
                    <option value="" disabled>
                      Select Your Circle
                    </option>
                    {stateData.map((x) => (
                      <option value={x.name}>{x.name}</option>
                    ))}
                  </select>
                </div>
                <div className=" col-lg-12">
                  <div className="position-relative">
                    <input
                      className={
                        "form-control" +
                        (submitted && !values.amount ? " is-invalid" : "")
                      }
                      id="amount"
                      placeholder="Enter Amount"
                      required
                      type="number"
                      name="amount"
                      value={values.amount}
                      onChange={handlerChange}
                    />
                  </div>
                  {submitted && !values.amount && (
                    <div className="invalid-feedback">Amount is required</div>
                  )}
                </div>

                {values.operator !== "" && (
                  <div className="col-lg-12">
                    <a
                      href="#"
                      className="ml-2 mr-2"
                      onClick={() => setIsRofferShow(true)}
                    >
                      Roffer
                    </a>
                    <a
                      href="#"
                      className="ml-2 mr-2"
                      onClick={() => setIsPlanShow(true)}
                    >
                      View Plans
                    </a>
                  </div>
                )}
                <div className="col-lg-12">
                  {" "}
                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    onClick={() => setIsConfirmShow(true)}
                  >
                    Continue
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-7">
            <OfferSlider />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default DTHService;
