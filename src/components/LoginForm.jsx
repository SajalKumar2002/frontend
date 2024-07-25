import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Form,Button } from 'react-bootstrap';

function LoginForm() {
    const redirect = useNavigate();

    const HandleSubmit = (event) => {
        event.preventDefault();
        console.log("SUBMIT PRESSED")
        redirect('/data')
    }

    return (
        <>
            <Form className='w-50'>
                <h2>Customer Login</h2>
                <Form.Group className="mb-3 input-group-lg">
                    <Form.Control type="email" placeholder="admin@email.com" className='rounded-pill fs-6' />
                </Form.Group>
                <Form.Group className="mb-3 input-group-lg">
                    <Form.Control type="password" placeholder="Password" className='rounded-pill fs-6' />
                </Form.Group>
                <Button type='submit' variant='primary' className='w-100' onClick={HandleSubmit}>Submit</Button>
            </Form>
        </>
    )
}

export default LoginForm;