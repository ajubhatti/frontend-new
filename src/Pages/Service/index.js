import React, { useEffect, useState } from "react";
import knowledgebaseCommunityImg from "../../Assets/knowledgebase-community.svg";
import Tabs, { TabItem } from "../../Components/Tabs";
import BroadbandService from "./ServiceCards/BroadbandService";
import DTHService from "./ServiceCards/DTHService";
import ElectricityService from "./ServiceCards/ElectricityService";
import FastagService from "./ServiceCards/FastagService";
import GasService from "./ServiceCards/GasService";
import MobileService from "./ServiceCards/MobileService";
import PostpaidService from "./ServiceCards/PostpaidService";
import GooglePayService from "./ServiceCards/GooglePayService";
import InsuranceService from "./ServiceCards/InsuranceService";
import LandlineService from "./ServiceCards/LandlineService";
import LoneService from "./ServiceCards/LoneService";
import WaterService from "./ServiceCards/WaterService";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faTv,
  faMobileButton,
  faWifi,
  faPhone,
  faPlug,
  faLightbulb,
  faSubway,
  faFlask,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { rOfferData } from "../../Shared/MplanStaticResponse";
import Modal from "../../Components/Modal";
import CustomModal from "../../Components/Modal";
import { serviceTabs } from "../../Shared/serviceTabs";
import ServiceProviderModal from "../../Components/Modal/serviceModal";

