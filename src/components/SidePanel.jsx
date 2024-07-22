import React from 'react';
import { Form, Nav } from 'react-bootstrap';

const SidePanel = () => {

    return (
        <div className="col-2 bg-history-inferenceScreen p-3 overflow-auto text-white d-flex flex-column h-custom">

            <Form.Select className=''>
                <option value="1">Model 1</option>
                <option value="2">Model 2</option>
                <option value="3">Model 3</option>
            </Form.Select>
            <div>
                <hr />
                <p className='fs-5'>Recent</p>
            </div>

            <div className='px-2 text-light fs-6'>
                <Nav variant="pills" className='d-flex flex-column'>
                    <div className="overflow-auto scrollbar-hide" style={{ maxHeight: "30rem" }}>
                        {[1, 2].map((value, index) => (
                            <Nav.Item>
                                <Nav.Link eventKey={index} className='text-white'>Chat {value}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </div>
                </Nav>
            </div>

        </div>
    )
}

export default SidePanel