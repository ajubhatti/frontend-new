import React from "react";

const Slide = (props) => {
  let slideStyle = { backgroundImage: `url( ${props.background})` };
  return (
    <div
      className="slider__slide"
      data-active={props.active}
      style={slideStyle}
    ></div>
  );
};

export default Slide;
