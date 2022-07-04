import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";

const FooterTop = () => {
  return (
    <div className="border-bottom">
      <div className="container space-2">
        <div className="row justify-content-md-between">
          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0">
            <h4 className="h6 font-weight-semi-bold">About</h4>
            <ul className="list-group list-group-flush list-group-borderless mb-0">
              <li>
                <Link
                  to={routes.aboutUs}
                  className="list-group-item list-group-item-action"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={routes.contactUs}
                  className="list-group-item list-group-item-action"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={routes.service}
                  className="list-group-item list-group-item-action"
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0">
            <h4 className="h6 font-weight-semi-bold">Account</h4>
            <ul className="list-group list-group-flush list-group-borderless mb-0">
              <li>
                <Link
                  to={routes.refer}
                  className="list-group-item list-group-item-action"
                >
                  Refer
                </Link>
              </li>
              <li>
                <Link
                  to={routes.service}
                  className="list-group-item list-group-item-action"
                >
                  Recharge
                </Link>
              </li>
              <li>
                <Link
                  to={routes.support}
                  className="list-group-item list-group-item-action"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-lg-2 mb-4 mb-lg-0">
            <h4 className="h6 font-weight-semi-bold">Resources</h4>
            <ul className="list-group list-group-flush list-group-borderless mb-0">
              <li>
                <Link
                  to={routes.faq}
                  className="list-group-item list-group-item-action"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to={routes.policy}
                  className="list-group-item list-group-item-action"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  to={routes.terms}
                  className="list-group-item list-group-item-action"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="h6 font-weight-semi-bold">Business opportunity</h4>
            <p>
              Wanted distributors and retailers all over india. Hi speed
              recharge system with high margin, please contact us to start this
              business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
