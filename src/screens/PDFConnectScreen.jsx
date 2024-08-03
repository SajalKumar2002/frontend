import React, { useState } from 'react';
import axios from '../http';
import TablePreview from '../components/TablePreview.Connect';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PDFConnectScreen = () => {

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-7 p-2'>
                    <h3 className='mb-4'>
                        <span className='text-decoration-underline link-offset-1'>Upload PDF Files</span>
                    </h3>
                    <form>
                        <section className='container'>
                            <div className='p-3 border-1 mb-3'>
                                <input type='file' multiple accept=".pdf" />
                                <p>Files to Upload</p>
                                <ol>
                                    <li>file.name</li>
                                </ol>
                                <p>Uploaded Files</p>
                                <ol>
                                    <li>file.name</li>
                                </ol>
                            </div>
                        </section>
                        <div className='container d-flex justify-content-around'>
                            <Button type='submit'>Upload</Button>
                            <Link to='/model' className={`btn btn-primary`}>
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
