import React from "react";
import AddressIcon from "../../Assets/address.svg";
import EmailIcon from "../../Assets/email.svg";
import PhoneIcon from "../../Assets/phone.svg";
import FaxIcon from "../../Assets/fax.svg";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactUs = (props) => {
  const cards = [
    {
      title: "Address",
      subTitle: "153 Williamson Plaza, 09514",
      icon: AddressIcon,
    },
    {
      title: "Email",
      subTitle: "support@htmlstream.com",
      icon: EmailIcon,
    },
    {
      title: "Phone Number",
      subTitle: "+1 (062) 109-9222",
      icon: PhoneIcon,
    },
    {
      title: "Fax",
      subTitle: "+1 (062) 109-9223",
      icon: FaxIcon,
    },
  ];
  return (
    <>
      <div className="space-2 space-top-md-4 space-top-lg-3">
        <div className="w-lg-80 text-center mx-lg-auto">
          <div className="mb-11">
            <h1 className="display-4 font-weight-semi-bold">Got a question?</h1>
            <p className="lead font-weight-normal">
              How can Badipay assistants help you? Whether you have questions or
              you would just like to say hello, contact us.
            </p>
          </div>
        </div>
        <ContactForm {...props} />
        <hr className="my-0" />
        <div className="clearfix space-2">
          <div className="row no-gutters">
            {cards.length > 0 &&
              cards.map((item) => {
                return <ContactCard key={item.title} {...item} />;
              })}
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default ContactUs;
