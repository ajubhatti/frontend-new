import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = ({ bannerList }) => {
  const ShowImage = (data, index) => {
    let imgData = data.path;
    return (
      <img
        src={imgData}
        alt={index}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
    );
  };

  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="u-hero-v1">
      <Slider {...settings}>
        {bannerList.length > 0 &&
          bannerList.map((imgDt, index) => {
            return <div key={index}>{ShowImage(imgDt, index)}</div>;
          })}
      </Slider>
    </div>
  );
};

export default Banner;
