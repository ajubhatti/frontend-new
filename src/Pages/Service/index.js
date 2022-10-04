import React, { useEffect, useState } from "react";
import knowledgebaseCommunityImg from "../../Assets/knowledgebase-community.svg";
import DthserviceModal from "../../Components/Modal/DthserviceModal";
import { getAllOperators, getAllServices } from "./store/actions";
import { useDispatch } from "react-redux";
import { getStateList } from "../../Redux/Actions/Auth/actions";
import ServiceRender from "./ServiceRender";
import "./service.css";

const Service = (props) => {
  const dispatch = useDispatch();

  const [listingData, setListingData] = useState([]);
  const [serviceProviderModal, setServiceProviderModal] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState({
    id: 0,
    title: "",
  });

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
      {/* ------ service starts here ----- */}
      <ServiceRender />

      {serviceProviderModal && (
        <DthserviceModal
          key={selectedServiceTab.id}
          isModalShow={serviceProviderModal}
          setModalClose={() => setServiceProviderModal(false)}
          listingData={listingData}
        />
      )}
      <hr className="my-0" />
    </>
  );
};

export default Service;
