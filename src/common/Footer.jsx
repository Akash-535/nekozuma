import { MEDIA_ICON_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-parent position-relative d-flex flex-column justify-content-center">
      <Image
        className="position-absolute start-0 bottom-0 footer-left-vector pointer-event-none"
        src="/assets/images/footer-left-vector.webp"
        alt="footer image"
      />
      <Image
        className="position-absolute end-0 bottom-0 footer-right-vector pointer-event-none"
        src="/assets/images/footer-right-vector.webp"
        alt="footer image"
      />
      <Link
        href="#"
        className="footer-heading font-franklin text-white text-center my-0 text-decoration-none mx-auto"
      >
        NEKOZUMA
      </Link>
      <div className="d-flex justify-content-center" style={{ gap: 24 }}>
        {MEDIA_ICON_LIST.map((obj, i) => (
          <Link key={i} href={obj.link} target="_blank">
            <Image
              className="media-icon"
              style={{ width: 32, height: 32 }}
              src={obj.icon}
              alt="media icon"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
