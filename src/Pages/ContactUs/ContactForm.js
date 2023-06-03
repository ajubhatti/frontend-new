import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import { axiosApi } from "../../Helper/api_helper";
import { extra } from "../../Helper/fetch_helper/apiList";
import {
  addContactDetails,
  sendContactDetails,
} from "../../Helper/fetch_helper/contact";

const API_URL = process.env.REACT_APP_FETCH_URL;

const ContactForm = (props) => {
  const ref = useRef();
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    mobileNo: "",
    description: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setApiCall(true);
    setSubmitted(true);
    if (
      values.fullName !== "" &&
      values.email !== "" &&
      values.subject !== "" &&
      values.mobileNo !== "" &&
      values.description !== ""
    ) {
      try {
        console.log({ values });
        await axiosApi.post(API_URL + extra.contact.url, values).then((res) => {
          console.log({ res });
          if (res.data.status == 200) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
          // clearData();
          ref.current.reset();
        });
        // await addContactDetails(values, (res) => {
        // });

        // await sendContactDetails(values).then((res) => {
        //   toast.success(res.message);
        // });
      } catch (err) {
        console.log({ err });
      } finally {
        setApiCall(false);
      }
    }
  };

  const clearData = () => {
    setValues({
      fullName: "",
      email: "",
      subject: "",
      mobileNo: "",
      description: "",
    });
  };

  return (
    <div className="container ">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <h2 className="text-primary font-weight-normal">
          Tell us about <span className="font-weight-semi-bold">yourself</span>
        </h2>
        <p>
          Whether you have questions or you would just like to say hello,
          contact us.
        </p>
      </div>

      <div className="w-lg-80 mx-auto">
        <div className="card">
          <div className="card-body p-4">
            <Form name="login-form" ref={ref}>
              <div className="row">
                <div className="col-sm-6 mb-6">
                  <div className="js-form-message">
                    <label className="form-label">
                      Full Name
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jone done"
                      required
                      name="fullName"
                      value={values.fullName}
                      onChange={handlerChange}
                      className={
                        "form-control" +
                        (submitted && !values.fullName ? " is-invalid" : "")
                      }
                    />
                    {submitted && !values.fullName && (
                      <div className="invalid-feedback">
                        Please enter your name
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-6 mb-6">
                  <div className="js-form-message">
                    <label className="form-label">
                      Your email address
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      name="email"
                      value={values.email}
                      onChange={handlerChange}
                      className={
                        "form-control" +
                        (submitted && !values.email ? " is-invalid" : "")
                      }
                    />
                    {submitted && !values.email && (
                      <div className="invalid-feedback">Email is required</div>
                    )}
                  </div>
                </div>

                <div className="w-100"></div>
                <div className="col-sm-6 mb-6">
                  <div className="js-form-message">
                    <label className="form-label">
                      Subject
                      <span className="text-danger">*</span>
                    </label>

                    <input
                      type="text"
                      placeholder=""
                      required
                      name="subject"
                      value={values.subject}
                      onChange={handlerChange}
                      className={
                        "form-control" +
                        (submitted && !values.subject ? " is-invalid" : "")
                      }
                    />
                    {submitted && !values.subject && (
                      <div className="invalid-feedback">
                        Please enter your name
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-6 mb-6">
                  <div className="js-form-message">
                    <label className="form-label">
                      Your Phone Number
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNo"
                      placeholder="123-45-678"
                      pattern="[7-9]{1}[0-9]{9}"
                      required
                      value={values.mobileNo}
                      onChange={handlerChange}
                      className={
                        "form-control" +
                        (submitted && !values.mobileNo ? " is-invalid" : "")
                      }
                    />
                    {submitted && !values.mobileNo && (
                      <div className="invalid-feedback">
                        Phone Number is required
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="form-label">
                  How can we help you?
                  <span className="text-danger">*</span>
                </label>

                <div className="input-group">
                  <textarea
                    rows="4"
                    name="description"
                    placeholder="Hi there, I would like to ..."
                    required
                    value={values.description}
                    onChange={handlerChange}
                    className={
                      "form-control" +
                      (submitted && !values.description ? " is-invalid" : "")
                    }
                  ></textarea>
                  {submitted && !values.description && (
                    <div className="invalid-feedback">Email is required</div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-wide transition-3d-hover mb-4"
                  disabled={apiCall}
                  onClick={(e) => submitHandler(e)}
                >
                  Submit
                </button>
                <p className="small">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
