import React, { useEffect, useReducer, useState } from "react";
import knowledgebaseCommunityImg from "../../Assets/knowledgebase-community.svg";
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
import LoanService from "./ServiceCards/LoanService";
import WaterService from "./ServiceCards/WaterService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serviceTabs } from "../../Shared/serviceTabs";
import DthserviceModal from "../../Components/Modal/DthserviceModal";
import "./service.css";
import { useGeolocated } from "react-geolocated";
import CableTvService from "./ServiceCards/CableTvService";
import { getAllServices } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

const Service = (props) => {
  const dispatch = useDispatch();
  const { allServices } = useSelector((state) => state.service);
  const [listingData, setListingData] = useState([]);
  const [serviceProviderModal, setServiceProviderModal] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState({
    id: 1,
    title: "",
  });

  const [serviceList, setServiceList] = useState([]);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  useEffect(() => {
    console.log("allServices :>> ", allServices);
    setServiceList(allServices);
  }, [allServices]);

  useEffect(() => {
    const getServiceListing = async () => {
      await props.serviceListing().then((res) => {
        setListingData(res?.data?.data);
      });
    };

    const getServiceAmbicaListing = async () => {
      await props.getServiceAmbicaAll().then((res) => {
        setListingData(res?.data?.data);
      });
    };

    getServiceListing();
    getServiceAmbicaListing();
  }, [props]);

  const serviceRanders = (id) => {
    switch (id) {
      case 1:
        return <MobileService {...props} coords={coords} />;
      case 2:
        return <DTHService {...props} />;
      case 3:
        return <ElectricityService {...props} />;
      case 4:
        return <BroadbandService {...props} />;
      case 5:
        return <GasService {...props} />;
      case 6:
        return <FastagService {...props} />;
      case 7:
        return <CableTvService {...props} />;
      case 8:
        return <InsuranceService {...props} />;
      case 9:
        return <WaterService {...props} />;
      case 10:
        return <LoanService {...props} />;
      case 11:
        return <PostpaidService {...props} />;
      case 12:
        return <LandlineService {...props} />;
      case 13:
        return <GooglePayService {...props} />;
      default:
        return <></>;
    }
  };

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
      <div className="bg-primary-light pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-service-card border  rounded">
                {/* <!-- menu Navigation start -->  */}
                <ul className="nav secondary-nav alternate p-3 pb-0 main-inner-card">
                  {serviceList.map((item, id) => (
                    <li
                      key={item.id}
                      className="nav-item"
                      onClick={() =>
                        setSelectedServiceTab({
                          id: item._id,
                          title: item.serviceName,
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
                          {item.serviceName}
                        </h5>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* <!-- menu Navigation end -->  */}
                {serviceRanders(selectedServiceTab._id)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================================================= */}
      <DthserviceModal
        key={selectedServiceTab.id}
        isModalShow={serviceProviderModal}
        setModalClose={() => setServiceProviderModal(false)}
        listingData={listingData}
      />
      <hr className="my-0" />
    </>
  );
};

export default Service;
