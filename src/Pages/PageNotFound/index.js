import React from "react";
import NotFound from "../../Assets/404.png";
import routes from "../../Helper/routes";

const PageNotFound = (props) => {
  const redirectHandler = () => {
    props.history.push(routes.home);
  };

  return (
    <section className="error-section">
      <div className="container">
        <div className="row">
          <div className="col-md-11 m-auto">
            <img src={NotFound} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-9 m-auto text-center">
            <div className="sec-heading">
              <h2 className="sec-title">Oops! Page Not Found</h2>
              <p className="sec-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button
              className="btn btn-filled btn-round"
              onClick={redirectHandler}
            >
              <span className="bh"></span> <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
