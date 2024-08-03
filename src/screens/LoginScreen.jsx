import React from 'react';
import brandlogo from '../svg/Brandlogo.svg';

import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <div className='login-screen'>
      <div className="fixed-top p-3 ps-5">
        <img src={brandlogo} alt='LLMBOXX' className='w-25' />
      </div>
      <div className="row m-0 vh-100">
        <div className="col align-self-center ps-5">
          <p className='text-white display-3 lh-1 fw-normal'>Accelerate<br />innovation and time<br />to value with LLMs</p>
        </div>
        <div className="col align-self-center">
          <div className='row justify-content-end me-4'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;
