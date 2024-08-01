import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import TablePreview from '../components/TablePreview.Connect';

const SQLConnectScreen = () => {
  const redirect = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('https://8115-34-83-116-169.ngrok-free.app/set_db_config', {
      serveraddress: event.target.serveraddress.value,
      port: event.target.port.value,
      username: event.target.username.value,
      password: event.target.password.value,
      database: event.target.database.value
    })
    console.log(response.data);
  }

  return (
    <>
      <div className='d-flex justify-content-between px-4 py-2'>
        <Button variant='primary' onClick={() => redirect('/data')}>{"<"}Back</Button>
        <Button variant='primary' onClick={() => redirect('/model')}>Next{">"}</Button>
      </div>
      <div className='container mt-2'>
        <div className='row mt-2'>
          <div className="p-2">
            <h3 className='mb-4'><span className="text-decoration-underline link-offset-1">Connect to SQL DB</span></h3>
            <Form className='container px-5' onSubmit={handleSubmit}>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-3 my-auto'>Server Address</Form.Label>
                <Form.Control name='serveraddress' className='col border-dark rounded-pill' type="text" placeholder="192.168.1.1" required />
              </Form.Group>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-3 my-auto'>Port</Form.Label>
                <Form.Control name='port' className='col border-dark rounded-pill' type="text" placeholder="Port" required />
              </Form.Group>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-3 my-auto'>Username</Form.Label>
                <Form.Control name='username' className='col border-dark rounded-pill' type="text" placeholder="Username" required />
              </Form.Group>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-3 my-auto'>Password</Form.Label>
                <Form.Control name='password' className='col border-dark rounded-pill' type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className='row mb-3'>
                <Form.Label className='col-3 my-auto'>Database</Form.Label>
                <Form.Control name='database' className='col border-dark rounded-pill' type="text" placeholder="Database" required />
              </Form.Group>
              <div className='row justify-content-end'>
                <div className="text-center">
                  <Button variant="info" className='me-2 text-white' type='reset'>Reset</Button>
                  <Button variant="info" className='ms-2 text-white' type='submit'>Connect</Button>
                </div>
              </div>
            </Form>
          </div>
          <div className=''>
            <Form.Group className=' mb-3'>
              <Form.Label className='col-3 my-auto'>Choose Table</Form.Label>
              <Form.Select className='col border-dark rounded-pill'>
                <option value="1">Table 1</option>
                <option value="2">Table 2</option>
                <option value="3">Table 3</option>
              </Form.Select>
            </Form.Group>
            <TablePreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default SQLConnectScreen
