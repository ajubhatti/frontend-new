import React, { useEffect, useState } from "react";
import MobileOfferModel from "../../../Components/Modal/MobileOfferModel";
import { stateData } from "../../../Shared/constant";
import ConfirmModel from "../../../Components/Modal/ConfirmModel";
import OfferSlider from "../../../Components/Carousel/OfferSlider";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

const MobileService = (props) => {
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [isRofferShow, setIsRofferShow] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [selectCircleValue, setSelectCircleValue] = useState("");

  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    operator: "",
    mobileNo: "",
    amount: "",
    circle: "",
  });

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    const getserviceProviderListing = async () => {
      await props.getServiceProviderByType({ type: "Prepaid" }).then((res) => {
        setListingData(res.data);
      });
    };
    getserviceProviderListing();
  }, [props]);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSelectPlan = (data) => {
    setIsConfirmShow(true);
    setMySelectedPlan({
      desc: data.desc,
      rs: data.rs,
    });
  };

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // fetchPlan(value);
  };

  const handleConfirm = () => {
    setIsConfirmShow(false);
    let userID = 16900;
    let token = "759f6d09ef62ec7c86da53e986151519";
    let consumerNo = "7227062486";
    let amount = values.amount;
    let operatorCode = 116;
    let uniqueRefNo = "abcd";
    let areaPincode = 395002;
    let regMobileNumber = values.mobileNo;
    let longitude = 72.8399;
    let latitude = 21.1877;
    let format = 1;
    let optional1 = "";
    let optional2 = "";
    let optional3 = "";
    let optional4 = "";
    let ambikaUrl = `http://api.ambikamultiservices.com/API/TransactionAPI?UserID=${userID}&Token=${token}&Account=${consumerNo}&Amount=${amount}&SPKey=${operatorCode}&APIRequestID=${uniqueRefNo}&Optional1=${optional1}&Optional2=${optional2}&Optional3=${optional3}&Optional4=${optional4}&GEOCode=${longitude},${latitude}&CustomerNumber=${regMobileNumber}&Pincode=${areaPincode}&Format=${format}`;

    console.log({ ambikaUrl });
    axios
      .get(ambikaUrl)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">Mobile Recharge</h2>
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
                      (submitted && !values.mobileNo ? " is-invalid" : "")
                    }
                    data-bv-field="number"
                    id="mobileNo"
                    required
                    placeholder="Enter Mobile Number"
                    value={values.mobileNo}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="mobileNo"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                  {submitted && !values.mobileNo && (
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
                    value={values.operator}
                    onChange={handlerChange}
                    name="operator"
                  >
                    <option value="">Select Your Operator</option>
                    {listingData.map((x) => (
                      <option value={x.serviceProvider} key={x._id}>
                        {x.serviceProvider}
                      </option>
                    ))}
                  </select>
                </div>

                <div className=" col-lg-12">
                  <select
                    className="form-select"
                    id="circle"
                    required
                    value={values.circle}
                    name="circle"
                    onChange={handlerChange}
                  >
                    <option value="" disabled>
                      Select Your Circle
                    </option>
                    {stateData.map((x) => (
                      <option value={x.name} key={x.name}>
                        {x.name}
                      </option>
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
                    type="button"
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

      {isRofferShow && (
        <MobileOfferModel
          planType="roofer"
          isModalShow={isRofferShow}
          setModalClose={() => setIsRofferShow(false)}
          modalType="ourPlan"
          isShowHeader={false}
          selectedPlan={handleSelectPlan}
        />
      )}
      {isPlanShow && (
        <MobileOfferModel
          planType="allPlan"
          isModalShow={isPlanShow}
          setModalClose={() => setIsPlanShow(false)}
          modalType="viewPlan"
          isShowHeader={true}
          selectCircle={selectCircleValue}
          selectedPlan={handleSelectPlan}
        />
      )}
      {
        <ConfirmModel
          isModalShow={isConfirmShow}
          setModalClose={() => setIsConfirmShow(false)}
          userSelectedPlan={mySelectedPlan}
          mobileNo={mobileNumber}
          handleConfirm={handleConfirm}
        />
      }
    </>
  );
};

export default MobileService;
