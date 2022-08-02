import React from "react";
import Slider from "react-slick";
import rBanner_img from "../../Assets/banner-1.jpg";
import rBanner_img01 from "../../Assets/banner-2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div className="sidebar_offer">
        <img src={rBanner_img} alt="inner_img" />
      </div>
      <div className="sidebar_offer">
        <img src={rBanner_img01} alt="inner_img" />
      </div>
    </Slider>
  );
};

export default OfferSlider;
