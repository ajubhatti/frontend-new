import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import iconAccount from "../../Assets/iconAccount.svg";
import iconProAccount from "../../Assets/iconProAccount.svg";
import iconGrowingBusiness from "../../Assets/iconGrowingBusiness.svg";
import icon48 from "../../Assets/icon48.svg";
import icon39 from "../../Assets/icon39.svg";
import icon20 from "../../Assets/icon20.svg";
import visaCard from "../../Assets/visa-card.svg";
import ieCirclesCta from "../../Assets/ie-circles-cta.svg";
import marketingStrategy from "../../Assets/marketingStrategy.svg";
import appDevelopment from "../../Assets/appDevelopment.svg";
import businessAnalysis from "../../Assets/businessAnalysis.svg";
import Carousel from "../../Components/Carousel";
import Marquee from "react-fast-marquee";

const Home = (props) => {
  const [bannerList, setBannerList] = useState([]);
  const [tickerList, setTickerList] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      await props.getBanner().then((res) => {
        setBannerList(res.data);
      });
    };

    const getTickers = async () => {
      await props.getTicker().then((res) => {
        setTickerList(res.data);
      });
    };

    getBanners();
    getTickers();
  }, []);

  return (
    <>
      {/* <Banner bannerList={bannerList} /> */}
      <div className="slide">
        <Carousel slides={bannerList} />
      </div>
      <div className="space-2">
        <Marquee>
          {tickerList.map((theElement, index) => {
            return (
              <span
                className="d-block text-secondary text-uppercase"
                key={index}
              >
                {theElement.description.toString()}
              </span>
            );
          })}
        </Marquee>
      </div>
      <div className="container space-2">
        <div className="row align-items-lg-center">
          <div className="col-lg-5 mb-7 mb-lg-0">
            <div className="pr-lg-4">
              <span className="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span className="small font-weight-semi-bold btn-icon__inner">
                  01.
                </span>
              </span>
              <h2 className="h4 font-weight-semi-bold text-primary">
                Smart evaluation model
              </h2>
              <p className="mb-0">
                Sophisticated model providing analysis for the entire blockchain
                asset ecosystem. Strategic insights based on research,
                trends,and 50+ unique indicators to properly evaluate investment
                potential and risk.
              </p>
            </div>
          </div>

          <div id="SVGmarketingStrategy" className="col-lg-7">
            <figure className="ie-marketing-strategy">
              <img src={marketingStrategy} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="container space-1">
        <div className="row align-items-lg-center">
          <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div className="pl-lg-4">
              <span className="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span className="small font-weight-semi-bold btn-icon__inner">
                  02.
                </span>
              </span>
              <h2 className="h4 font-weight-semi-bold text-primary">
                Safe. Stable. Secure.
              </h2>
              <p className="mb-0">
                Advanced distributed system architecture built to protect
                against DDoS and other potential threats. More than 98% of
                digital assets stored in multi-signature,cold wallets. Security
                protocols are fully aligned and compliant with industry best
                practices.
              </p>
            </div>
          </div>

          <div id="SVGappDevelopment" className="col-lg-7 order-lg-1">
            <figure className="ie-app-development">
              <img src={appDevelopment} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="container space-2">
        <div className="row align-items-lg-center">
          <div className="col-lg-5 mb-7 mb-lg-0">
            <div className="pr-lg-4">
              <span className="btn btn-icon btn-soft-primary rounded-circle mb-3">
                <span className="small font-weight-semi-bold btn-icon__inner">
                  03.
                </span>
              </span>
              <h2 className="h4 font-weight-semi-bold text-primary">
                Now, zero fees for everyone
              </h2>
              <p className="mb-0">
                Empowering millions of users, across 130+ countries. Over $1
                Billion in assets. 24/7/365 customer access and support. A
                trusted world-class operation designed specifically for
                knowledgeable crypto-investors.
              </p>
            </div>
          </div>

          <div id="SVGbusinessAnalysis" className="col-lg-7">
            <figure className="ie-business-analysis">
              <img src={businessAnalysis} alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="container space-2">
        <div className="w-lg-50 text-center mx-lg-auto mb-9">
          <h2 className="font-weight-medium mb-4">
            Always know what you'll pay.
          </h2>
          <p>
            Once you're setup, instantly withdraw payments or deposit into your
            bank account within 2-3 business days.
          </p>
        </div>
        <div className="row no-gutters align-items-lg-center mb-11">
          <div className="col-lg-7 shadow-lg rounded">
            <div className="text-center py-11 px-5 px-sm-9">
              <header className="mb-9">
                <div className="mb-1">
                  <span className="display-4 text-primary font-weight-medium">
                    1.5%
                  </span>
                  <span className="badge badge-indigo badge-pill align-top ml-1">
                    +0.5 USD
                  </span>
                </div>
                <p>per successful transaction</p>
              </header>

              <div className="row justify-content-sm-center align-items-sm-center mb-5">
                <div className="col-sm-5">
                  <figure className="ie-height-56 max-width-8 mx-auto mb-2">
                    <img src={iconAccount} alt="" />
                  </figure>
                  <h4 className="h6">Account creation</h4>
                </div>

                <div className="col-sm-1 my-3 my-sm-0">
                  <span className="font-size-3 text-primary font-weight-medium">
                    +
                  </span>
                </div>

                <div className="col-sm-5">
                  <figure className="ie-height-56 max-width-8 mx-auto mb-2">
                    <img src={iconProAccount} alt="" />
                  </figure>
                  <h4 className="h6">Professional account</h4>
                </div>
              </div>

              <div className="mb-7">
                <p className="small">
                  Included for 3 months,
                  <br />
                  then $2.5/monthly included VAT
                </p>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-wide btn-pill transition-3d-hover"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="col-lg-5 bg-primary">
            <div className="py-9 px-5 px-sm-9">
              <ul className="list-unstyled">
                <li className="media pb-3">
                  <span className="btn btn-icon btn-xs btn-soft-white rounded-circle mt-1 mr-3">
                    <span className="fas fa-angle-right btn-icon__inner"></span>
                  </span>
                  <div className="media-body">
                    <h4 className="h6 text-white mb-1">135+ currencies</h4>
                    <p className="text-white-70">
                      Process charges and display prices in your customer's.
                    </p>
                  </div>
                </li>
                <li className="border-top opacity-md py-3"></li>
                <li className="media">
                  <span className="btn btn-icon btn-xs btn-soft-white rounded-circle mt-1 mr-3">
                    <span className="fas fa-angle-right btn-icon__inner"></span>
                  </span>
                  <div className="media-body">
                    <h4 className="h6 text-white mb-1">Global support</h4>
                    <p className="text-white-70">
                      Businesses in 25+ countries can accept payments.
                    </p>
                  </div>
                </li>
                <li className="border-top opacity-md py-3"></li>
                <li className="media">
                  <span className="btn btn-icon btn-xs btn-soft-white rounded-circle mt-1 mr-3">
                    <span className="fas fa-angle-right btn-icon__inner"></span>
                  </span>
                  <div className="media-body">
                    <h4 className="h6 text-white mb-1">
                      Secure payment info collection
                    </h4>
                    <p className="text-white-70 mb-0">
                      Use our libraries to collect payment information without
                      sensitive data.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-lg-75 mx-lg-auto">
          <div className="media d-block d-sm-flex">
            <figure className="ie-height-90 w-100 max-width-15 mr-4 mb-3 mb-sm-0">
              <img src={iconGrowingBusiness} alt="" />
            </figure>
            <div className="media-body">
              <h4 className="h6">Grow your business with BadiPay</h4>
              <p>
                From startups to Fortune 500s, explore how millions of
                businesses use BadiPay to start and scale their companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container space-2">
        <div className="w-lg-50 text-center mx-lg-auto mb-5">
          <h2 className="font-weight-medium mb-4">
            Simple and affordable.
            <br />
            Pay as you go.
          </h2>
          <p>
            From boarding passes to movie tickets, there's pretty much nothing
            you can't store with BadiPay. Plus, you can take your money further
            with exclusive offers, discounts, and even reminders to use your
            loyalty card when you enter the store.
          </p>
        </div>
        <div className="text-center mx-auto mb-11"></div>
        <div className="row justify-content-md-center mb-11">
          <div className="col-md-4 col-lg-3 mb-9 mb-lg-0">
            <div className="u-indicator-dots text-center px-lg-4">
              <figure className="ie-height-72 max-width-10 mx-auto mb-3">
                <img src={icon48} alt="" />
              </figure>
              <h4 className="h6">Create an account</h4>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-9 mb-lg-0">
            <div className="u-indicator-dots text-center px-lg-4">
              <figure className="ie-height-72 max-width-10 mx-auto mb-3">
                <img src={icon39} alt="" />
              </figure>
              <h4 className="h6">Link your bank account</h4>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="text-center px-lg-4">
              <figure className="ie-height-72 max-width-10 mx-auto mb-3">
                <img src={icon20} alt="" />
              </figure>
              <h4 className="h6">Your account is validated</h4>
            </div>
          </div>
        </div>
        <div className="max-width-50 mx-auto">
          <img className="img-fluid" src={visaCard} alt="visa card" />
        </div>
      </div>
      <div className="position-relative">
        <div className="container space-2">
          <div className="row justify-content-lg-between align-items-lg-center text-center text-lg-left">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h3 className="h2 text-white font-weight-semi-bold mb-0">
                Create better experiences with Badi Pay
              </h3>
            </div>
          </div>
        </div>
        <div className="gradient-overlay-half-primary-v3 position-absolute top-0 right-0 bottom-0 left-0 z-index-n1 overflow-hidden">
          <figure className="ie-circles-cta">
            <img src={ieCirclesCta} alt="" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Home;
