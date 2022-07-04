import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import knowledgebaseCommunityImg from "../../Assets/knowledgebase-community.svg";
import Icon62 from "../../Assets/icon62.svg";
import routes from "../../Helper/routes";

const Support = (props) => {
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const getSupportListing = async () => {
      await props.supportListing().then((res) => {
        setListingData(res.data);
      });
    };

    getSupportListing();
  }, [props]);

  const submitRedirect = () => {
    props.history.push(routes.contactUs);
  };

  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-md-between">
            <div className="col-md-6 space-2 space-bottom-lg-3 space-top-md-5">
              <div className="mb-5">
                <h1 className="font-weight-medium">How can we help?</h1>
              </div>
            </div>
            <div className="col-md-5 align-self-md-end d-none d-md-inline-block">
              <figure className="ie-knowledgebase-community mb-n3">
                <img src={knowledgebaseCommunityImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="space-2 space-md-3">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="Payment Related"
          >
            <div className="row">
              <div className="col-md-4 col-lg-3 mb-7 mb-md-0">
                <Nav variant="pills" className="flex-column">
                  {listingData.length > 0 &&
                    listingData.map((item, index) => {
                      return (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={item.title}>
                            {item.title}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                </Nav>
              </div>
              <div className="col-md-8 col-lg-9">
                <Tab.Content>
                  {listingData.length > 0 &&
                    listingData.map((item, index) => {
                      return (
                        <Tab.Pane eventKey={item.title} key={index}>
                          {item.subSupportdetail.length > 0 &&
                            item.subSupportdetail.map((x, i) => {
                              return (
                                <div className="space-bottom-1">
                                  <div className="mb-3">
                                    <h2 className="h5">{x.title}</h2>
                                  </div>
                                  <p>{x.description}</p>
                                </div>
                              );
                            })}
                        </Tab.Pane>
                      );
                    })}
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
      <div className="bg-light">
        <div className="container space-2 space-md-3">
          <div className="w-md-80 w-lg-50 text-center mx-md-auto">
            <figure className="ie-height-72 w-100 max-width-10 mx-auto mb-6">
              <img src={Icon62} alt="" />
            </figure>
            <div className="mb-5">
              <h2 className="h3 font-weight-medium">
                Still no luck? We can help!
              </h2>
            </div>
            <div className="mb-4">
              <button
                className="btn btn-primary transition-3d-hover"
                onClick={submitRedirect}
              >
                Submit a Request
              </button>
            </div>
            <p>Contact us and we'll get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </>
  );
};

export default Support;
