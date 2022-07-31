import React, { useEffect, useState } from "react";
import MobileOfferModel from "../../../Components/Modal/MobileOfferModel";
import { stateData } from "../../../Shared/constant";
import ConfirmModel from "../../../Components/Modal/ConfirmModel";
import OfferSlider from "../../../Components/Carousel/OfferSlider";

const MobileService = (props) => {
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [isRofferShow, setIsRofferShow] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [selectCircleValue, setSelectCircleValue] = useState("");

  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

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
    console.log("data", data);
    setIsConfirmShow(true);
    setMySelectedPlan({
      desc: data.desc,
      rs: data.rs,
    });
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
                    className="form-control"
                    data-bv-field="number"
                    id="mobileNumber"
                    required=""
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                    }}
                  />
                </div>
                <div className=" col-lg-12">
                  <select
                    className="form-select"
                    id="operator"
                    required=""
                    value={selectValue}
                    onChange={handleChange}
                  >
                    <option value="">Select Your Operator</option>
                    {listingData.map((x) => (
                      <option value={x.serviceProvider} key={x._id}>
                        {x.serviceProvider}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-12">
                  <select
                    className="form-select"
                    required=""
                    value={selectCircleValue}
                    onChange={(e) => {
                      setSelectCircleValue(e.target.value);
                    }}
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
                      className="form-control"
                      id="amount"
                      placeholder="Enter Amount"
                      required=""
                      type="text"
                    />
                  </div>
                </div>
                {selectValue && (
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
        />
      }
    </>
  );
};

export default MobileService;
