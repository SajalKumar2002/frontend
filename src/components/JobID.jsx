import React from 'react'

import FileIcon from '../svg/FileIcon.svg';

const JobID = ({ job }) => {
  return (
    <>
      <div className='d-flex'>
        <p>Job id: <strong>{job.id}</strong></p>
        <img src={FileIcon} className='FileImg' alt='Document' />
      </div>
      <p>Model training progess. Please check "Processing" tab for status.</p>
    </>
  )
}

export default JobID;