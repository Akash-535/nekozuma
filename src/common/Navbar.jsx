"use client";
import { MEDIA_ICON_LIST, NAVBAR_LIST } from "@/utils/helper";
import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="position-relative w-100 d-flex justify-content-between align-items-center nav-parent">
      <Link href="#" className="position-absolute nav-logo">
        <Image src="/assets/images/navbar-img.webp" alt="logo" />
      </Link>
      <div className="container d-flex justify-content-md-end justify-content-center pt-md-0 pt-2 mt-md-0 mt-4">
        <div
          className={`d-flex align-items-center flex-md-row justify-content-center flex-column end-md-0 nav-link-parent z-2 ${
            open ? "start-0" : "start-100"
          }`}
        >
          {NAVBAR_LIST.map((obj, i) => (
            <Link
              onClick={() => setOpen(!open)}
              key={i}
              href={obj.link}
              className="text-decoration-none text-white fw-normal nav-link"
            >
              {obj.title}
            </Link>
          ))}
          <div className="d-flex gap-3">
            {MEDIA_ICON_LIST.map((obj, i) => (
              <Link key={i} href={obj.link} target="_blank">
                <Image className="media-icon" src={obj.icon} alt="media icon" />
              </Link>
            ))}
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-100 d-flex gap-2 flex-column d-md-none justify-content-center align-items-end w-100 z-3"
        >
          <span className={`toggle-button ${open ? "open" : "close"}`}></span>
          <span
            className={`toggle-button ${open ? "open-two" : "close"}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
