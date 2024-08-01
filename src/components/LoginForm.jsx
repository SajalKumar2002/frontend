import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';

import GreenCheck from '../svg/GreenCheck.svg'

import axios from '../http';

function LoginForm() {
    const redirect = useNavigate();

    const [show, setShow] = useState(false);
    const [loginMessage, setLoginMessage] = useState({ success: false, message: "Waiting" });

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    const HandleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/user/login', {
            email: event.target.email.value,
            password: event.target.password.value
        })
        setLoginMessage(response.data);
        if (response.data.success) {
            handleShow();
            redirect('/data')
        }
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='border-0' closeButton>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <p className='fs-4 m-0'>{loginMessage.message}</p>
                    <img src={loginMessage.success ? GreenCheck : ""} alt='' />
                </Modal.Body>
                <Modal.Footer className='justify-content-center border-0'>
                    <Button variant="primary" onClick={handleClose} className='w-25 fs-bold mb-5'>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginForm;