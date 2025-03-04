import React from "react";
import { Image } from "react-bootstrap";

const Story = () => {
  return (
    <div id="story" style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <h2 className="m-0 text-center font-franklin story-heading">Story</h2>
      <p className="story-description text-center my-0 mx-auto px-3">
        Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma
        = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The
        story centers around 3 eras of cats living in different timelines -
        past, present, future. In each timeline, there are 3 deities that are
        all powerful and are meant to protect the world of Nekos.
      </p>
      <p className="story-description-two text-center my-0 mx-auto px-3">
        However at every junction in time, there is always a darkness that is
        waiting to overthrow the good. Hence, each timeline has its own arch
        nemesis. This means that there will be a total of 4 godly nekos from
        each timeline making a total of 12 godly nekos that will be fully
        animated.
      </p>
      <Image
        height={357}
        className="w-100 story-img pointer-event-none"
        src="/assets/images/story-img.webp"
        alt="story image"
      />
    </div>
  );
};

export default Story;