const Service = (props) => {
  const [listingData, setListingData] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [isPlanShow, setIsPlanShow] = useState(false);
  const [isOurPlanShow, setIsOurPlanShow] = useState(false);
  const [serviceProviderModal, setServiceProviderModal] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState({id:1, title:""});

  useEffect(() => {
    const getServiceListing = async () => {
      await props.serviceListing().then((res) => {
        setListingData(res.data);
      });
    };

    const getServiceAmbicaListing = async () => {
      await props.serviceAmbicaAll().then((res) => {
        setListingData(res.data);
      });
    };

    getServiceListing();
    getServiceAmbicaListing();
    fetchPlan();
  }, [props]);

  useEffect(() => {
    const getserviceProviderListing = async () => {
      await props.serviceProvider({type: selectedServiceTab.title}).then((res) => {
        setListingData(res.data);
      });
    };
    getserviceProviderListing();
  }, [selectedServiceTab])

  console.log('listingData', listingData)

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

  const data = [
    {
      id: 1,
      name: "Mobil Recharge",
      code: "MOBILE",
      icon: "",
    },
    {
      id: 2,
      name: "DTH Recharge",
      code: "DTH",
      icon: "",
    },
    {
      id: 3,
      name: "Postpaid",
      code: "POSTPAID",
      icon: "",
    },
    {
      id: 4,
      name: "Electricity Bill",
      code: "ELECTRICITY",
      icon: "",
    },
    {
      id: 5,
      name: "Broadband Bill",
      code: "BROADBAND",
      icon: "",
    },
    {
      id: 6,
      name: "Fastag",
      code: "FASTAG",
      icon: "",
    },
    {
      id: 7,
      name: "Gas Bill",
      code: "GAS",
      icon: "",
    },
    {
      id: 8,
      name: "Google Play",
      code: "GOOGLE",
      icon: "",
    },
    {
      id: 9,
      name: "Insurance",
      code: "INSURANCE",
      icon: "",
    },
    {
      id: 10,
      name: "Landline Bill",
      code: "LANDLINE",
      icon: "",
    },
    {
      id: 11,
      name: "Lone Payment",
      code: "LOAN",
      icon: "",
    },
    {
      id: 12,
      name: "Water Bill",
      code: "WATER",
      icon: "",
    },
  ];

  const serviceRanders = (id) => {
    console.log({ id });
    switch (id) {
      case 1:
        return <MobileService />;
      case 2:
        return <DTHService />;
      case 3:
        return <PostpaidService />;
      case 4:
        return <ElectricityService />;
      case 5:
        return <BroadbandService />;
      case 6:
        return <FastagService />;
      case 7:
        return <GasService />;
      case 8:
        return <GooglePayService />;
      case 9:
        return <InsuranceService />;
      case 10:
        return <LandlineService />;
      case 11:
        return <LoneService />;
      case 12:
        return <WaterService />;
      default:
        return <MobileService />;
    }
  };

  const handleShow = () => setIsPlanShow(true);

  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-md-between">
            <div className="col-md-6 space-2 space-bottom-lg-3 space-top-md-5">
              <div className="mb-5">
                <h1 className="font-weight-medium">Our Services KRISHNA</h1>
              </div>
            </div>
            <div className="col-md-5 align-self-md-end d-none d-md-inline-block">
              <figure className="ie-knowledgebase-community mb-n3">
                <img src={knowledgebaseCommunityImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="space-2 space-md-3">
          <div className="d-flex flex-wrap">
            {/* <Tabs defaultIndex={Number(1)} onTabClick={console.log}>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <TabItem label={item.name} index={item.id} key={item}>
                      {serviceRanders(item.id)}
                    </TabItem>
                  );
                })}
            </Tabs> */}
          </div>
        </div>
      </div>
      {/* azaz changes start*/}
      <div className="bg-secondary pt-4 pb-5">
        <div className="container">
          {/* Secondary Navigation
      =============================================  */}
          <ul className="nav secondary-nav alternate">
            {serviceTabs.map((item, id) => (
              <li className="nav-item" onClick={() => setSelectedServiceTab({id: item.id, title: item.title})}>
                <div className={selectedServiceTab.id === item.id ? "nav-link active" : "nav-link"}>
                  <span>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
          {/* <!-- Secondary Navigation end -->  */}

          {/* <!-- Mobile Recharge
      ============================================= --> */}
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-4 mb-3">Mobile Recharge or Bill Payment</h2>
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-outline-primary btn-sm ms-0"
                onClick={() => setIsOurPlanShow(true)}
              >
                Our Plans
              </button>
              <button
                className="btn btn-outline-primary btn-sm ms-2"
                onClick={() => setIsPlanShow(true)}
              >
                View Plans
              </button>
              <button
                className="btn btn-outline-primary btn-sm ms-2"
                onClick={() => setServiceProviderModal(true)}
              >
                View Service Plans
              </button>
              
            </div>

            <form id="recharge-bill" method="post">
              <div className="mb-2">
                {/* <div className="form-check form-check-inline">
                  <input
                    id="prepaid"
                    name="rechargeBillpayment"
                    className="form-check-input"
                    checked={isChecked}
                    required=""
                    type="radio"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="prepaid">
                    Prepaid
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="postpaid"
                    name="rechargeBillpayment"
                    className="form-check-input"
                    required=""
                    type="radio"
                  />
                  <label className="form-check-label" htmlFor="postpaid">
                    Postpaid
                  </label>
                </div> */}
              </div>
              {
                serviceRanders(selectedServiceTab)
              }
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
                    <option>1st Operator</option>
                    <option>2nd Operator</option>
                    <option>3rd Operator</option>
                    <option>4th Operator</option>
                    <option>5th Operator</option>
                    <option>6th Operator</option>
                    <option>7th Operator</option>
                  </select>
                </div>
                <div className="col-md-6 col-lg">
                  <div className="position-relative">
                    {" "}
                    {/* <div className="col-12 col-sm-6 col-lg-3 d-grid"> */}
                    {/* <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => setIsPlanShow(true)}
                    >
                      View Plans
                    </button> */}
                    {/* </div> */}
                    <a
                      href="#"
                      className="view-plans-link"
                      onClick={() => setIsPlanShow(true)}
                    >
                      View Plans
                    </a>
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
                  <a
                    className="btn btn-primary"
                    href="recharge-order-summary.html"
                  >
                    Continue
                  </a>{" "}
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Mobile Recharge end -->  */}
        </div>
      </div>
      {/* ======================================================================================= */}
      {/* <div
        id="view-plans"
        className="modal fade show"
        role="dialog"
        aria-modal="true"
        style="display: block;"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Browse Plans</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 mb-4" method="post">
                <div className="col-12 col-sm-6 col-lg-3">
                  <select className="form-select" required="">
                    <option value="">Select Your Operator</option>
                    <option>1st Operator</option>
                    <option>2nd Operator</option>
                    <option>3rd Operator</option>
                    <option>4th Operator</option>
                    <option>5th Operator</option>
                    <option>6th Operator</option>
                    <option>7th Operator</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <select className="form-select" required="">
                    <option value="">Select Your Circle</option>
                    <option>1st Circle</option>
                    <option>2nd Circle</option>
                    <option>3rd Circle</option>
                    <option>4th Circle</option>
                    <option>5th Circle</option>
                    <option>6th Circle</option>
                    <option>7th Circle</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <select className="form-select" required="">
                    <option value="">All Plans</option>
                    <option>Topup</option>
                    <option>Full Talktime</option>
                    <option>Validity Recharge</option>
                    <option>SMS</option>
                    <option>Data</option>
                    <option>Unlimited Talktime</option>
                    <option>STD</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-grid">
                  <button className="btn btn-primary" type="submit">
                    View Plans
                  </button>
                </div>
              </form>
              <div className="plans">
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $10<span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    8<span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    7 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Talktime $8 &amp; 2 Local &amp; National SMS &amp; Free SMS
                    valid for 2 day(s)
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $15<span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    13
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    15 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Regular Talktime
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $50<span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    47
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    28 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    47 Local Vodafone min free{" "}
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $100
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    92
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    28 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Local min 92 &amp; 10 Local &amp; National SMS &amp; Free
                    SMS valid for 28 day(s).
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $150
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    143
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    60 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Talktime $143 &amp; 50 Local &amp; National SMS &amp; Free
                    SMS valid for 60 day(s).
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $220
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    8{" "}
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    7 Days{" "}
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Full Talktime
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $250
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    250
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    28 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Full Talktime + 50 SMS per day for 28 days.
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $300
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    301
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    64 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Full Talktime
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $410
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    0<span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    28 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Unlimited Local,STD &amp; Roaming calls
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $501
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    510
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    180 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Full Talktime + 100 SMS per day for 180 days.
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $799
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    820
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    250 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Full Talktime + 100 SMS per day for 250 days.
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                  <div className="col-4 col-lg-2 text-5 text-primary text-center">
                    $999
                    <span className="text-1 text-muted d-block">Amount</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    1099
                    <span className="text-1 text-muted d-block">Talktime</span>
                  </div>
                  <div className="col-4 col-lg-2 text-3 text-center">
                    356 Days
                    <span className="text-1 text-muted d-block">Validity</span>
                  </div>
                  <div className="col-7 col-lg-3 my-2 my-lg-0 text-1 text-muted">
                    Full Talktime + 100 SMS per day for 356 days.
                  </div>
                  <div className="col-5 col-lg-3 my-2 my-lg-0 text-end text-lg-center">
                    <button
                      className="btn btn-sm btn-outline-primary shadow-none text-nowrap"
                      type="submit"
                    >
                      Recharge
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <CustomModal
        isModalShow={isPlanShow}
        setModalClose={() => setIsPlanShow(false)}
        modalType="viewPlan"
      />s
      {/* azaz changes end */}
      <CustomModal
        isModalShow={isOurPlanShow}
        setModalClose={() => setIsOurPlanShow(false)}
        modalType="ourPlan"
      />
      <ServiceProviderModal 
         isModalShow={serviceProviderModal}
         setModalClose={() => setServiceProviderModal(false)}
         listingData={listingData}
         
      />
      <hr className="my-0" />
    </>
  );
};

export default Service;
