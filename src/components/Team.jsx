import { TEAM_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const Team = () => {
  return (
    <div id="team" className="team-parent">
      <h2 className="text-center team-heading my-0 mx-auto font-franklin">
        Team
      </h2>
      <div className="d-flex team-card-parent flex-wrap">
        {TEAM_LIST.map((obj, i) => (
          <div key={i} className="team-card">
            <Image
              className="pe-none"
              width={202}
              height={202}
              src={obj.image}
              alt="team image"
            />
            <h3 className="my-0 team-post font-franklin text-center">
              {obj.post}
            </h3>
            <p className="my-0 team-name text-center">{obj.name}</p>
            <p className="my-0 team-description text-center">
              However at every junction in time, there is always a darkness that
              is waiting to overthrow{" "}
            </p>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="d-flex justify-content-center"
            >
              <Image
                style={{ width: "20px" }}
                className="media-icon"
                src="/assets/images/twitter.webp"
                alt="team icon"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
