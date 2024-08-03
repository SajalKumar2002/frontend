import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';

const RadioFormOptions = ({ SrcPath, title, AltText, name, onChange, selectedValue }) => {

    return (
        <Form.Group className='me-5 d-flex flex-row'>
            <Form.Check.Input
                type='radio'
                className='my-auto me-3'
                isValid
                name="source"
                value={name}
                onChange={onChange}
                checked={selectedValue === name}
            />
            <div className='' style={{ width: "8rem" }}>
                <img src={SrcPath} alt={AltText} height='100' />
                <p className='m-0'>{title}</p>
            </div>
        </Form.Group>
    )
}

export default RadioFormOptions;