import React, { useState } from 'react';
import brandlogo from '../svg/Brandlogo.svg';

import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <div className='login-screen'>
      <div className="row m-0 vh-100">
        <div className="col p-3">
          <div className="row">
            <img src={brandlogo} alt='LLMBOXX' className='w-50' />
          </div>
          <div className="row h-75 align-content-center ">
            <p className='text-white display-3 lh-1 fw-normal'>Accelerate<br />innovation and time<br />to value with LLMs</p>
          </div>
        </div>
        <div className="col d-flex">
          <div className="row w-100 align-items-center justify-content-end pe-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;
