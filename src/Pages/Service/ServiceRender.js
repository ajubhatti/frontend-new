import React, { useEffect, useState } from "react";
import { getAllServices } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import ShowService from "./ShowService";
import "./service.css";
import { icons } from "react-icons";

const ServiceRender = (props) => {
  const dispatch = useDispatch();
  const { allServices } = useSelector((state) => state.serviceReducers);
  const [selectedService, setSelectedService] = useState({});
  const [serviceList, setServiceList] = useState([]);
  const [selectedServiceTab, setSelectedServiceTab] = useState({
    id: 0,
    title: "",
  });

  useEffect(() => {
    if (allServices.length) {
      setServiceList(allServices);
      setSelectedService(allServices[0]);
      setSelectedServiceTab({
        id: allServices[0]?._id,
        title: allServices[0]?.serviceName,
      });
    }
  }, [allServices]);

  useEffect(() => {
    dispatch(getAllServices());
    // dispatch(getAllOperators());
    // dispatch(getStateList());
  }, [dispatch]);

  const userIcon = [
    {
      id: "61ebf005b15b7b52ddc35dff",
      icon: <i className="fa-solid fa-mobile"></i>,
    },
    {
      id: "61ec45cad38e1298b77f7afa",
      icon: <i className="fa-solid fa-tv"></i>,
    },
    {
      id: "61ec4894fbbbc598502443b8",
      icon: <i className="fa-solid fa-bolt"></i>,
    },
    {
      id: "61ec43f29fdd23388b42960a",
      icon: <i className="fa-solid fa-tower-broadcast"></i>,
    },
    {
      id: "61ec48b1fbbbc598502443bb",
      icon: <i className="fa-solid fa-truck-fast"></i>,
    },
    {
      id: "61ec48d8fbbbc598502443be",
      icon: <i className="fa-solid fa-mask-ventilator"></i>,
    },
    {
      id: "61ec48f0fbbbc598502443c1",
      icon: <i className="fa-solid fa-computer"></i>,
    },
    {
      id: "632cc67a55bbb2802f1806ea",
      icon: <i className="fa-solid fa-house-crack"></i>,
    },
    {
      id: "632cca4e55bbb2802f18073e",
      icon: <i className="fa-solid fa-faucet-drip"></i>,
    },
    {
      id: "632cca6055bbb2802f180742",
      icon: <i className="fa-solid fa-land-mine-on"></i>,
    },
    {
      id: "632cca7855bbb2802f180747",
      icon: <i className="fa-brands fa-usps"></i>,
    },
    {
      id: "632cca8555bbb2802f18074d",
      icon: <i className="fa-solid fa-chart-area"></i>,
    },
    {
      id: "632ccad455bbb2802f180751",
      icon: <i className="fa-brands fa-google"></i>,
    },
  ];

  return (
    <>
      <div className="bg-white-light pt-3 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-service-card border  rounded">
                {/* <!-- menu Navigation start -->  */}
                <h6 className="pt-3 px-4 mb-0">Recharge & Bill payment</h6>
                <ul className="nav secondary-nav alternate p-3 pb-0 main-inner-card">
                  {serviceList.map((item) => {
                    return (
                      <li
                        key={item?._id}
                        className={
                          selectedServiceTab?.id === item?._id
                            ? "nav-item active"
                            : "nav-item Inactive"
                        }
                        onClick={() => {
                          setSelectedService(item);
                          setSelectedServiceTab({
                            id: item?._id,
                            title: item?.serviceName,
                          });
                        }}
                      >
                        <div
                          className={
                            selectedServiceTab?.id === item?._id
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          <span className="service-icons">
                            {userIcon.map((icons) => {
                              if (icons.id == item._id) {
                                return <span key={icons.id}>{icons.icon}</span>;
                              }
                            })}
                          </span>
                          <h5 className="service-iconsTitle mb-0">
                            {item.serviceName}
                          </h5>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <h6 className="pt-4 px-4 mb-0">Booking </h6>
                <ul className="nav secondary-nav alternate p-3 pb-0 booing-list mb-2">
                  <li className="nav-item">
                    <div className="nav-link">
                      <i
                        className="fa-solid fa-ticket"
                        style={{ fontSize: "24px" }}
                      ></i>
                      <h5 className="service-iconsTitle mb-0">
                        Ticket Booking
                      </h5>
                    </div>
                  </li>
                </ul>
                {/* <!-- menu Navigation end -->  */}
                <ShowService selectedService={selectedService} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRender;
