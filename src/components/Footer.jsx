import React from 'react'
import AImodels from '../svg/AI-Models.svg';
import { Outlet } from 'react-router-dom';

const Footer = ({ Float }) => {

    return (
        <>
            <Outlet />
            <footer className="mt-auto py-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={AImodels} alt="AI Models" className={`img-fluid ai-models  float-${Float}`} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;