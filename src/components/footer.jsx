import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com">
        <FontAwesomeIcon icon={BrandIcons.faTwitterSquare} />
      </a>
      <a href="https://facebook.com">
        <FontAwesomeIcon icon={BrandIcons.faFacebookSquare} />
      </a>
      <a href="https://instagram.com">
        <FontAwesomeIcon icon={BrandIcons.faInstagramSquare} />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={BrandIcons.faGithubSquare} />
      </a>
    </div>
  );
}

export default Footer;
