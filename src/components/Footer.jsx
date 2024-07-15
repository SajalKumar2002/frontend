import React, { useEffect, useState } from 'react'
import AImodels from '../svg/AI-Models.svg';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const [Float, setFloat] = useState("")

    useEffect(() => {
        setFloat(location.pathname == '/' ? "end" : "start")
    }, [location])

    return (
        <div className='fixed-bottom container'>
            <img src={AImodels} alt='AI Models' className={`img-fluid ai-models mb-2 float-${Float}`} />
        </div>
    )
}

export default Footer