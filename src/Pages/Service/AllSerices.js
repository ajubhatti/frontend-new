import React, { useEffect, useState } from "react";
import knowledgebaseCommunityImg from "../../Assets/knowledgebase-community.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllOperators, getAllServices } from "./store/actions";
import { getStateList } from "../../Redux/Actions/Auth/actions";
import "./service.css";
import ServiceRender2 from "./ServiceRender2";

const AllSerices = () => {
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
      {/* ---- services render here ------ */}
      <ServiceRender2 />
      <hr className="my-0" />
    </>
  );
};

export default AllSerices;
