import React from "react";
import ProfilePicture from "../assets/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <div className="info">
      <img src={ProfilePicture} alt="Profile Picture" className="info--pp" />
      <h1 className="info--name">Hamza Shahid</h1>
      <h3 className="info--occupation">Backend Systems Developer</h3>
      <h5 className="info--website">hamzashahid.xyz</h5>
      <a href="https://gmail.com" className="info--email">
        <FontAwesomeIcon icon={Icons.faEnvelope} aria-hidden="true" />
        <span className="info--email-label">Email</span>
      </a>
      <a href="https://linkedin.com" className="info--linkedin">
        <FontAwesomeIcon icon={BrandIcons.faLinkedin} aria-hidden="true" />
        <span className="info--linkedin-label">LinkedIn</span>
      </a>
    </div>
  );
}

export default Info;
