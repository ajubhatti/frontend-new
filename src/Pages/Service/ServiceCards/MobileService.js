// import React, { useEffect, useState } from "react";
// import MobileOfferModal from "../../../Components/Modal/MobileOfferModal";
// import { stateData } from "../../../Shared/constant";
// import ConfirmModal from "../../../Components/Modal/ConfirmModal";
// import OfferSlider from "../../../Components/Carousel/OfferSlider";
// import { simplePlanData } from "../../../Shared/MplanStaticResponse";

// const MobileService = (props) => {
//   console.log("props", props.coords);
//   const [isPlanShow, setIsPlanShow] = useState(false);
//   const [isRofferShow, setIsRofferShow] = useState(false);
//   const [listingData, setListingData] = useState([]);
//   const [selectCircleValue, setSelectCircleValue] = useState("");

//   const [mySelectedPlan, setMySelectedPlan] = useState({});
//   const [isConfirmShow, setIsConfirmShow] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");

//   const [submitted, setSubmitted] = useState(false);
//   const [selectedOperator, setSelectedOperator] = useState({});
//   const [values, setValues] = useState({
//     operator: "0",
//     mobileNo: "",
//     amount: "",
//     circle: "0",
//     rechargeData: {},
//   });

//   useEffect(() => {
//     getPlan();
//     if (Object.keys(mySelectedPlan).length === 0) {
//       for (let i in simplePlanData?.records) {
//         let searchedPlan = simplePlanData?.records[i].find(
//           (x) => x.rs === values.amount
//         );

//         if (searchedPlan !== undefined) {
//           setMySelectedPlan({
//             desc: searchedPlan.desc,
//             rs: searchedPlan.rs,
//           });
//         }
//       }
//     }
//   }, [mySelectedPlan, values.amount]);

//   useEffect(() => {
//     if (listingData.length !== 0) {
//       let operator = listingData.find((x) => x._id === values.operator);
//       setSelectedOperator(operator);
//     }
//   }, [listingData, values.operator]);

//   useEffect(() => {
//     const getserviceProviderListing = async () => {
//       await props.getServiceProviderByType({ type: "Prepaid" }).then((res) => {
//         console.log("res.data", res.data);
//         setListingData(res.data);
//       });
//     };
//     getserviceProviderListing();
//   }, [props]);

//   const handleSelectPlan = (data) => {
//     setIsConfirmShow(true);
//     setValues((prev) => ({
//       ...prev,
//       amount: data.rs,
//     }));
//     setMySelectedPlan({
//       desc: data.desc,
//       rs: data.rs,
//     });
//   };

//   const handlerChange = (event) => {
//     const { name, value } = event.target;
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     // fetchPlan(value);
//   };

//   const handleConfirm = () => {
//     setIsConfirmShow(false);
//     doRecharge();
//   };

//   const doRecharge = async () => {
//     let payload = {
//       amount: values.amount,
//       operatorCode: selectedOperator.SPKey,
//       areaPincode: 395002,
//       regMobileNumber: values.mobileNo,
//       longitude: props?.coords?.longitude
//         ? props?.coords?.longitude
//         : 72.8399872,
//       latitude: props?.coords?.latitude ? props?.coords?.latitude : 21.1910656,
//       optional1: "",
//       optional2: "",
//       optional3: "",
//       optional4: "",
//     };

//     await props.ambikaRechargeApi(payload).then((res) => {
//       console.log("res.data", res.data);
//       // setListingData(res.data);
//     });
//   };

//   const getPlan = async () => {
//     let payload = {
//       type: "roffer",
//       phone: "9033501636",
//       operator: "Jio",
//     };
//     await props.getPlanDetails(payload).then((res) => {
//       console.log("res.data", res.data);
//     });
//   };

//   const handleContinue = () => {
//     setSubmitted(true);
//     if (
//       values.operator !== "0" &&
//       values.mobileNo !== "" &&
//       values.amount !== "" &&
//       values.circle !== "0"
//     ) {
//       setIsConfirmShow(true);
//     } else {
//       console.log("else part");
//     }
//   };

