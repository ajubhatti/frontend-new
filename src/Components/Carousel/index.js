import React, { useState, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import Slide from "./Slide";
import "./style.css";

const Carousel = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoplay) {
        nextSlide();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [autoplay]);

  const pause = () => {
    setAutoplay(false);
  };

  const resume = () => {
    setAutoplay(true);
  };

  const prevSlide = () => {
    let slide =
      activeSlide - 1 < 0 ? props.slides?.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  };

  const nextSlide = () => {
    let slide = activeSlide + 1 < props.slides?.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  };

  return (
    <div onMouseEnter={pause} onMouseLeave={resume}>
      {props.slides?.length > 0 &&
        props.slides.map((slide, index) => {
          return (
            <Slide
              background={slide.path}
              active={index === activeSlide}
              key={index}
            />
          );
        })}
      <div className="rightArrow" onClick={nextSlide}>
        <ArrowRightCircle style={{ fontSize: "28px" }} />
      </div>
      <div className="leftArrow" onClick={prevSlide}>
        <ArrowLeftCircle style={{ fontSize: "28px" }} />
      </div>
    </div>
  );
};

export default Carousel;
