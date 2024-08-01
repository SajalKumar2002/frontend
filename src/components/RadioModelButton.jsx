import React from 'react';
import { Form } from 'react-bootstrap';

const RadioModelButton = ({ name, value, label, checked, onChange }) => {
    return (
        <>
            <Form.Group>
                <Form.Check
                    type='radio'
                    className='fs-5'
                    name={name}
                    onChange={onChange}
                    checked={checked}
                    value={value}
                    label={label}
                />
            </Form.Group>
        </>
    )
}

export default RadioModelButton