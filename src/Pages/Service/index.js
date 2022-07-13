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
            <Tabs defaultIndex={Number(1)} onTabClick={console.log}>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <TabItem label={item.name} index={item.id} key={item}>
                      {serviceRanders(item.id)}
                    </TabItem>
                  );
                })}
            </Tabs>
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default Service;
