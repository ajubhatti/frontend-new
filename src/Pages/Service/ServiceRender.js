import React, { useEffect, useState } from "react";
import { getAllOperators, getAllServices } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import ShowService from "./ShowService";
import { getStateList } from "../../Redux/Actions/Auth/actions";
import "./service.css";

const ServiceRender = (props) => {
  const dispatch = useDispatch();
  const { allServices } = useSelector((state) => state.service);
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
    }
  }, [allServices]);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllOperators());
    dispatch(getStateList());
  }, [dispatch]);

  return (
    <div className="bg-primary-light pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-service-card border  rounded">
              {/* <!-- menu Navigation start -->  */}
              <ul className="nav secondary-nav alternate p-3 pb-0 main-inner-card">
                {serviceList.map((item) => (
                  <li
                    key={item._id}
                    className="nav-item"
                    onClick={() => {
                      setSelectedService(item);
                      setSelectedServiceTab({
                        id: item._id,
                        title: item.serviceName,
                      });
                    }}
                  >
                    <div
                      className={
                        selectedServiceTab._id === item._id
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      <span className="service-icons">
                        {/* <FontAwesomeIcon icon={item?.serviceImage} /> */}
                      </span>
                      <h5 className="service-iconsTitle mb-0">
                        {item.serviceName}
                      </h5>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <!-- menu Navigation end -->  */}
              <ShowService selectedService={selectedService} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRender;
