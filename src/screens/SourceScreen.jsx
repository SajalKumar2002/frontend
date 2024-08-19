import React, { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import DataSourceContext from '../context/Source.Context';

import RadioFormOptions from '../components/RadioFormOptions';

import Excel from '../svg/Excel.svg';
import Database from '../svg/Database.svg';
import VideoCamera from '../svg/VideoCamera.svg';
import PDF from '../svg/PDF.svg';
import S3Bucket from '../svg/S3Bucket.svg';
import Ownmodel from '../svg/OwnModel.svg';

const SourceScreen = () => {
  const { state, dispatch } = useContext(DataSourceContext);
  const redirect = useNavigate();
  const [selectedValue, setSelectedValue] = useState(state.source || "");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = (event) => {
    event.preventDefault();
    dispatch({ type: 'SOURCE', payload: { source: selectedValue } })
    redirect(`/data/${selectedValue}`)
  }

  return (
    <>
      <div className='container'>
        <div className='d-flex flex-column ms-5 mb-3'>
          <p className='fs-5 fw-normal my-4 content-color'>Select the data source from which you want to generate LLM model.</p>
          <h5 className='fw-bold fs-4 header-color '>Structure Data</h5>
          <div className='border border-black border-2 p-4 mb-4'>
            <Form.Group className='d-lg-flex d-md-flex text-center'>
              <RadioFormOptions selectedValue={selectedValue} onChange={handleChange} name="csv" SrcPath={Excel} title="Upload XLS/CSV File" AltText="Excel" />
              <RadioFormOptions selectedValue={selectedValue} onChange={handleChange} name="sql" SrcPath={Database} title="Connect to SQL DB" AltText="Database" />
            </Form.Group>
          </div>
          <div className=''>
            <h5 className='fw-bold fs-4 header-color'>Unstructure Data</h5>
            <div className='border border-black border-2 p-4'>
              <Form.Group className='d-flex text-center'>
                <RadioFormOptions selectedValue={selectedValue} onChange={handleChange} name="pdf" SrcPath={PDF} title="Upload from PDF File" AltText="PDF" />
                <RadioFormOptions selectedValue={selectedValue} onChange={handleChange} name="clip" SrcPath={VideoCamera} title="Upload Audio/Video Clip" AltText="VideoCamera" />
                <RadioFormOptions selectedValue={selectedValue} onChange={handleChange} name="s3" SrcPath={S3Bucket} title="Connect to S3 Bucket" AltText="S3 Bucket" />
                <RadioFormOptions selectedValue={selectedValue} onChange={handleChange} name="Owntext" SrcPath={Ownmodel} title="Train on your Own Text" AltText="Own model" />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end'>
          <Button disabled={selectedValue.length === 0} onClick={handleNext}>Next</Button>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default SourceScreen