//   return (
//     <>
//       <div className="bg-white shadow-md rounded p-4">
//         <h2 className="text-4 mb-3">Mobile Recharge</h2>
//         <div className="row">
//           <div className="col-lg-5 userPlan">
//             <form
//               id="recharge-bill"
//               className="border rounded p-3"
//               method="post"
//             >
//               <div className="row g-3">
//                 <div className="col-lg-12">
//                   <input
//                     type="text"
//                     className={
//                       "form-control" +
//                       (submitted && !values.mobileNo ? " is-invalid" : "")
//                     }
//                     // data-bv-field="number"
//                     id="mobileNo"
//                     required
//                     placeholder="Enter Mobile Number"
//                     value={values.mobileNo}
//                     pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                     name="mobileNo"
//                     onChange={handlerChange}
//                   />
//                   {submitted && !values.mobileNo && (
//                     <div className="invalid-feedback">
//                       Enter your 10-digits mobile number
//                     </div>
//                   )}
//                 </div>
//                 <div className="col-lg-12">
//                   <select
//                     className="form-select"
//                     id="operator"
//                     required
//                     value={values.operator}
//                     onChange={handlerChange}
//                     name="operator"
//                   >
//                     <option value="0">Select Your Operator</option>
//                     {listingData.map((x) => (
//                       <option value={x._id} key={x._id}>
//                         {x.serviceProvider}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="col-lg-12">
//                   <select
//                     className="form-select"
//                     id="circle"
//                     required
//                     value={values.circle}
//                     name="circle"
//                     onChange={handlerChange}
//                   >
//                     <option value="0" disabled>
//                       Select Your Circle
//                     </option>
//                     {stateData.map((x) => (
//                       <option value={x.key} key={x.key}>
//                         {x.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="col-lg-12">
//                   <input
//                     className={
//                       "form-control" +
//                       (submitted && !values.amount ? " is-invalid" : "")
//                     }
//                     id="amount"
//                     placeholder="Enter Amount"
//                     required
//                     type="text"
//                     name="amount"
//                     pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                     value={values.amount}
//                     onChange={handlerChange}
//                   />
//                   {submitted && !values.amount && (
//                     <div className="invalid-feedback">Amount is required</div>
//                   )}
//                 </div>
//                 {values.operator !== "" && (
//                   <div className="col-lg-12">
//                     <button
//                       type="button"
//                       className="ml-2 mr-2 btn"
//                       onClick={() => setIsRofferShow(true)}
//                     >
//                       Roffer
//                     </button>

//                     <button
//                       type="button"
//                       className="ml-2 mr-2 btn"
//                       onClick={() => setIsPlanShow(true)}
//                     >
//                       View Plans
//                     </button>
//                   </div>
//                 )}
//                 <div className="col-lg-12">
//                   {" "}
//                   <button
//                     className="btn btn-primary w-100"
//                     type="button"
//                     onClick={() => {
//                       handleContinue();
//                     }}
//                   >
//                     Continue
//                   </button>{" "}
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="col-lg-7 user-offer-slide">
//             <OfferSlider />
//           </div>
//         </div>
//       </div>

//       {isRofferShow && (
//         <MobileOfferModal
//           planType="roffer"
//           isModalShow={isRofferShow}
//           setModalClose={() => setIsRofferShow(false)}
//           isShowHeader={false}
//           selectedPlan={handleSelectPlan}
//           selectCircle={selectCircleValue}
//         />
//       )}
//       {isPlanShow && (
//         <MobileOfferModal
//           planType="allPlan"
//           isModalShow={isPlanShow}
//           setModalClose={() => setIsPlanShow(false)}
//           isShowHeader={true}
//           selectCircle={selectCircleValue}
//           selectedPlan={handleSelectPlan}
//         />
//       )}
//       {
//         <ConfirmModal
//           isModalShow={isConfirmShow}
//           setModalClose={() => setIsConfirmShow(false)}
//           userSelectedPlan={mySelectedPlan}
//           accountNo={values.mobileNo}
//           handleConfirm={handleConfirm}
//           type={"mobile"}
//         />
//       }
//     </>
//   );
// };

// export default MobileService;

import React, { useEffect, useState } from "react";
import MobileOfferModal from "../../../Components/Modal/MobileOfferModal";
import { mplanMobileOperatorList, stateData } from "../../../Shared/constant";
import ConfirmModal from "../../../Components/Modal/ConfirmModal";
import OfferSlider from "../../../Components/Carousel/OfferSlider";
import { simplePlanData } from "../../../Shared/MplanStaticResponse";
import { toast } from "react-toastify";

