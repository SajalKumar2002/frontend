import React, { useContext, useState } from 'react'

import DataSourceContext from '../context/Source.Context';

import JobID from '../components/JobID';
import RadioModelButton from '../components/RadioModelButton';

import { Form, Button, Collapse } from 'react-bootstrap';
import LLMModels from '../components/LLMModels';
import { http, api3 } from '../http';

const ModelScreen = () => {
  const { state } = useContext(DataSourceContext)
  const [selectedOption, setSelectedOption] = useState("");
  const [existingSelectedModel, setExistingSelectedModel] = useState("");
  const [job, setJob] = useState();

  const generateJobId = async () => {
    try {
      const response = await http.get("/job/generate")
      setJob(response.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const switchJobStatus = async (jobID) => {
    try {
      const response = await http.get(`/job/switch?id=${jobID}`);
      setJob(response.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const deleteJob = async (jobID) => {
    try {
      const response = await http.get(`/job/switch?id=${jobID}`);
      setJob(response.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const ingestData = async () => {
    try {
      const response_2 = await api3.get("/ingest");
      console.log(response_2);
      if (response_2?.status === 200) {
        console.log(response_2);
      }
    } catch (error) {
      alert('Error:', error.response.data.error);
      console.log(error.response.data.error);
    }
  }

  const handleExistingSubmit = async (event) => {
    event.preventDefault();
    try {

      console.log("handleExistingSubmit")

    } catch (error) {
      console.log(error);
    }
  }

  const handleNewSubmit = async (event) => {
    event.preventDefault();
    try {
      if (await generateJobId()) {
        try {
          const ingestResponse = await ingestData();
          console.log(ingestResponse);
          await switchJobStatus(job?.id);
        } catch (error) {
          console.log(error);
          await deleteJob(job?.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (state.source === "") {
    return (
      <div className='text-center container' style={{ height: "39rem" }}>
        <div className='row py-4'>
          <h5>ERROR:<span className='fs-5 fw-normal'> You have not chosen the Data Source.</span></h5>
        </div>
      </div>
    )
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
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>

        <Collapse in={selectedOption === 'existing'}>
          <div className="container px-5">
            <div className="row col-5">

              <Form onSubmit={handleNewSubmit}>
                <Form.Group className='row'>
                  <div className="col-9">
                    <LLMModels
                      rounded="rounded-pill"
                      onChange={(e) => setExistingSelectedModel(e.target.value)}
                    />
                  </div>

                  <div className="col-3 align-content-center text-end">
                    <Button
                      type='submit'
                      className="rounded-pill px-4"
                      disabled={existingSelectedModel.length === ""}
                      size='sm'
                    >Train</Button>
                  </div>
                </Form.Group>

                <div className="row">
                  {job ?
                    <JobID job={job} />
                    : <></>
                  }
                </div>
              </Form>

            </div>
          </div>
        </Collapse>

        {/* Option 2 */}
        {state.source === "sql" || state.source === "csv" ?
          <></>
          :
          <>
            <div className='col-5'>
              <RadioModelButton
                name="model"
                value="new"
                label="Train a new model"
                checked={selectedOption === 'new'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
            </div>

            <Collapse in={selectedOption === 'new'}>
              <div className="container px-5">
                <div className="col-6">
                  <div className="container">
                    <Form onSubmit={handleNewSubmit}>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Select a BASE MODEL</Form.Label>
                        <div className="col p-0">
                          <LLMModels rounded="rounded-pill" />
                        </div>
                      </Form.Group>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Select a EMBEDDED MODEL</Form.Label>
                        <div className="col p-0">
                          <LLMModels rounded="rounded-pill" />
                        </div>
                      </Form.Group>
                      <Form.Group className='row mb-1'>
                        <Form.Label className='col-7 my-auto'>Model Name</Form.Label>
                        <Form.Control className='col rounded-pill border-dark' placeholder="Model Name" />
                      </Form.Group>
                      <div className="text-end">
                        <Button type='submit'>Train</Button>
                      </div>
                    </Form>
                    <div className="container fs-custom-jobid mt-2">
                      <div className="row justify-content-end">
                        <div className="col-4 text-end pe-0">
                          {job ?
                            <JobID job={job} />
                            : <></>
                          }
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
