import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import TablePreview from '../components/TablePreview.Connect';
import Dropzone, { useDropzone } from 'react-dropzone';

const CSVConnectScreen = () => {
    const redirect = useNavigate();

    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 5,
        onDrop,
        accept: '.csv',
        multiple: true
    });


    const handleSubmit = () => {
        redirect("/inference");
    }

    return (
        <div className={'container mt-5'}>
            <div className='row'>
                <div className="col-7 p-2">
                    <h3 className='mb-4'><span className="text-decoration-underline link-offset-1">Upload XLS/CSV File</span></h3>

                    <section className="container">
                        <div {...getRootProps({ className: 'dropzone bg-light fs-5 p-3 border-1 mb-3' })}>
                            <input {...getInputProps()} />
                            <p className='m-0'>Drag and drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul className='list-group'>
                                {files.map(file => (
                                    <li key={file.name}>
                                        {file.name} - {file.size} bytes
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </section>

                    {/* <div className='row justify-content-end mt-3'>
                        <div className="col-9 text-center">
                            <Button variant="info" className='me-2 text-white' type='reset'>Reset</Button>
                            <Button variant="info" className='ms-2 text-white' type='submit'>Submit</Button>
                        </div>
                    </div> */}

                </div>
                <TablePreview />
            </div>
        </div>
    )
}

export default CSVConnectScreen;