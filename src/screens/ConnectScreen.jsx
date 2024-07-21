import React from 'react'
import { Form, Dropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TableConnect from '../components/Table.Connect';

const ConnectScreen = () => {

  const SampleTable = [
    "Table 1",
    "Table 2",
    "Table 3",
    "Table 4",
    "Table 5",
    "Table 5",
  ]

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-7 p-2">
          <h3 className='mb-4'><span class="text-decoration-underline link-offset-1">Connect to SQL DB</span></h3>
          <Form className='container px-5'>
            <Form.Group className='row mb-1'>
              <Form.Label className='col-3 my-auto'>Server Address</Form.Label>
              <Form.Control className='col border-dark rounded-pill' type="text" placeholder="192.168.1.1" />
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
                <Button variant="info" className='ms-2 text-white' type='submit'>Submit</Button>
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
                <Form.Control className='col border-dark rounded-pill' type="text" placeholder="Database" />
              </Form.Group>
              <Form.Group className='row mb-3'>
                <Form.Label className='col-3 my-auto'>Choose Table</Form.Label>
                <Form.Control className='col border-dark rounded-pill' type="password" placeholder="Table" />
              </Form.Group>
              <div className='row justify-content-end'>
                <div className="col-9 text-center">
                  <Button variant="info" className='me-2 text-white' type='reset'>Reset</Button>
                  <Button variant="info" className='ms-2 text-white' type='submit'>Submit</Button>
                </div>
              </div>
            </Form>
          </div>

        </div>
        <TableConnect TableNames={SampleTable} />
      </div>
    </div>
  )
}

export default ConnectScreen
