import React, { useEffect, useState } from "react";
import { FileEarmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import Analysis from "../../Assets/analysis.svg";
import InTheOffice from "../../Assets/inTheOffice.svg";
import MakeItRain from "../../Assets/makeItRain.svg";
import { getUser } from "../../Helper/LocalStorage";
import { toast } from "react-toastify";

// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";

import FacebookIcon from "../../Assets/facebook_icon.png";
import LinkedInIcon from "../../Assets/linkedin_icon.png";
import TwitterIcon from "../../Assets/twitter_icon.png";
import WhatsAppIcon from "../../Assets/whatsapp_icon.png";

const sharedMsg =
  "Sign up for an account and we both get 10$ free credits. Use this referral code\n";

const Refer = (props) => {
  const [code, setCode] = useState([]);

  useEffect(() => {
    const userDetails = getUser();
    const getReferCode = async () => {
      await props.generateReferCode({ userId: userDetails.id }).then((res) => {
        setCode(res.data.referralCode);
      });
    };

    getReferCode();
  }, [props]);

  // const shareInviteVia = (pathUrl) => [
  //   <TwitterShareButton
  //     windowWidth={800}
  //     windowHeight={800}
  //     url={pathUrl}
  //     title={sharedMsg}
  //     key={"Twitter"}
  //     className="btn btn-sm btn-icon btn-soft-secondary rounded-circle"
  //   >
  //     <img
  //       alt="Twitter"
  //       className="img-fluid rounded-circle"
  //       src={TwitterIcon}
  //     />
  //   </TwitterShareButton>,
  //   <LinkedinShareButton
  //     windowWidth={800}
  //     windowHeight={800}
  //     url={pathUrl}
  //     title={sharedMsg}
  //     summary={sharedMsg}
  //     key={"LinkedIn"}
  //     className="btn btn-sm btn-icon btn-soft-secondary rounded-circle"
  //   >
  //     <img
  //       alt="LinkedIn"
  //       className="img-fluid rounded-circle"
  //       src={LinkedInIcon}
  //     />
  //   </LinkedinShareButton>,
  //   <WhatsappShareButton
  //     windowWidth={800}
  //     windowHeight={800}
  //     url={pathUrl}
  //     title={sharedMsg}
  //     separator=""
  //     key={"WhatsApp"}
  //     className="btn btn-sm btn-icon btn-soft-secondary rounded-circle"
  //   >
  //     <img
  //       alt="WhatsApp"
  //       className="img-fluid rounded-circle"
  //       src={WhatsAppIcon}
  //     />
  //   </WhatsappShareButton>,
  //   <FacebookShareButton
  //     windowWidth={800}
  //     windowHeight={800}
  //     url={pathUrl}
  //     quote={sharedMsg}
  //     description={sharedMsg}
  //     key={"Facebook"}
  //     className="btn btn-sm btn-icon btn-soft-secondary rounded-circle"
  //   >
  //     <img
  //       alt="Facebook"
  //       className="img-fluid rounded-circle"
  //       src={FacebookIcon}
  //     />
  //   </FacebookShareButton>,
  // ];

  return (
    <div className="bg-light">
      <section className="contact">
        <div className="container space-2">
          <div className="row justify-content-md-between">
            <div className="col-md-6 mb-7 mb-md-0">
              <h3>Share a link and earn a bonus</h3>
              <p>
                Get a friend to start working with Front today and earn bonuses
                when they complete their registration.
                <Link to={routes.terms}> Read the terms</Link>
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={code}
                />
                <div
                  className="input-group-append pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    toast.success("Link copied to clipboard.");
                  }}
                >
                  <div className="input-group-text">
                    <FileEarmarkFill />
                  </div>
                </div>
              </div>
              <small className="text-muted">
                Copy or share your referral link with friends
              </small>
              <ul className="list-inline mt-3">
                {/* {shareInviteVia(window.location.origin).map(
                  (platform, index) => {
                    return (
                      <li className="list-inline-item" key={index}>
                        {platform}
                      </li>
                    );
                  }
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section shadow-md pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="iconBox">
                <img src={Analysis} alt="analysis"></img>
                <h5>Refer friends</h5>
                <p>
                  Send referrals to your friends either here or in your app.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iconBox">
                <img src={InTheOffice} alt="InTheOffice"></img>
                <h5>Follow along</h5>
                <p>
                  Follow your friend's progress and send encouraging messages
                  along the way.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iconBox">
                <img src={MakeItRain} alt="MakeItRain"></img>
                <h5>Get paid</h5>
                <p>
                  When your friend starts building, you'll get paid after their
                  first task completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refer;
