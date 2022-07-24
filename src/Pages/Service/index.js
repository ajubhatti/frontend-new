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

const Service = (props) => {
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const getServiceListing = async () => {
      await props.serviceListing().then((res) => {
        setListingData(res.data);
      });
    };

    getServiceListing();
  }, [props]);

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

      <div class="bg-secondary pt-4 pb-5">
        <div class="container">
          {/* Secondary Navigation
      =============================================  */}
          <ul class="nav secondary-nav alternate">
            <li class="nav-item">
              {" "}
              <a class="nav-link active" href="index-2.html">
                <span>
                  <i class="fas fa-mobile-alt"></i>
                </span>{" "}
                Mobile
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-dth-2.html">
                <span>
                  <i class="fas fa-tv"></i>
                </span>{" "}
                DTH
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-datacard-2.html">
                <span>
                  <i class="fas fa-credit-card"></i>
                </span>{" "}
                DataCard
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-broadband-2.html">
                <span>
                  <i class="fas fa-wifi"></i>
                </span>{" "}
                Broadband
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-landline-2.html">
                <span>
                  <i class="fas fa-phone"></i>
                </span>{" "}
                Landline
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-cabletv-2.html">
                <span>
                  <i class="fas fa-plug"></i>
                </span>{" "}
                CableTv
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-electricity-2.html">
                <span>
                  <i class="fas fa-lightbulb"></i>
                </span>{" "}
                Electricity
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-metro-2.html">
                <span>
                  <i class="fas fa-subway"></i>
                </span>{" "}
                Metro
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-gas-2.html">
                <span>
                  <i class="fas fa-flask"></i>
                </span>{" "}
                Gas
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="recharge-bill-water-2.html">
                <span>
                  <i class="fas fa-tint"></i>
                </span>{" "}
                Water
              </a>{" "}
            </li>
          </ul>
          {/* <!-- Secondary Navigation end -->  */}

          {/* <!-- Mobile Recharge
      ============================================= --> */}
          <div class="bg-white shadow-md rounded p-4">
            <h2 class="text-4 mb-3">Mobile Recharge or Bill Payment</h2>
            <form id="recharge-bill" method="post">
              <div class="mb-2">
                <div class="form-check form-check-inline">
                  <input
                    id="prepaid"
                    name="rechargeBillpayment"
                    class="form-check-input"
                    checked=""
                    required=""
                    type="radio"
                  />
                  <label class="form-check-label" for="prepaid">
                    Prepaid
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    id="postpaid"
                    name="rechargeBillpayment"
                    class="form-check-input"
                    required=""
                    type="radio"
                  />
                  <label class="form-check-label" for="postpaid">
                    Postpaid
                  </label>
                </div>
              </div>
              <div class="row g-3">
                <div class="col-md-6 col-lg">
                  <input
                    type="text"
                    class="form-control"
                    data-bv-field="number"
                    id="mobileNumber"
                    required=""
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div class="col-md-6 col-lg">
                  <select class="form-select" id="operator" required="">
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
                <div class="col-md-6 col-lg">
                  <div class="position-relative">
                    {" "}
                    <a
                      href="#"
                      data-bs-target="#view-plans"
                      data-bs-toggle="modal"
                      class="view-plans-link"
                    >
                      View Plans
                    </a>
                    <input
                      class="form-control"
                      id="amount"
                      placeholder="Enter Amount"
                      required=""
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-2 d-grid">
                  {" "}
                  <a class="btn btn-primary" href="recharge-order-summary.html">
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

      <section className="main-form py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="bill-items nav nav-tabs" id="teleporter">
                <li className="nav-item">
                  <div className="nav-link active">
                    <i className="fas fa-mobile"></i>Mobile
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-network-wired"></i>DTH
                  </div>
                </li>

                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-tty"></i>Landline
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-broadcast-tower"></i>Broadband
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-lightbulb"></i>Electricity
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-burn"></i>Gas
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-train"></i>Metro
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fas fa-lightbulb"></i>Water
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <i className="fab fa-google-play"></i>G Play
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-12 form-area pt-5">
            <h2 class="text-4 mb-3">Online Mobile Recharge</h2>
            <form id="form-area" method="post">
              <div class="mb-3">
                <div class="custom-control custom-radio custom-control-inline">
                  {/* <input id="prepaid" name="rechargProbillpayment" class="custom-control-input" checked="" required="" type="radio"> */}
                  <label class="custom-control-label" for="prepaid">
                    Prepaid
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  {/* <input id="postpaid" name="rechargProbillpayment" class="custom-control-input" required="" type="radio"> */}
                  <label class="custom-control-label" for="postpaid">
                    Postpaid
                  </label>
                </div>
                <a
                  href="#"
                  data-target="#view-plans"
                  data-toggle="modal"
                  class="view-plans"
                >
                  View Plans
                </a>
              </div>

              <div class="form-row">
                <div class="col-md-6 col-lg-3 form-group">
                  {/* <input type="text" class="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Enter Mobile Number"> */}
                </div>
                <div class="col-md-6 col-lg-3 form-group">
                  <select class="custom-select" id="operator" required="">
                    <option value="">Select Your Operator</option>
                    <option>GramenPhone</option>
                    <option>Banlalink</option>
                    <option>Airtel</option>
                    <option>Robi</option>
                    <option>Citycell</option>
                    <option>Xirosoft</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="form-group input-group">
                    <div class="input-group-prepend">
                      {" "}
                      <span class="input-group-text">$</span>{" "}
                    </div>
                    {/* <input class="form-control" id="amount" placeholder="Enter Amount" required="" type="text"> */}
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 form-group">
                  <a
                    class="btn btn-default btn-block rounded-0"
                    href="recharge-summary.html"
                  >
                    Continue
                  </a>
                </div>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-12 form-area pt-5">
              <form id="form-area" method="post">
                <h2 className="text-4 mb-3">Pay your Broadbanad Bill</h2>
                <div className="mb-3">
                  <div
                    href="#"
                    ata-target="#view-plans"
                    data-toggle="modal"
                    className="view-plans"
                  >
                    View Plans
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6 col-lg-3 form-group">
                    {/* <input type="text" className="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Enter Telephone Number"> */}
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                    <select className="custom-select" id="operator" required="">
                      <option value="">Select Your Operator</option>
                      <option>Act Fibernet</option>
                      <option>Hathway Broadband</option>
                      <option>Tikona Digital Networks</option>
                      <option>Tata Sky Recharge</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        {" "}
                        <span className="input-group-text">$</span>{" "}
                      </div>
                      {/* <input className="form-control" id="amount" placeholder="Enter Amount" required="" type="text"> */}
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 form-group">
                    <div className="btn btn-default btn-block rounded-0">
                      Continue
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* azaz changes end */}
      <hr className="my-0" />
    </>
  );
};

export default Service;
