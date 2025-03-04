"use client";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
const BackToTop = () => {
  const [scrollTop, setScrollToTop] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const setHendler = () => {
    setScrollToTop(window.scrollY > 200);
  };
  useEffect(() => {
    window.addEventListener("scroll", setHendler);
  });
  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="position-fixed border-0 rounded-circle"
          style={{ bottom: "10px", right: "10px", zIndex: 20 }}
        >
          <Image
            style={{ width: "40px", border: "0" }}
            src="/assets/images/back-to-top.webp"
            alt="back to top image"
          />
        </button>
      )}
    </>
  );
};

export default BackToTop;
