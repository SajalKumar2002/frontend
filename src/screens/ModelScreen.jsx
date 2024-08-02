import React, { useContext, useEffect, useState } from 'react'

import DataSourceContext from '../context/Source.Context';

import JobID from '../components/JobID';
import RadioModelButton from '../components/RadioModelButton';

import { Form, Button, Collapse } from 'react-bootstrap';
import LLMModels from '../components/LLMModels';
import axios from '../http';

const ModelScreen = () => {
  const { state } = useContext(DataSourceContext)
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedModel, setSelectedModel] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleExistingSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get("/api/job/generate")
    console.log(response.data);
    // if (response.data.success) {
    //   setJob(response.data.job);
    // }
  }

  const handleNewSubmit = (event) => {
    event.preventDefault();
    console.log("handleNewModelSubmit Submitted")
  }


  return (
    <>
      <div className='container' style={{ height: "39rem" }}>
        {/* Header */}
        <div className='col-8 my-4'>
          <p className='fs-4 mb-0'>The model will be trained on your data.</p>
          <p className='fs-4'>Select a model to train.</p>
        </div>

        {/* Option 1 */}
        <div className='col-5'>
          <RadioModelButton
            name="model"
            value="existing"
            label="Select from existing models"
            checked={selectedOption === 'existing'}
            onChange={handleOptionChange}
          />
        </div>

        <Collapse in={selectedOption === 'existing'}>
          <div className="container px-5">
            <div className="row col-5">

              <Form onSubmit={handleExistingSubmit}>
                <Form.Group className='row'>
                  <div className="col-9">
                    <LLMModels
                      rounded="rounded-pill"
                      onChange={setSelectedModel}
                    />
                  </div>

                  <div className="col-3 align-content-center text-end">
                    <Button type='submit' className="rounded-pill px-4" size='sm'>Train</Button>
                  </div>
                </Form.Group>

                <div className="row">
                  {/* <JobID /> */}
                </div>
              </Form>

            </div>
          </div>
        </Collapse>

        {/* Option 2 */}
        {state == "sql" || state == "csv" ?
          <></>
          :
          <>
            <div className='col-5'>
              <RadioModelButton
                name="model"
                value="new"
                label="Train a new model"
                checked={selectedOption === 'new'}
                onChange={handleOptionChange}
              />
            </div>

            <Collapse in={selectedOption === 'new'}>
              <div className="container px-5">
                <div className="col-6">
                  <div className="container">
                    <Form onSubmit={handleNewSubmit}>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Select a model for cloning(Optional)</Form.Label>
                        <div className="col p-0">
                          <LLMModels rounded="rounded-pill" />
                        </div>
                      </Form.Group>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Model Name</Form.Label>
                        <Form.Control className='col rounded-pill border-dark' placeholder="Model Name" />
                      </Form.Group>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Parameter 1</Form.Label>
                        <Form.Control className='col rounded-pill border-dark' placeholder="Parameter Value" />
                      </Form.Group>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Parameter 2</Form.Label>
                        <Form.Control className='col rounded-pill border-dark' placeholder="Parameter Value" />
                      </Form.Group>
                      <div className="text-end">
                        <Button type='submit'>Train</Button>
                      </div>
                    </Form>
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
            </Collapse>
          </>
        }
      </div >
    </>
  )
}

export default ModelScreen
