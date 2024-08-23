import React, { useState } from 'react';
import { api3, http } from '../http';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PDFConnectScreen = () => {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [acceptedFile, setAcceptedFile] = useState(
        localStorage.getItem('pdf') ? JSON.parse(localStorage.getItem('pdf')) : {}
    );

    const handleFileChange = (event) => setSelectedFile(event.target.files[0])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();

        formData.append(`files`, selectedFile);

        try {
            const response = await http.post('/data/pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            if (await handleFileURL(response?.data?.file)) {
                // alert(await handleFileURL(response?.data?.file));
                setAcceptedFile(selectedFile);
                setSelectedFile();
            } else {
                alert("File Upload Failed");
            }
        } catch (error) {
            alert('Error:', error?.response?.data);
        } finally {
            setLoading(false);
        }
    }
    
    const handleFileURL = async (url) => {
        console.log(url);
        try {
            const response = await api3.post('/upload', { s3_link: "url" }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response?.data?.message;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

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
                                <input type='file' onChange={handleFileChange} accept=".pdf" />
                                <p>Files to Upload</p>
                                <ol>
                                    {selectedFile?.name ?
                                        <li>{selectedFile.name}</li>
                                        :
                                        <></>
                                    }
                                </ol>
                                <p>Uploaded Files</p>
                                {loading ?
                                    <div>
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                    :
                                    <ol>
                                        {acceptedFile?.name ?
                                            <li>{acceptedFile.name}</li>
                                            :
                                            <></>
                                        }
                                    </ol>
                                }
                            </div>
                        </section>
                        <div className='container d-flex justify-content-around'>
                            <Button type='submit' className={`${selectedFile ? "" : "disabled"}`}>Upload</Button>
                            <Link to='/model' className={`btn`} >
                                Go to Models Tab
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PDFConnectScreen;
