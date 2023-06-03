import React, { useEffect, useState } from "react";
import { FileEarmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import Analysis from "../../Assets/analysis.svg";
import InTheOffice from "../../Assets/inTheOffice.svg";
import MakeItRain from "../../Assets/makeItRain.svg";
import { getUser } from "../../Helper/LocalStorage";
import { toast } from "react-toastify";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
} from "react-share";

const sharedMsg =
  "Sign up for an account and we both get 10$ free credits. Use this referral code\n";


const Refer = (props) => {
  const [code, setCode] = useState([]);
  const url = `http://badipay.co.in/register?token=${code}`;
  useEffect(() => {
    const userDetails = getUser();
    const getReferCode = async () => {
      await props.generateReferCode({ userId: userDetails.id }).then((res) => {
        setCode(res.data.referralCode);
      });
    };
    getReferCode();
    
  }, [props]);

  
  const shareInviteVia = () => [
    <TwitterShareButton
      windowWidth={800}
      windowHeight={800}
      url={url}
      title={sharedMsg}
      key={"Twitter"}
    >
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>,
    <LinkedinShareButton
      windowWidth={800}
      windowHeight={800}
      url={url}
      title={sharedMsg}
      summary={sharedMsg}
      key={"LinkedIn"}
    >
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>,
    <WhatsappShareButton
      windowWidth={800}
      windowHeight={800}
      url={url}
      title={sharedMsg}
      separator=""
      key={"WhatsApp"}
    >
      <WhatsappIcon size={32} round={true} />
    </WhatsappShareButton>,
    <FacebookShareButton
      windowWidth={800}
      windowHeight={800}
      url={url}
      quote={sharedMsg}
      description={sharedMsg}
      key={"Facebook"}
    >
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>,
  ];

  return (
    <>
      <section className="contact-refer">
        <div className="container ">
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
                {shareInviteVia().map(
                  (platform, index) => {
                    return (
                      <li className="list-inline-item" key={index}>
                        {platform}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section shadow-md pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={Analysis}
                  alt="analysis"
                  height={250}
                  className="m-2"
                ></img>
                <div className="card-body">
                  <div className="iconBox">
                    <h5>Refer friends</h5>
                    <p>
                      Send referrals to your friends either here or in your app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={InTheOffice}
                  alt="InTheOffice"
                  height={250}
                  className="m-2"
                ></img>
                <div className="card-body">
                  <div className="iconBox">
                    <h5>Follow along</h5>
                    <p>
                      Follow your friend's progress and send encouraging
                      messages along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={MakeItRain}
                  alt="MakeItRain"
                  height={250}
                  className="m-2"
                ></img>
                <div className="card-body">
                  <div className="iconBox">
                    <h5>Get paid</h5>
                    <p>
                      When your friend starts building, you'll get paid after
                      their first task completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Refer;
