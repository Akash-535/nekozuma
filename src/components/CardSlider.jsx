import { SLIDER_LIST } from "@/utils/helper";
import React from "react";
import { Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const CardSlider = () => {
  return (
    <div
      id="overview"
      className="overflow-hidden d-flex flex-column align-items-center justify-content-center"
    >
      <div className="d-flex w-100 align-items-center justify-content-center">
        <Marquee direction="left">
          {SLIDER_LIST.map((obj, i) => (
            <div key={i}>
              <Image className="card-img" src={obj} alt="card images" />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="d-flex w-100 align-items-center justify-content-center">
        <Marquee direction="right">
          {SLIDER_LIST.map((obj, i) => (
            <div key={i}>
              <Image className="card-img" src={obj} alt="card bottom image" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CardSlider;
