import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../Helper/routes";
import { HeartFill } from "react-bootstrap-icons";
import Logo from "../../Assets/logo.jpg";

const FooterBottom = () => {
  return (
    <div className="py-4">
      <Container className="text-center">
        <Link to={routes.home} className="d-inline-flex align-items-center">
          <img src={Logo} alt="badipay.in" style={{ height: "80px" }} />
        </Link>
        <p className="small text-muted">
          Copyright © {new Date().getFullYear()} <HeartFill color="red" />{" "}
          badipay.in. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default FooterBottom;
