import React, { useState } from 'react';
import axios from '../http';
import TablePreview from '../components/TablePreview.Connect';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PDFConnectScreen = () => {
    const [files, setFiles] = useState([]);
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [selectedFileIndex, setSelectedFileIndex] = useState();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const filesArray = Array.from(event.target.files);
        setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        selectedFiles.forEach((file) => {
            formData.append(`files`, file);
        });
        try {
            const response = await axios.post('/api/data/csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSelectedFiles([])
            setAcceptedFiles(response.data);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-7 p-2'>
                    <h3 className='mb-4'>
                        <span className='text-decoration-underline link-offset-1'>Upload PDF Files</span>
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <section className='container'>
                            <div className='p-3 border-1 mb-3'>
                                <input type='file' multiple onChange={handleFileChange} accept=".pdf" />
                                <p>Files to Upload</p>
                                <ol>
                                    {selectedFiles.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ol>
                                <p>Uploaded Files</p>
                                <ol>
                                    {acceptedFiles.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ol>
                            </div>
                        </section>
                        <div className='container d-flex justify-content-around'>
                            <Button type='submit'>Upload</Button>
                            <Link to='/model' className={`btn btn-primary ${acceptedFiles.length === 0 ? 'disabled' : ''}`}>
                                Start Training
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PDFConnectScreen;
