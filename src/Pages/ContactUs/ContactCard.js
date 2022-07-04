import React from "react";

const ContactCard = ({ icon, title, subTitle }) => {
  return (
    <div className="col-sm-6 col-lg-3 u-ver-divider u-ver-divider--none-lg">
      <div className="text-center p-5">
        <figure className="ie-height-56 max-width-8 mx-auto mb-3">
          <img src={icon} alt="" />
        </figure>
        <h2 className="h6 mb-0">{title}</h2>
        <p className="mb-0">{subTitle}</p>
      </div>
    </div>
  );
};

export default ContactCard;
