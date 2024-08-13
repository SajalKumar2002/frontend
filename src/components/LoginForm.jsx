import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';

import GreenCheck from '../svg/GreenCheck.svg'

import axios from '../http';

function LoginForm() {
    const redirect = useNavigate();

    const HandleSubmit = async (event) => {
        event.preventDefault();
        console.log("response");
        const response = await axios.post('/api/user/login', {
            email: event.target.email.value,
            password: event.target.password.value
        })
        if (response.data.success) {
            alert(response.data.message)
            redirect("/data");
        } else {
            alert(response.data.message)
        }
        // redirect("/data");

    }

    return (
        <>
            <Form className='w-50' onSubmit={HandleSubmit}>
                <h2>Customer Login</h2>
                <Form.Group className="mb-3 input-group-lg">
                    <Form.Control type="email" name="email" placeholder="admin@email.com" className='rounded-pill fs-6' autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3 input-group-lg">
                    <Form.Control type="password" name="password" placeholder="Password" className='rounded-pill fs-6' required />
                </Form.Group>
                <Button type='submit' variant='primary' className='w-100'>Submit</Button>
            </Form>
        </>
    )
}

export default LoginForm;