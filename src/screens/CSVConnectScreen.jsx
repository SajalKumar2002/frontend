import React, { useState } from 'react';
// import axios from '../http';
import axios from 'axios'
import TablePreview from '../components/TablePreview.Connect';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CSVConnectScreen = () => {
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedFileIndex, setSelectedFileIndex] = useState();

    const handleFileChange = (event) => {
        if (selectedFiles.length <= 5) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
        } else {
            alert("Limit exceeded")
        }
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
            setAcceptedFiles((prevAccFile) => (
                [
                    ...prevAccFile,
                    ...response.data
                ]
            ));
        } catch (error) {
            alert('Error uploading files:', error);
        }
    };

    return (
        <div className='container mt-5' style={{ height: "38rem" }}>
            <div className='row'>
                <div className='col-7 p-2'>
                    <h3 className='mb-4'>
                        <span className='text-decoration-underline link-offset-1'>Upload XLS/CSV Files</span>
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <section className='container'>
                            <div className='p-3 border-1 mb-3'>
                                <input type='file' multiple onChange={handleFileChange} accept=".csv" />
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

                <div className='mt-5'>
                    <div className='container mb-4'>
                        <Form.Group className='row w-50'>
                            <Form.Label className='col-3 m-auto'>Select Table</Form.Label>
                            <Form.Select className='border-dark rounded-pill col' onChange={(e) => setSelectedFileIndex(e.target.value)}>
                                <option>Select a Table</option>
                                {acceptedFiles.map((file, index) => (
                                    <option key={index} value={index}>{file.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                    {acceptedFiles.length > 0 && selectedFileIndex !== undefined ?
                        <TablePreview tableData={acceptedFiles[selectedFileIndex].table} />
                        : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default CSVConnectScreen;
