import { SLIDER_LIST, SLIDER_TWO_LIST } from "@/utils/helper";
import React from "react";
import { Image } from "react-bootstrap";

const CardSlider = () => {
  return (
    <div
      className="overflow-hidden d-flex flex-column align-items-center justify-content-center mx-auto"
      style={{ maxWidth: "1920px" }}
    >
      <div className="d-flex w-100 slider-one align-items-center justify-content-center">
        {SLIDER_LIST.map((obj, i) => (
          <div key={i}>
            <Image width={320} src={obj} />
          </div>
        ))}
      </div>
      <div className="d-flex w-100 slider-two align-items-center justify-content-center">
        {SLIDER_TWO_LIST.map((obj, i) => (
          <div key={i}>
            <Image width={320} src={obj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