const MobileService = (props) => {
  console.log("props", props.coords);
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [selectCircleValue, setSelectCircleValue] = useState("");
  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState({});
  const [planType, setPlanType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMplanOperator, setSelectedMplanOperator] = useState("");
  const [planlisting, setPlanlisting] = useState({});
  const [values, setValues] = useState({
    operator: "0",
    mobileNo: "",
    amount: "",
    circle: "0",
    rechargeData: {},
  });

  useEffect(() => {
    getPlan();
    if (Object.keys(mySelectedPlan).length === 0) {
      for (let i in simplePlanData?.records) {
        let searchedPlan = simplePlanData?.records[i].find(
          (x) => x.rs === values.amount
        );

        if (searchedPlan !== undefined) {
          setMySelectedPlan({
            desc: searchedPlan.desc,
            rs: searchedPlan.rs,
          });
        }
      }
    }
  }, [mySelectedPlan, values.amount]);

  useEffect(() => {
    if (listingData.length !== 0 && values.operator !== 0) {
      let operator = listingData.find((x) => x._id === values.operator);
      console.log({ operator });

      setSelectedOperator(operator);
      let mplanLOperator = mplanMobileOperatorList.find(
        (x) => x.id === operator?.serviceProvider
      );
      console.log({ mplanLOperator });

      setSelectedMplanOperator(mplanLOperator);
    }
  }, [listingData, values.operator]);

  useEffect(() => {
    const getserviceProviderListing = async () => {
      await props.getServiceProviderByType({ type: "Prepaid" }).then((res) => {
        console.log("res.data", res.data);
        setListingData(res.data);
      });
    };
    getserviceProviderListing();
  }, [props]);

  const handleSelectPlan = (data) => {
    setIsConfirmShow(true);
    setValues((prev) => ({
      ...prev,
      amount: data.rs,
    }));
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
    doRecharge();
  };

  const doRecharge = async () => {
    let payload = {
      amount: values.amount,
      operatorCode: selectedOperator.SPKey,
      areaPincode: 395002,
      regMobileNumber: values.mobileNo,
      longitude: props?.coords?.longitude
        ? props?.coords?.longitude
        : 72.8399872,
      latitude: props?.coords?.latitude ? props?.coords?.latitude : 21.1910656,
      optional1: "",
      optional2: "",
      optional3: "",
      optional4: "",
    };

    try {
      await props.ambikaRechargeApi(payload).then((res) => {
        console.log("res.data", res.data);
        toast.success("Successfully charged");
      });
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  const getPlan = async () => {
    let payload = {
      type: "roffer",
      phone: "9033501636",
      operator: "Jio",
    };
    await props.getPlanDetails(payload).then((res) => {
      console.log("res.data", res.data);
    });
  };

  const handleContinue = () => {
    setSubmitted(true);
    if (
      values.operator !== "0" &&
      values.mobileNo !== "" &&
      values.amount !== "" &&
      values.circle !== "0"
    ) {
      setIsConfirmShow(true);
    } else {
      console.log("else part");
    }
  };

  const getCustomerDetail = async (type) => {
    setPlanType(type);
    setIsChecked(true);
    let payload = {
      type: type,
      phone: values?.mobileNo,
      operator: selectedMplanOperator?.operator,
    };

    if (values.mobileNo && selectedMplanOperator.operator) {
      await props.getPlanDetails(payload).then((res) => {
        console.log(res.data);
        setPlanlisting(res.data);
        setIsPlanShow(true);
      });
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">Mobile Recharge</h2>
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
                      ((submitted && !values.mobileNo) ||
                      (isChecked && !values.mobileNo)
                        ? " is-invalid"
                        : "")
                    }
                    // data-bv-field="number"
                    id="mobileNo"
                    required
                    placeholder="Enter Mobile Number"
                    value={values.mobileNo}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="mobileNo"
                    onChange={handlerChange}
                  />
                  {(submitted && !values.mobileNo) ||
                    (isChecked && !values.mobileNo && (
                      <div className="invalid-feedback">
                        Enter your 10-digits mobile number
                      </div>
                    ))}
                </div>
                <div className="col-lg-12">
                  <select
                    className={
                      "form-control" +
                      ((submitted && !values.operator) ||
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
                  {(submitted && !values.operator) ||
                    (isChecked && values.operator === "0" && (
                      <div className="invalid-feedback">
                        Operator is required
                      </div>
                    ))}
                </div>

                <div className="col-lg-12">
                  <select
                    className={
                      "form-control" +
                      ((submitted && !values.circle) ||
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
                  {(submitted && !values.circle) ||
                    (isChecked && values.circle === "0" && (
                      <div className="invalid-feedback">Circle is required</div>
                    ))}
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
                {values.operator !== "" && (
                  <div className="col-lg-12">
                    <button
                      type="button"
                      className="ml-2 mr-2 btn"
                      onClick={() => getCustomerDetail("roffer")}
                    >
                      Roffer
                    </button>

                    <button
                      type="button"
                      className="ml-2 mr-2 btn"
                      onClick={() => getCustomerDetail("viewPlan")}
                    >
                      View Plans
                    </button>
                  </div>
                )}
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
      </div>

      {isPlanShow && (
        <MobileOfferModal
          planData={planlisting}
          planType={planType}
          isModalShow={isPlanShow}
          setModalClose={() => setIsPlanShow(false)}
          isShowHeader={false}
          selectedPlan={handleSelectPlan}
          selectCircle={selectCircleValue}
        />
      )}
      {
        <ConfirmModal
          isModalShow={isConfirmShow}
          setModalClose={() => setIsConfirmShow(false)}
          userSelectedPlan={mySelectedPlan}
          mobileNo={mobileNumber}
          handleConfirm={handleConfirm}
          accountNo={values.mobileNo}
          type={"mobile"}
        />
      }
    </>
  );
};

export default MobileService;
