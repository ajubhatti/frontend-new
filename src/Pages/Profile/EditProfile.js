import React,{useState} from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import phoneFormatter from "phone-formatter";
import EditProfileModal from "./EditProfileModal";


const EditProfile = () => {
    const [isOpenModal,setIsOpenModal] = useState(false)
    const { userData } = useSelector((state) => state.profile);
    const isOpen = () =>{
        setIsOpenModal(true)
    }
    const isClose = () =>{
        setIsOpenModal((prev)=>!prev) 
    }
    return (<>
        <Menu />
        <div className="container space-2">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div>
                                <img className="w-100 profileImage" src="https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1" alt="Profile" />
                            </div>
                        </div>

                        <div className="col-lg-8 col-sm-12">
                            <div className="mx-4 me-4">

                                <div className="w-100 d-flex justify-content-between">
                            
                                <div>
                                    <span className="profileName text-capitalize">{userData?.userName || "-"}</span>
                                    <span className="mx-3" style={{ color: "#726d6d" }}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span className="mx-1 text-capitalize">Gujarat</span>
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                        <button className="btn btn-primary" title="Edit profile" onClick={isOpen}><i className="fa-solid fa-pen"></i></button>
                                </div>
                                
                                </div>
                                    <h6 className="text-primary text-capitalize">{userData?.role || "-"}</h6>
                                <div className="mt-4 w-100 mb-5">
                                    <span style={{ color: "#726d6d" }} className="fw-500 fs-6">Wallet Balance</span>
                                    <h3>$ {!!userData?.walletBalance ? userData?.walletBalance : 0}</h3>
                                </div>
                                <hr />
                                <div className="mt-4 w-100">
                                    <h6 className="text-uppercase mt-4 my-4" style={{ color: "#726d6d" }}>Contact information</h6>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-sm-4">
                                        <span style={{ fontWeight: "700", maxWidth: "200px" }} className="fs-5">Phone:</span>
                                    </div>
                                    <div className="col-lg-10 col-sm-8">
                                        <span style={{ fontWeight: "700" }} className="fs-5 text-primary">{!!userData?.phoneNumber ? phoneFormatter.format(userData?.phoneNumber, "NNNNN NNNN") : "-"}</span>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-2 col-sm-4">
                                        <span style={{ fontWeight: "700", maxWidth: "200px" }} className="fs-5">Address:</span>
                                    </div>
                                    <div className="col-lg-10 col-sm-8">
                                        <span style={{ fontWeight: "700" }} className="fs-5">{!!userData?.address ? userData?.address: "-"}</span>
                                    </div>
                                </div>
                                <div className="row mt-4 mb-5">
                                    <div className="col-lg-2 col-sm-4">
                                        <span style={{ fontWeight: "700", maxWidth: "200px" }} className="fs-5">Email:</span>
                                    </div>
                                    <div className="col-lg-10 col-sm-8">
                                        <span style={{ fontWeight: "700" }} className="fs-5 text-primary">{!!userData?.email ? userData?.email : "-"}</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-4 w-100">
                                    <h6 className="text-uppercase mt-4 my-4" style={{ color: "#726d6d" }}>Basic Information</h6>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-2 col-sm-4">
                                        <span style={{ fontWeight: "700", maxWidth: "200px" }} className="fs-5">Birthday:</span>
                                    </div>
                                    <div className="col-lg-10 col-sm-8">
                                        <span style={{ fontWeight: "700" }} className="fs-5">{!!userData?.birthday ? userData?.birthday : "-"}</span>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-2 col-sm-4">
                                        <span style={{ fontWeight: "700", maxWidth: "200px" }} className="fs-5">Gender:</span>
                                    </div>
                                    <div className="col-lg-10 col-sm-8">
                                        <span style={{ fontWeight: "700" }} className="fs-5">{!!userData?.gender ? userData?.gender : "-"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            isOpenModal &&
        <EditProfileModal isOpen={isOpen} isClose={isClose} />
        }
    </>);
};

export default EditProfile;
