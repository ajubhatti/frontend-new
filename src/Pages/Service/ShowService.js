import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken, getUser } from "../../Helper/LocalStorage";
import { mplanMobileOperatorList } from "../../Shared/constant";
import { simplePlanData } from "../../Shared/MplanStaticResponse";
import { doMyRecharge, getAllOperators, getPlans } from "./store/actions";
import OfferSlider from "../../Components/Carousel/OfferSlider";
import ConfirmModal from "../../Components/Modal/ConfirmModal";
import MobileOfferModal from "../../Components/Modal/MobileOfferModal";
import LoginConfirmModal from "../../Components/Modal/LoginConfirmModal";
import { Modal, ModalBody, ModalHeader, ModalFooter, Toast } from "reactstrap";
import { Link } from "react-router-dom";
import InvoiceModal from "../../Components/Modal/invoiceModal";
import { axiosApi } from "../../Helper/api_helper";
import { getStateList } from "../../Redux/Actions/Auth/actions";

const invoice = {
  data: {
    userId: "63067222d27a1a11021e10d1",
    customerNo: "9662022120",
    operator: "632b7af52887b2a0528a4e3c",
    state: "62a48a45820b28f6adcb06ea",
    amount: 10,
    rechargeBy: {
      discountByApi: [],
      _id: "632b7af52887b2a0528a4e3c",
      companyName: "Jio",
      mobileAppCode: "Jio",
      companyDetail: "Jio recharge",
      image: "",
      isActive: true,
      isVisible: true,
      providerType: "61ebf005b15b7b52ddc35dff",
      minAmount: 1,
      maxAmount: 1000,
      referenceApis: [
        {
          _id: "632cd4c77cbd0e5d32d50fbd",
          apiName: "RechargeWale",
          apiDetail: "Recharge Wale",
          apiImage: "",
          isActive: true,
          created: "2022-09-22T21:33:59.185Z",
          __v: 0,
          apiCode: "RJ",
          pendingLimit: "2",
          priority: "2",
          failureLimit: "2",
        },
        {
          _id: "632974511164a0942d5d56e1",
          apiName: "Ambika",
          apiDetail: "ambika api",
          apiImage: "",
          isActive: true,
          created: "2022-09-20T08:05:37.763Z",
          __v: 0,
          updated: "2022-09-22T21:53:41.053Z",
          apiCode: "116",
          pendingLimit: "1",
          priority: "1",
          failureLimit: "1",
        },
      ],
      created: "2022-09-21T20:58:29.993Z",
      __v: 74,
      updated: "2022-10-08T08:13:29.228Z",
    },
    rechargeByApi: {
      _id: "632974511164a0942d5d56e1",
      apiName: "Ambika",
      apiDetail: "ambika api",
      apiImage: "",
      isActive: true,
      created: "2022-09-20T08:05:37.763Z",
      __v: 0,
      updated: "2022-09-22T21:53:41.053Z",
      apiCode: "116",
      pendingLimit: "1",
      priority: "1",
      failureLimit: "1",
    },
    status: "pending",
    responseData: {
      account: "9662022120",
      amount: 10,
      rpid: "S2301302232422096D73",
      agentid: "1675096403",
      opid: "BR0008WJZP6A",
      isRefundStatusShow: false,
      status: 2,
      msg: "SUCCESS",
      bal: 740.92,
      errorcode: "200",
      rechargeApi: {
        _id: "632974511164a0942d5d56e1",
        apiName: "Ambika",
        apiDetail: "ambika api",
        apiImage: "",
        isActive: true,
        created: "2022-09-20T08:05:37.763Z",
        __v: 0,
        updated: "2022-09-22T21:53:41.053Z",
        apiCode: "116",
        pendingLimit: "1",
        priority: "1",
        failureLimit: "1",
      },
      rechargeOperator: {
        discountByApi: [],
        _id: "632b7af52887b2a0528a4e3c",
        companyName: "Jio",
        mobileAppCode: "Jio",
        companyDetail: "Jio recharge",
        image: "",
        isActive: true,
        isVisible: true,
        providerType: "61ebf005b15b7b52ddc35dff",
        minAmount: 1,
        maxAmount: 1000,
        referenceApis: [
          {
            _id: "632cd4c77cbd0e5d32d50fbd",
            apiName: "RechargeWale",
            apiDetail: "Recharge Wale",
            apiImage: "",
            isActive: true,
            created: "2022-09-22T21:33:59.185Z",
            __v: 0,
            apiCode: "RJ",
            pendingLimit: "2",
            priority: "2",
            failureLimit: "2",
          },
          {
            _id: "632974511164a0942d5d56e1",
            apiName: "Ambika",
            apiDetail: "ambika api",
            apiImage: "",
            isActive: true,
            created: "2022-09-20T08:05:37.763Z",
            __v: 0,
            updated: "2022-09-22T21:53:41.053Z",
            apiCode: "116",
            pendingLimit: "1",
            priority: "1",
            failureLimit: "1",
          },
        ],
        created: "2022-09-21T20:58:29.993Z",
        __v: 74,
        updated: "2022-10-08T08:13:29.228Z",
      },
    },
    _id: "63d7f159df05554691b9f51d",
    created: "2023-01-30T16:33:29.177Z",
    __v: 0,
  },
};

