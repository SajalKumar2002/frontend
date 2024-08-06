import React, { useState, useEffect, useContext } from 'react';
import axios from '../http';
import { Form, Spinner } from 'react-bootstrap';

const LLMModels = ({ rounded, onChange, defaultValue }) => {
    const [llmModels, setLlmModels] = useState(
        defaultValue == null ? [] : [defaultValue]
    )

    const fetchModels = async () => {
        const response = await axios.get("/api/llm")
        setLlmModels(response.data);
    }

    useEffect(() => {
        fetchModels()
    }, [])

    if (!llmModels || llmModels.length === 0) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <Form.Select name='existingmodel' defaultValue={defaultValue} className={`border-dark ${rounded}`} onChange={onChange}>
                <option value="">Select a model</option>
                {llmModels.map((model, index) => (
                    <option
                        key={index}
                        name={model.model_name}
                        value={model.model_name}
                    >{model.model_name}</option>
                ))}
            </Form.Select>
        </>
    )
}

export default LLMModels