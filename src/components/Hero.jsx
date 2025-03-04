import Navbar from "@/common/Navbar";
import React from "react";
import { Image } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "1920px" }}>
      <Navbar />
      <div className="d-flex align-items-center position-relative hero-parent justify-content-center">
        <div className="container position-relative z-1">
          <h1 className="hero-heading font-franklin m-0">NEKOZUMA</h1>
          <p className="m-0 text-white">
            The collection of 5555 NFTs on the Solana blockchain. The collection
            serves to be a rising force against the anime meta of collections
            with undoxxed teams and is therefore backed by the team at Nubbies
            NFT & Karmic Labs.
          </p>
          <button className="text-white fw-normal hero-button">
            Connect Wallet
          </button>
        </div>
        <Image
          className="position-relative z-1 pe-none"
          src="/assets/images/hero-img.webp"
          width={557}
          height={557}
          alt="hero img"
        />
        <Image
          className="position-absolute start-0 user-select-none left-vector pe-none"
          style={{ bottom: "-16px" }}
          src="/assets/images/hero-left-vector.webp"
          alt="left vector"
          width={229}
        />
        <Image
          className="position-absolute end-0 bottom-0 z-1 right-vector pe-none"
          src="/assets/images/hero-right-vector.webp"
          width={564}
          height={543}
          alt="hero left vector"
        />
        <Image
          className="position-absolute end-0 bottom-0 blue-box pe-none"
          src="/assets/images/blue-box.webp"
          width={550}
          height={273}
          alt="hero blue box"
        />
      </div>
    </div>
  );
};

export default Hero;
