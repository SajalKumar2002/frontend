import React from "react";
import brandlogo from "../svg/Brandlogo.svg";

import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="position-absolute p-3 ps-5 login-navbar">
        <img src={brandlogo} alt="LLMBOXX" className="h-100" />
      </div>
      <div className="position-absolute bottom-0 end-0">
        <Footer float="true" />
      </div>
      <div className="row m-0 vh-100">
        <div className="col align-self-center ps-5">
          <p className="text-white display-3 lh-1 fw-normal">
            Accelerate
            <br />
            innovation and time
            <br />
            to value with LLMs
          </p>
        </div>
        <div className="col align-self-center">
          <div className="row justify-content-end me-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
