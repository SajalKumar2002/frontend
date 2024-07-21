import React from 'react'

import FileIcon from '../svg/FileIcon.svg';

const JobID = () => {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <p>Job id: <strong>34234237c54</strong></p>
        <img src={FileIcon} className='FileImg' alt='Document' />
      </div>
      <p>Model training progess. Please check "Progress" tab for status</p>
    </>
  )
}

export default JobID;