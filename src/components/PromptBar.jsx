import React, { useState } from 'react';
import axios from 'axios';

const PromptBar = ({ handleResponse }) => {
    const [promptText, setPromptText] = useState("");

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            // const response = await axios.post('https://8115-34-83-116-169.ngrok-free.app/generate_sql_query',
            //     { question: promptText },
            //     {
            //         headers: {
            //             'Content-Type': 'multipart/form-data',
            //         }
            //     }
            // )
            // console.log(response.data.sql_query);
            // postQuery(response.data.sql_query);
            postQuery();
        }
    }

    const postQuery = async (query) => {
        const response = await axios.post("https://c21d-34-106-83-249.ngrok-free.app/generate_response",
            {
                question: promptText,
                sql_query: query
            }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        console.log(response.data);
        handleResponse(
            {
                question: promptText,
                answer: response.data
            }
        );
    }

    return (
        <div className="w-75 text-center mx-auto pb-4">
            <input
                type='text'
                className='w-100 rounded-pill border-0 bg-dark text-light py-3 px-4'
                placeholder='Enter your prompt here'
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default PromptBar;