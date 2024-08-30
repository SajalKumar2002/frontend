import React from "react";
import AImodels from "../svg/AI-Models.svg";
import { Outlet } from "react-router-dom";

const Footer = ({ float }) => {
  return (
    <>
      <Outlet />
      <div className={`px-5 cstm-footer`}>
        <img
          src={AImodels}
          alt="AI Models"
          className={`img-fluid ai-models-height`}
        />
      </div>
    </>
  );
};

export default Footer;
