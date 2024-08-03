import React, { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';

import PromptBar from '../components/PromptBar';
import LLMModels from '../components/LLMModels';
import DataSourceContext from '../context/Source.Context';

const InferenceScreen = () => {
  const { state } = useContext(DataSourceContext);
  const [currentChat, setCurrentChat] = useState(
    [
      {
        question: "How many albums",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore fugit quidem facilis est quibusdam explicabo alias repudiandae consequatur iure deserunt. Quis obcaecati similique debitis, molestias consectetur cum officia sunt sequi!"
      },
      {
        question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem natus ullam ",
        answer: "ipsum dolor, sit amet"
      }
    ]
  );

  const handleChat = async (responseChat) => {
    setCurrentChat([
      ...currentChat,
      responseChat
    ])
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">

          {/* SIDE PANEL */}
          <div className="col-2 bg-history-inferenceScreen p-3 overflow-auto text-white d-flex flex-column h-custom">

            <LLMModels defaultValue={state.source} />

            <Nav variant="pills" className='d-flex flex-column'>
              <div>
                <hr />
                <Nav.Item>
                  <Nav.Link className='text-white active'>New Chat</Nav.Link>
                </Nav.Item>
                <p className='mt-2 fs-5'>Recent</p>
              </div>

              {/* <div className='px-2 text-light fs-6'>
                <div className="overflow-auto scrollbar-hide" style={{ maxHeight: "30rem" }}>
                  {chat && chat.map((value, index) => (
                    <Nav.Item>
                      <Nav.Link eventKey={index + 1} className='text-white'>{value.keyword}</Nav.Link>
                    </Nav.Item>
                  ))}
                </div>
              </div> */}

            </Nav>

          </div>

          {/* MAIN CHAT SCREEN */}
          <div className="col-10 bg-inferenceScreen p-0 d-flex flex-column justify-content-between ">

            <div className="col-9 mx-auto pt-5">
              <div className="overflow-auto scrollbar-hide text-white" style={{ maxHeight: "36rem" }}>

                {(currentChat).map((chat, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-end">
                      <div className="text-end col-7">
                        <p>{chat.question}</p>
                      </div>
                    </div>
                    <div className="text-start col-7">
                      <p>{chat.answer}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <PromptBar handleResponse={handleChat} />

          </div>
        </div>
      </div >
    </>
  )
}

export default InferenceScreen;
