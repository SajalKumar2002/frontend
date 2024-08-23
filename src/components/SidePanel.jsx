import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';

import LLMModels from './LLMModels';
import DataSourceContext from '../context/Source.Context';

const SidePanel = () => {
    const { state } = useContext(DataSourceContext);

    return (
        <div className="col-2 bg-history-inferenceScreen p-3 overflow-auto text-white d-flex flex-column h-custom" >

            <LLMModels
                defaultValue={state ? state.source : ""}
            />

            <Nav variant="pills" className='d-flex flex-column'>
                <div>
                    <hr />
                    <Nav.Item>
                        <Nav.Link className='text-white active'>New Chat</Nav.Link>
                    </Nav.Item>
                    <p className='mt-2 fs-5'>Recent</p>
                </div>



            </Nav>

        </div>
    )
}

export default SidePanel