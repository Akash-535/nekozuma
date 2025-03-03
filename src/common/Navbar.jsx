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
      <div className="container d-flex justify-content-end">
        <div className="d-flex align-items-center nav-link-parent">
          {NAVBAR_LIST.map((obj, i) => (
            <Link
              key={i}
              href={obj.link}
              className="text-decoration-none text-white fw-normal nav-link"
            >
              {obj.title}
            </Link>
          ))}
          {MEDIA_ICON_LIST.map((obj, i) => (
            <Link key={i} href={obj.link} target="_blank">
              <Image className="media-icon" src={obj.icon} alt="media icon" />
            </Link>
          ))}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-100 d-flex gap-2 flex-column d-md-none position-fixed toggle-parent"
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
