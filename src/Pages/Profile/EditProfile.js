import React, { useState } from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import phoneFormatter from "phone-formatter";
import EditProfileModal from "./EditProfileModal";
// import {FaRegEdit} from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const EditProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { userData } = useSelector((state) => state.profileReducer);
  const isOpen = () => {
    setIsOpenModal(true);
  };
  const isClose = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <>
      <Menu />
         <div  className="edit-pages">
         <div className="container">
         <div className="row">
         <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="user-image">
                  <img
                    className=""
                    src="https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mx-4 me-4">
                  <div className="w-100 d-flex justify-content-between">
                    <div>
                      <span className="profileName text-capitalize">
                        {userData?.userName || "-"}
                      </span>
                      <span className="mx-3" style={{ color: "#726d6d" }}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="mx-1 text-capitalize">Gujarat</span>
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-primary"
                        title="Edit profile"
                        onClick={isOpen}
                      >
                        {/* <i className="fa-solid fa-pen"></i> */}
                        <FiEdit2 />
                      </button>
                    </div>
                  </div>
                  <h6 className="text-primary text-capitalize">
                    {userData?.role || "-"}
                  </h6>
                  <div className="mt-4 w-100 mb-5">
                    <span style={{ color: "#726d6d" }} className="">
                      Wallet Balance
                    </span>
                    <h3>
                      ${" "}
                      {!!userData?.walletBalance ? userData?.walletBalance : 0}
                    </h3>
                  </div>
                  <hr />
                  <div className="mt-4 w-100">
                    <h6
                      className="text-uppercase mt-4 my-4"
                      style={{ color: "#726d6d" }}
                    >
                      Contact information
                    </h6>
                  </div>
                  <div className="">
                      <span
                        className=""
                      >
                        Phone:
                      </span>
                      <span
                        className="text-primary"
                      >
                        {!!userData?.phoneNumber
                          ? phoneFormatter.format(
                              userData?.phoneNumber,
                              "NNNNN NNNN"
                            )
                          : "-"}
                      </span>
                  </div>
                  <div className="row mt-4">
                      <span
                        className=""
                      >
                        Address:
                      </span>
                      <span  className="fs-5">
                        {!!userData?.address ? userData?.address : "-"}
                      </span>
                  </div>
                  <div className="row mt-4 mb-5">
                      <span
                        className=""
                      >
                        Email:
                      </span>
                      <span
                        
                        className=" text-primary"
                      >
                        {!!userData?.email ? userData?.email : "-"}
                      </span>
                  </div>
                  <hr />
                  <div className="mt-4 w-100">
                    <h6
                      className="text-uppercase mt-4 my-4"
                      style={{ color: "#726d6d" }}
                    >
                      Basic Information
                    </h6>
                  </div>

                  <div className="row mt-4">
                      <span
                        
                        className=""
                      >
                        Birthday:
                      </span>
                      <span  className="">
                        {!!userData?.birthday ? userData?.birthday : "-"}
                      </span>
                  </div>
                  <div className="row mt-4">
                      <span
                        className=""
                      >
                        Gender:
                      </span>
                      <span  className="">
                        {!!userData?.gender ? userData?.gender : "-"}
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         </div>
         </div>
      </div>
         </div>
      {isOpenModal && <EditProfileModal isOpen={isOpen} isClose={isClose} />}
    </>
  );
};

export default EditProfile;
