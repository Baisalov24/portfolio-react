import React from "react";
import {
  linuxLogo,
  htmlLogo,
  cssLogo,
  bootstrapLogo,
  jsLogo,
  reactLogo,
  dockerLogo,
  typescriptLogo,
  githubLogo,
  gcpLogo,
} from "./imports";

import "./style.css";
const logos = [linuxLogo,
  htmlLogo,
  cssLogo,
  bootstrapLogo,
  jsLogo,
  reactLogo,
  dockerLogo,
  typescriptLogo,
  githubLogo,
  gcpLogo,
];

const Tools = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            key={index}
            className="carousel-logo"
          />
        ))}

        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            key={`duplicate-${index}`}
            className="carousel-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
