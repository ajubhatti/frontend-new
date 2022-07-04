import React from "react";

const ServiceCard = ({ icon, title, subTitle, amount }) => {
  return (
    <div className="card card-frame mb-3 service-card pointer">
      <div className="card-body p-4">
        <div className="media align-items-center">
          <div className="u-avatar mr-3">{icon}</div>
          <div className="media-body">
            <span className="text-dark">{title}</span>
            <small className="d-block text-secondary">{subTitle}</small>
          </div>
          <div className="media-body text-right">
            <span className="text-primary ml-3">${amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
