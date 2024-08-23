import React from 'react'
import AImodels from '../svg/AI-Models.svg';
import { Outlet } from 'react-router-dom';

const Footer = ({ Float }) => {

    return (
        <>
            <Outlet />
            <img src={AImodels} alt="AI Models" className={`img-fluid ai-models float-${Float}`} />
        </>
    )
}

export default Footer;