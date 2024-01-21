import axios from "axios";
import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [html, setHTML] = useState({ __html: "" });

  const url =
    window.location.hostname === "localhost"
      ? `https://cors-anywhere.herokuapp.com/http://localhost:4000/files/privacy-policy.html`
      : `https://cors-anywhere.herokuapp.com/https://api.badipay.co.in/files/privacy-policy.html`;

  const fetchInfo = () => {
    return axios.get(url).then((res) => {
      console.log({ res });
      setHTML(res.data);
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    console.log({ html });
  }, [html]);

  // useEffect(() => {
  //   async function createMarkup() {
  //     let response;
  //     response = await fetch(url, {
  //       method: "GET",
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const backendHtmlString = await response.text();

  //     console.log(backendHtmlString);
  //     return { __html: backendHtmlString };
  //   }
  //   createMarkup().then((result) => {
  //     console.log({ result });
  //     setHTML(result);
  //   });
  // }, []);

  return (
    <section className="privacy-policy">
      <p dangerouslySetInnerHTML={html} />
      <div className="container space-top-2 space-top-md-4 space-bottom-1 overflow-hidden">
        <div className="w-lg-80 mx-lg-auto">
          <div className="card shadow-sm">
            <div className="card-header position-relative gradient-half-primary-v1 space-top-2 space-bottom-3 rounded-top-pseudo px-7 px-md-9">
              <h1 className="text-white font-weight-semi-bold">
                Privacy &amp; Policy
              </h1>
              <p className="text-white-70">
                Effective Date: : March 27, 2018 (
                <a className="text-light" href="#">
                  view archived versions
                </a>
                )
              </p>
            </div>
            <div className="card-body p-7 p-md-9">
              <div className="mb-7">
                <div className="mb-3">
                  <p>
                    Thank you for using BadiPay. This refund policy outlines the
                    terms and conditions for requesting a refund for our mobile
                    application BadiPay. Please read this policy carefully
                    before making a purchase or requesting a refund.
                  </p>
                  <ol>
                    <li>
                      <h6 className="h5 text-primary font-weight-semi-bold">
                        Refund Eligibility
                      </h6>
                      <p>
                        We strive to provide a satisfactory user experience, and
                        if you encounter any issues with the App, we encourage
                        you to contact our customer support first to resolve the
                        problem. However, if you are not satisfied with your
                        purchase, you may be eligible for a refund under the
                        following circumstances: a. Technical Issues: You may
                        request a refund if you encounter significant technical
                        difficulties that prevent you from using the App as
                        intended. We may require supporting evidence or
                        documentation of the issue to process your refund
                        request. b. Unauthorized Purchases: If you notice
                        unauthorized charges made on your account for the App,
                        please contact us immediately, and we will investigate
                        the issue. If it is determined that the charges were
                        unauthorized, a refund will be issued.
                      </p>
                    </li>
                    <li>
                      <h6 className="h5 text-primary font-weight-semi-bold">
                        Refund Process
                      </h6>
                      <p>
                        To request a refund, please follow these steps: a.
                        Contact Customer Support: Before initiating a refund
                        request, we encourage you to reach out to our customer
                        support team to address any issues or concerns you may
                        have. They will make every effort to assist you and
                        resolve the problem. b. Refund Request: If the issue
                        remains unresolved, you can submit a refund request by
                        providing the following information:
                        <ul>
                          <li>Your full name </li>
                          <li>Email address associated with your account </li>
                          <li>Order/Transaction ID </li>
                          <li>Reason for the refund request </li>
                          <li>
                            Supporting evidence or documentation, if applicable
                          </li>
                        </ul>
                      </p>
                      <p>
                        c. Refund Decision: Once we receive your refund request,
                        we will evaluate it based on the eligibility criteria
                        mentioned in Section 1. We reserve the right to approve
                        or deny refund requests at our discretion. We will
                        notify you of the refund decision via email. d. Refund
                        Processing: If your refund request is approved, we will
                        initiate the refund process as soon as possible. Refunds
                        are typically issued to the original payment method used
                        during the purchase. However, the refund process may
                        vary depending on the platform or app store through
                        which the App was purchased
                      </p>
                    </li>
                    <li>
                      <h6 className="h5 text-primary font-weight-semi-bold">
                        Non-Refundable Items{" "}
                      </h6>
                      <p>
                        Certain circumstances may make a purchase ineligible for
                        a refund. These circumstances include, but are not
                        limited to: a. Subscription Services: If you have
                        subscribed to a recurring service or purchased a
                        subscription within the App, refunds may not be
                        available for unused portions of the subscription
                        period. However, you can cancel the subscription to
                        prevent future charges. b. In-App Purchases: Refunds for
                        in-app purchases made within the App are subject to the
                        policies of the respective app store or platform. Please
                        refer to the refund policies of the relevant app store
                        for more information.{" "}
                      </p>
                    </li>
                    <li>
                      <h6 className="h5 text-primary font-weight-semi-bold">
                        Policy Modifications
                      </h6>
                      <p>
                        We reserve the right to modify or update this refund
                        policy at any time. Any changes made to this policy will
                        be effective upon posting the revised version on our
                        website or within the App. We encourage you to review
                        this policy periodically for any updates.
                      </p>
                    </li>
                    <li>
                      <h6 className="h5 text-primary font-weight-semi-bold">
                        Contact Us
                      </h6>
                      <p>
                        If you have any questions or need further assistance
                        regarding our refund policy, please contact our customer
                        support team at [contact information]. By using the App
                        and making a purchase, you agree to abide by this refund
                        policy.
                      </p>
                      <p>Last updated: [Date]</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
