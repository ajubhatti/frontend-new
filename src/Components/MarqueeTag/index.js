import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueeTag = ({ tickerList }) => {
  return (
    <Marquee>
      {tickerList.map((ticker, index) => {
        return (
          <span
            className="d-block text-secondary text-uppercase"
            key={ticker?._id}
          >
            <span className="mr-2 ml-2">|</span>
            {ticker?.description && ticker?.description.toString()}
          </span>
        );
      })}
    </Marquee>
  );
};

export default MarqueeTag;
