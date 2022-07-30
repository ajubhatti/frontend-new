import React, { useEffect, useState } from "react";
import CustomModal from "../../../Components/Modal";

const MobileService = (props) => {
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [isOurPlanShow, setIsOurPlanShow] = useState(false);

  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const getserviceProviderListing = async () => {
      await props.getServiceProviderByType({ type: "Prepaid" }).then((res) => {
        setListingData(res.data);
      });
    };
    getserviceProviderListing();
  }, [props]);

  console.log("listingData", listingData);

  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">Mobile Recharge</h2>

        <form id="recharge-bill" method="post">
          <div className="row g-3">
            <div className="col-md-6 col-lg">
              <input
                type="text"
                className="form-control"
                data-bv-field="number"
                id="mobileNumber"
                required=""
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="col-md-6 col-lg">
              <select className="form-select" id="operator" required="">
                <option value="">Select Your Operator</option>
                {listingData.map((x) => (
                  <option value={x.serviceProvider} key={x._id}>
                    {x.serviceProvider}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 col-lg">
              <div className="position-relative">
                {" "}
                <input
                  className="form-control"
                  id="amount"
                  placeholder="Enter Amount"
                  required=""
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-2 d-grid">
              {" "}
              <a className="btn btn-primary" href="recharge-order-summary.html">
                Continue
              </a>{" "}
            </div>
          </div>
          <div className="d-flex justify-content-start mt-3">
            <a href="#" className="m-3" onClick={() => setIsOurPlanShow(true)}>
              Roffer
            </a>
            <a href="#" className="m-3" onClick={() => setIsPlanShow(true)}>
              View Plans
            </a>
          </div>
        </form>
      </div>

      <CustomModal
        isModalShow={isPlanShow}
        setModalClose={() => setIsPlanShow(false)}
        modalType="viewPlan"
        isShowHeader={true}
      />

      <CustomModal
        isModalShow={isOurPlanShow}
        setModalClose={() => setIsOurPlanShow(false)}
        modalType="ourPlan"
        isShowHeader={false}
      />
    </>
  );
};

export default MobileService;
