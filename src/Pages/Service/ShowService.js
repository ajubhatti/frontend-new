import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken, getUser } from "../../Helper/LocalStorage";
import { mplanMobileOperatorList } from "../../Shared/constant";
import { simplePlanData } from "../../Shared/MplanStaticResponse";
import { doMyRecharge, getPlans } from "./store/actions";
import OfferSlider from "../../Components/Carousel/OfferSlider";
import ConfirmModal from "../../Components/Modal/ConfirmModal";
import MobileOfferModal from "../../Components/Modal/MobileOfferModal";
import LoginConfirmModal from "../../Components/Modal/LoginConfirmModal";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
const ShowService = (props) => {
  const getUserData = getUser();

  const dispatch = useDispatch();
  const isUser = getToken();
  const user = getUser();
  const navigate = useNavigate();
  const { allOperators, loading } = useSelector((state) => state.service);
  const { stateList } = useSelector((state) => state.auth);
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState({});
  const [planType, setPlanType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMplanOperator, setSelectedMplanOperator] = useState("");
  const [planlisting, setPlanlisting] = useState({});
  const [transactionOpen,setTransactionOpen] = useState(false)
  const [values, setValues] = useState({
    operator: "0",
    mobileNo: "",
    amount: "",
    state: "0",
    userId: getUserData?.id,
  });

  const [isLoginModalShow, setIsLoginModalShow] = useState(false);

  useEffect(() => {
    getPlan();
    if (Object.keys(mySelectedPlan).length === 0) {
      for (let i in simplePlanData?.records) {
        let searchedPlan = simplePlanData?.records[i].find(
          (x) => x.rs === values?.amount
        );

        if (searchedPlan !== undefined) {
          setMySelectedPlan({
            desc: searchedPlan.desc,
            rs: searchedPlan.rs,
          });
        }
      }
    }
  }, [mySelectedPlan, values?.amount]);

  useEffect(() => {
    if (listingData.length !== 0 && values?.operator !== 0) {
      let operator = listingData.find((x) => x._id === values?.operator);

      setSelectedOperator(operator);
      let mplanLOperator = mplanMobileOperatorList.find(
        (x) => x.id === operator?.serviceProvider
      );

      setSelectedMplanOperator(mplanLOperator);
    }
  }, [listingData, values?.operator]);

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
    handleRecharge();
  };

  const handleRecharge = () => {
    dispatch(doMyRecharge(values));
  };

  const getPlan = async () => {
    let payload = {
      type: "roffer",
      phone: "9033501636",
      operator: "Jio",
    };
    dispatch(getPlans(payload));
    // await props.getPlanDetails(payload).then((res) => {
    // });
  };

  const handleContinue = () => {
    if (!!user?.transactionPin){

      requestValidate(values);
      if (requestValidate(values)) {
      if (!isUser) {
        setIsLoginModalShow(true);
      } else {

        if (user.walletBalance > 0 || user.walletBalance > values?.amount) {
          // if (user.transactionPin) {
          setSubmitted(true);
          if (
            values?.operator !== "0" &&
            values?.mobileNo !== "" &&
            values?.amount !== "" &&
            values?.state !== "0"
          ) {
            isUser ? setIsConfirmShow(true) : navigate("/login");
          } else {
          }
          // } else {
            //   toast.error(
              //     "transaction pin created , please create a new transaction pin."
              //   );
              // }
            } else {
              toast.error("wallet amount is not enough to continue!");
            }
          }
        } else {
          toast.error("Enter valid data!");
        }
      }else{
        setTransactionOpen(true)
      }
      };
    
  const closeTransactionPinModal = () =>{
    setTransactionOpen(!transactionOpen)

  }
      
  const requestValidate = () => {
    if (
      values?.operator !== "0" &&
      values?.mobileNo !== "" &&
      values?.amount !== "" &&
      values?.state !== "0"
    ) {
      return true;
    }
    return false;
  };

  const getCustomerDetail = async (type) => {
    setPlanType(type);
    setIsChecked(true);
    let payload = {
      type: type,
      phone: values?.mobileNo,
      operator: selectedMplanOperator?.operator,
    };

    if (values?.mobileNo && selectedMplanOperator.operator) {
      dispatch(getPlans(payload));
      // await props.getPlanDetails(payload).then((res) => {
      //   setPlanlisting(res.data);
      //   setIsPlanShow(true);
      // });
    }
  };

  // new code starts here

  useEffect(() => {
    if (Object.keys(allOperators).length > 0) {
      let filteredOperator = allOperators?.data?.filter(
        (x) => x.providerType === props?.selectedService?._id
      );
      setListingData(filteredOperator);
    }
  }, [allOperators, props]);

  // new code ends here

  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">{props?.selectedService?.title}</h2>
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
                      ((submitted && !values?.mobileNo) ||
                      (isChecked && !values?.mobileNo)
                        ? " is-invalid"
                        : "")
                    }
                    // data-bv-field="number"
                    id="mobileNo"
                    required
                    placeholder="Enter Mobile Number"
                    value={values?.mobileNo}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="mobileNo"
                    onChange={handlerChange}
                  />
                  {(submitted && !values?.mobileNo) ||
                    (isChecked && !values?.mobileNo && (
                      <div className="invalid-feedback">
                        Enter your 10-digits mobile number
                      </div>
                    ))}
                </div>

                <div className="col-lg-12">
                  <select
                    className={
                      "form-control" +
                      ((submitted && !values?.operator) ||
                      (isChecked && values?.operator === "0")
                        ? " is-invalid"
                        : "")
                    }
                    id="operator"
                    required
                    value={values?.operator}
                    onChange={handlerChange}
                    name="operator"
                  >
                    <option value="0">Select Your Operator</option>
                    {listingData.map((x) => (
                      <option value={x?._id} key={x?._id}>
                        {x?.companyName}
                      </option>
                    ))}
                  </select>
                  {(submitted && !values?.operator) ||
                    (isChecked && values?.operator === "0" && (
                      <div className="invalid-feedback">
                        Operator is required
                      </div>
                    ))}
                </div>

                <div className="col-lg-12">
                  <select
                    className={
                      "form-control" +
                      ((submitted && !values?.state) ||
                      (isChecked && values?.state === "0")
                        ? " is-invalid"
                        : "")
                    }
                    id="state"
                    required
                    value={values?.state}
                    name="state"
                    onChange={handlerChange}
                  >
                    <option value="0" disabled>
                      Select Your Circle
                    </option>
                    {stateList.map((x) => (
                      <option value={x?._id} key={x?._id}>
                        {x?.stateName}
                      </option>
                    ))}
                  </select>
                  {(submitted && !values?.state) ||
                    (isChecked && values?.state === "0" && (
                      <div className="invalid-feedback">Circle is required</div>
                    ))}
                </div>

                <div className="col-lg-12">
                  <input
                    className={
                      "form-control" +
                      (submitted && !values?.amount ? " is-invalid" : "")
                    }
                    id="amount"
                    placeholder="Enter Amount"
                    required
                    type="text"
                    name="amount"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    value={values?.amount}
                    onChange={handlerChange}
                  />
                  {submitted && !values?.amount && (
                    <div className="invalid-feedback">Amount is required</div>
                  )}
                </div>
                {values?.operator !== "" && (
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
                    disabled={loading}
                  >
                    {loading ? "loading..." : "Continue"}
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
          selectCircle={values?.state}
        />
      )}
      {isConfirmShow && (
        <ConfirmModal
          isModalShow={isConfirmShow}
          setModalClose={() => setIsConfirmShow(false)}
          userSelectedPlan={mySelectedPlan}
          handleConfirm={handleConfirm}
          accountNo={values?.mobileNo}
          type={"mobile"}
        />
      )}
      {isLoginModalShow && (
        <LoginConfirmModal
          isModalShow={isLoginModalShow}
          setModalClose={() => setIsLoginModalShow(false)}
        />
      )}
      <Modal isOpen={transactionOpen} toggle={closeTransactionPinModal}>
        <ModalHeader>
          Transaction Pin Alert
        </ModalHeader>
        <ModalBody>
          <span>Please generate <Link to="/change-pin">transaction pin</Link></span>
          
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={closeTransactionPinModal}>Close</button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ShowService;
