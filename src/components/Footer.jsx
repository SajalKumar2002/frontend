import React, { useEffect, useState } from 'react'
import AImodels from '../svg/AI-Models.svg';
import { Outlet } from 'react-router-dom';

const Footer = ({ Float }) => {

    return (
        <>
            <Outlet />
            <div className='p-3 footer'>
                <img src={AImodels} alt='AI Models' className={`img-fluid ai-models float-${Float}`} />
            </div>
        </>
    )
}

export default Footer;