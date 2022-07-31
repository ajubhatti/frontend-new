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

  const [serviceProviderModal, setServiceProviderModal] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState({
    id: 1,
    title: "",
  });

  useEffect(() => {
    const getServiceListing = async () => {
      await props.serviceListing().then((res) => {
        setListingData(res.data);
      });
    };

    const getServiceAmbicaListing = async () => {
      await props.getServiceAmbicaAll().then((res) => {
        setListingData(res.data);
      });
    };

    getServiceListing();
    getServiceAmbicaListing();
    fetchPlan();
  }, [props]);

  console.log("listingData", listingData);

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

  const serviceRanders = (id) => {
    switch (id) {
      case 1:
        return <MobileService {...props} />;
      case 2:
        return <DTHService {...props} />;
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
        return <></>;
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
                <h1 className="font-weight-medium">Our Services</h1>
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

      {/* azaz changes start*/}
      <div className="bg-primary pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-service-card  rounded">
                {/* <!-- menu Navigation start -->  */}
                <ul className="nav secondary-nav alternate p-4 pb-0 main-inner-card">
                  {serviceTabs.map((item, id) => (
                    <li
                      className="nav-item"
                      onClick={() =>
                        setSelectedServiceTab({
                          id: item.id,
                          title: item.title,
                        })
                      }
                    >
                      <div
                        className={
                          selectedServiceTab.id === item.id
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        <span className="service-icons">
                          <FontAwesomeIcon icon={item.icon} />
                        </span>
                        <h5 className="service-iconsTitle mb-0">
                          {item.title}
                        </h5>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* <!-- menu Navigation end -->  */}
                {serviceRanders(selectedServiceTab.id)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================================================= */}

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
