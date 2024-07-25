import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import TablePreview from '../components/TablePreview.Connect';

const SQLConnectScreen = () => {
  const redirect = useNavigate();

  const handleSubmit = () => {
    redirect("/inference");
  }

  return (
    <div className={'container mt-5'} >
      <div className='row'>
        <div className="col-7 p-2">
          <h3 className='mb-4'><span class="text-decoration-underline link-offset-1">Connect to SQL DB</span></h3>
          <Form className='container px-5'>
            <Form.Group className='row mb-1'>
              <Form.Label className='col-3 my-auto'>Server Address</Form.Label>
              <Form.Control className='col border-dark rounded-pill' type="text" placeholder="192.168.1.1" />
            </Form.Group>
            <Form.Group className='row mb-1'>
              <Form.Label className='col-3 my-auto'>Port</Form.Label>
              <Form.Control className='col border-dark rounded-pill' type="text" placeholder="Port" />
            </Form.Group>
            <Form.Group className='row mb-1'>
              <Form.Label className='col-3 my-auto'>Username</Form.Label>
              <Form.Control className='col border-dark rounded-pill' type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className='row mb-3'>
              <Form.Label className='col-3 my-auto'>Password</Form.Label>
              <Form.Control className='col border-dark rounded-pill' type="password" placeholder="Password" />
            </Form.Group>
            <div className='row justify-content-end'>
              <div className="col-9 text-center">
                <Button variant="info" className='me-2 text-white' type='reset'>Reset</Button>
                <Button variant="info" className='ms-2 text-white' type='submit'>Connect</Button>
              </div>
            </div>
          </Form>

          <div className='container mt-5'>
            <div className="row">
              <h5 className='mb-3'>Choose Database and Table</h5>
            </div>
            <Form className='container px-5'>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-3 my-auto'>Choose Database</Form.Label>
                <Form.Select className='col border-dark rounded-pill'>
                  <option value="1">Database 1</option>
                  <option value="2">Database 2</option>
                  <option value="3">Database 3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='row mb-3'>
                <Form.Label className='col-3 my-auto'>Choose Table</Form.Label>
                <Form.Select className='col border-dark rounded-pill'>
                  <option value="1">Table 1</option>
                  <option value="2">Table 2</option>
                  <option value="3">Table 3</option>
                </Form.Select>
              </Form.Group>
              <div className='row justify-content-end'>
                <div className="col-9 text-center">
                  <Button variant="info" className='me-2 text-white' type='reset'>Reset</Button>
                  <Button onClick={handleSubmit} variant="info" className='ms-2 text-white' type='submit'>Submit</Button>
                </div>
              </div>
            </Form>
          </div>

        </div>
        <TablePreview />
      </div>
    </div>
  )
}

export default SQLConnectScreen
