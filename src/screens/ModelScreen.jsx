import React from 'react'

import JobID from '../components/JobID';

import { Form, Button } from 'react-bootstrap';

const ModelScreen = () => {

  

  return (
    <>
      <div className='container'>
        <div className='col-8 my-4'>
          <p className='fs-4'>Select a model to train. You can select an existing model or train a new model. The model will be trained on your data.</p>
        </div>

        <div className='col-5'>
          <Form.Group>
            <Form.Check
              type='radio'
              className='fs-5'
              name='model'
              onChange={() => console.log("Something")}
              label="Select from an existing model"
            />
          </Form.Group>
        </div>

        <div className="container px-5">
          <div className="row col-5">
            <div className="col-9">
              <Form.Select className='border-dark rounded-pill'>
                <option value="1">Model 1</option>
                <option value="2">Model 1</option>
                <option value="3">Model 1</option>
              </Form.Select>
            </div>

            <div className="col-3 align-content-center text-end">
              <Button className='rounded-pill px-4' size='sm'>Train</Button>
            </div>

            <div className="container fs-custom-jobid mt-2">
              <div className="row justify-content-end">
                <div className="col-4 text-end pe-0">
                  <JobID />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-5'>
          <Form.Group>
            <Form.Check
              type='radio'
              className='fs-5'
              name='model'
              onChange={() => console.log("Something")}
              label="Train a new model"
            />
          </Form.Group>
        </div>

        <div className="container px-5">
          <div className="col-6">
            <div className="container ">
              <Form.Group className='row mb-1'>
                <Form.Label className='col-7 my-auto'>Select a model for cloning(Optional)</Form.Label>
                <Form.Select className='col border-dark rounded-pill text-secondary'>
                  <option value="1">Model 1</option>
                  <option value="2">Model 1</option>
                  <option value="3">Model 1</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-7 my-auto'>Model Name</Form.Label>
                <Form.Control className='col rounded-pill border-dark' placeholder="Model Name" />
              </Form.Group>
              <Form.Group className='row mb-1'>
                <Form.Label className='col-7 my-auto'>Parameter 1</Form.Label>
                <Form.Control className='col rounded-pill border-dark' placeholder="Parameter Value" />
              </Form.Group>
              <Form.Group className='row mb-1 p-0'>
                <Form.Label className='col-7 my-auto'>Parameter 2</Form.Label>
                <Form.Control className='col rounded-pill border-dark' placeholder="Parameter Value" />
              </Form.Group>

              <div className="container fs-custom-jobid mt-2">
                <div className="row justify-content-end">
                  <div className="col-4 text-end pe-0">
                    <JobID />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default ModelScreen
