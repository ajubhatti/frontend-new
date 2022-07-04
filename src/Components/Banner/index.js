import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Buffer } from "buffer";

const Banner = ({ bannerList }) => {
  const ShowImage = (data, index) => {
    let imgData = new Buffer.from(data.data).toString("base64");
    return (
      <img
        src={`data:image/*;base64,${imgData}`}
        alt={index}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
    );
  };

  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="u-hero-v1">
      <Slider {...settings}>
        {bannerList.length > 0 &&
          bannerList.map((imgDt, index) => {
            return <div key={index}>{ShowImage(imgDt.img, index)}</div>;
          })}
      </Slider>
    </div>
  );
};

export default Banner;