const ShowService = ({ selectedService }) => {
  const dispatch = useDispatch();
  const isUser = getToken();
  const user = getUser();
  const navigate = useNavigate();
  const { allOperators, loading } = useSelector(
    (state) => state.serviceReducers
  );
  const { stateList } = useSelector((state) => state.authReducer);
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [operatorList, setOperatorList] = useState([]);
  const [mySelectedPlan, setMySelectedPlan] = useState({});
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState({});
  const [planType, setPlanType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMplanOperator, setSelectedMplanOperator] = useState("");
  const [planlisting, setPlanlisting] = useState({});
  const [transactionOpen, setTransactionOpen] = useState(false);
  const [invoiceData, setInvoiceData] = useState(invoice);
  const [isInvoiceModal, setIsInvoiceModal] = useState(false);
  const [values, setValues] = useState({
    operator: "",
    mobileNo: "",
    amount: "",
    state: "",
    userId: user?.id,
    transactionPin: "",
  });
  const [isLoginModalShow, setIsLoginModalShow] = useState(false);
  const [transactionPin, setTransactionPin] = useState("");
  const [customerInfo, setCustomerInfo] = useState({});
  const [requiredFields, setRequiredFields] = useState([
    { fieldName: "customer no", fieldValue: "customerNo", value: "" },
  ]);

  const [requiredFieldValue, setRequiredFieldValue] = useState([]);

  useEffect(() => {
    let payload = {
      serviceId: selectedService?._id,
    };
    dispatch(getAllOperators(payload));
    dispatch(getStateList());
  }, [dispatch, selectedService]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      transactionPin: transactionPin,
    }));
  }, [transactionPin]);

  useEffect(() => {
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
    if (operatorList.length !== 0 && values?.operator !== 0) {
      let operator = operatorList.find((x) => x._id === values?.operator);
      setSelectedOperator(operator);
      let mplanLOperator = mplanMobileOperatorList.find(
        (x) => x.id === operator?.serviceProvider
      );
      setSelectedMplanOperator(mplanLOperator);
    }
  }, [operatorList, values?.operator]);

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
  };

  useEffect(() => {
    getInfo(values);
  }, [values]);

  const handleConfirm = () => {
    setIsConfirmShow(false);
    handleRecharge();
  };

  const handleRecharge = () => {
    dispatch(
      doMyRecharge(values, (status) => {
        if (status) {
          setIsInvoiceModal(true);
          setInvoiceData(status.data);
        }
      })
    );
  };

  const getPlan = async (payload) => {
    dispatch(
      getPlans(payload, (res) => {
        setCustomerInfo(res?.data?.records[0]);
      })
    );
  };

  const handleContinue = () => {
    if (!!user?.hasTransactionPin) {
      if (requestValidate(values)) {
        if (!isUser) {
          setIsLoginModalShow(true);
        } else {
          if (user.walletBalance > 0 || user.walletBalance > values?.amount) {
            setSubmitted(true);
            if (
              values?.operator !== "0" &&
              // values?.mobileNo !== "" &&
              values?.amount !== "" &&
              values?.state !== "0"
            ) {
              isUser ? setIsConfirmShow(true) : navigate("/login");
            }
          } else {
            toast.error("wallet amount is not enough to continue!");
          }
        }
      } else {
        toast.error("Enter valid data!");
      }
    } else {
      setTransactionOpen(true);
    }
  };

  const closeTransactionPinModal = () => {
    setTransactionOpen(!transactionOpen);
  };

  const requestValidate = () => {
    if (
      values?.operator !== "0" &&
      // values?.mobileNo !== "" &&
      values?.amount !== "" &&
      values?.state !== "0"
    ) {
      return true;
    }
    return false;
  };

  const getInfo = (value) => {
    if (value?.mobileNo && value?.mobileNo?.length >= 10) {
      let operatorname = operatorList.find((x) => x?._id === value?.operator);
      let circle = stateList.find((x) => x?._id === value?.state);
      let payload = {
        accountNo: value?.mobileNo,
        circle: circle?.stateName,
        type: "roffer",
        operator: operatorname?.operatorName || "",
      };

      if (selectedService?.serviceName === "DTH") {
        payload.type = "dthInfo";
        getPlan(payload);
      }
      if (selectedService?.serviceName === "Electricity") {
        payload.type = "electricinfo";
        getPlan(payload);
      }
      if (selectedService?.serviceName === "Post Paid") {
        payload.stdcode = "362001";
        getPlan(payload);
      }
    }
  };

  const getPlanDetails = (planType) => {
    try {
      let operatorname = operatorList.find((x) => x?._id === values?.operator);
      let circle = stateList.find((x) => x?._id === values?.state);

      let payload = {
        accountNo: values?.mobileNo,
        circle: circle?.stateName,
        type: "viewPlan",
        operator: operatorname?.operatorName || "",
      };
      if (planType == "offers") {
        payload.type =
          selectedService?.serviceName === "Mobile" ? "roffer" : "dthRoffer";
        if (values?.accountNo !== "") {
          getPlan(payload);
        } else {
          Toast.error("Please enter account no!");
        }
      } else {
        payload.type =
          selectedService?.serviceName === "Mobile" ? "viewPlan" : "dthplans";
        getPlan(payload);
      }
    } catch (err) {
      console.error({ err });
    }
  };

  useEffect(() => {
    setOperatorList(allOperators?.data || []);
  }, [allOperators]);

  const selectOperator = (e) => {
    const { value } = e.target;
    let operator = operatorList.find((x) => x?._id === value);

    let rqfld = operator?.requiredFields.map((item) => ({
      ...item,
      value: "",
    }));

    setRequiredFields(rqfld);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    let datas = [...requiredFields];
    datas[index].value = value;
    setRequiredFields(datas);
  };

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      requiredFields: requiredFields,
    }));
  }, [requiredFields]);

  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-4 mb-3">{selectedService?.title}</h2>
        <div className="row">
          <div className="col-lg-5 userPlan">
            <form
              id="recharge-bill"
              className="border rounded p-3"
              method="post"
            >
              <div className="row g-3">
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
                    onChange={(e) => {
                      handlerChange(e);
                      selectOperator(e);
                    }}
                    name="operator"
                  >
                    <option value="0">Select Your Operator</option>
                    {operatorList.map((x) => (
                      <option value={x?._id} key={x?._id}>
                        {x?.operatorName}
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

                {requiredFields.map((x, index) => {
                  return (
                    <div className="col-lg-12" key={index}>
                      <input
                        type="text"
                        className={
                          "form-control" +
                          ((submitted && !values?.mobileNo) ||
                          (isChecked && !values?.mobileNo)
                            ? " is-invalid"
                            : "")
                        }
                        id={x.fieldValue}
                        required
                        placeholder={`Enter ${x.fieldName}`}
                        value={x?.value}
                        name={x.fieldValue}
                        onChange={(e) => handleChange(e, index)}
                      />
                      {customerInfo && Object.keys(customerInfo).length ? (
                        <div>{customerInfo?.CustomerName}</div>
                      ) : (
                        ""
                      )}
                      {/* {(submitted && !values?.mobileNo) ||
                      (isChecked && !values?.mobileNo && (
                        <div className="invalid-feedback">
                          Enter your 10-digits mobile number
                        </div>
                      ))} */}
                    </div>
                  );
                })}

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
                    <option value="0">Select Your Circle</option>
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
                  <div className="roffer-view-link">
                    <button
                      type="button"
                      className="ml-2 mr-2 btn"
                      onClick={() => getPlanDetails("offers")}
                    >
                      Roffer
                    </button>

                    <button
                      type="button"
                      className="ml-2 mr-2 btn"
                      onClick={() => getPlanDetails("plans")}
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

      {isInvoiceModal && (
        <InvoiceModal
          isInvoiceModal={isInvoiceModal}
          setIsInvoiceModal={setIsInvoiceModal}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      )}

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
          handleConfirm={() => {
            handleConfirm();
          }}
          accountNo={values?.mobileNo}
          type={"mobile"}
          transactionPin={transactionPin}
          setTransactionPin={setTransactionPin}
        />
      )}
      {isLoginModalShow && (
        <LoginConfirmModal
          isModalShow={isLoginModalShow}
          setModalClose={() => setIsLoginModalShow(false)}
        />
      )}
      <Modal isOpen={transactionOpen} toggle={closeTransactionPinModal}>
        <ModalHeader>Transaction Pin Alert</ModalHeader>
        <ModalBody>
          <span>
            Please generate <Link to="/change-pin">transaction pin</Link>
          </span>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={closeTransactionPinModal}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ShowService;
