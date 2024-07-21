import React from 'react'

const PromptBar = () => {
    return (
        // Input Bar
        <div className="w-75 text-center mx-auto pb-4">
            <input type='text' className='w-100 rounded-pill border-0 bg-dark text-light py-3 px-4' placeholder='Enter your prompt here' />
        </div>
    )
}

export default PromptBar;