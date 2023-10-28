import React from "react";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";

const AboutIcon = () => {
  return (
    <div className="about">
      <Link to="/about">
        <AiFillQuestionCircle className="about-icon" />
      </Link>
    </div>
  );
};

export default AboutIcon;
