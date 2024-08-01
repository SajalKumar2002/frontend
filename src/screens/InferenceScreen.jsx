import React, { useState } from 'react';
import { Form, Nav, Tab } from 'react-bootstrap';

import PromptBar from '../components/PromptBar';
import LLMModels from '../components/LLMModels';

const InferenceScreen = () => {

  const SampleChat = [
    {
      "keyword": "Lorem 1",
      "chats": [
        {
          "question": "Hello, Introduce yourself",
          "answer": "Hey Admin, I am Large Language Model."
        },
        {
          "question": "Lorem ipsum dolor sit amet  mollitia eum odit vero explicabo voluptatem veniam beatae assumenda. Adipisci, vero placeat!",
          "answer": "Lorem ipsum dolor sit amet  mollitia eum odit vero explicabo voluptatem veniam beatae assumenda. Adipisci, vero placeat!"
        },
      ]
    },
    {
      "keyword": "Introduction",
      "chats": [
        {
          "question": "Hello, I am Sajal",
          "answer": "Hey Sajal, I am a Large Language Model."
        }
      ]
    }
  ]

  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">
          <Tab.Container defaultActiveKey={0}>

            <div className="col-2 bg-history-inferenceScreen p-3 overflow-auto text-white d-flex flex-column h-custom">

              <LLMModels />
              <Nav variant="pills" className='d-flex flex-column'>
                <div>
                  <hr />
                  <Nav.Item>
                    <Nav.Link eventKey={0} className='text-white'>New Chat</Nav.Link>
                  </Nav.Item>
                  <p className='mt-2 fs-5'>Recent</p>
                </div>

                <div className='px-2 text-light fs-6'>
                  <div className="overflow-auto scrollbar-hide" style={{ maxHeight: "30rem" }}>
                    {SampleChat.map((value, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={index + 1} className='text-white'>{value.keyword}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </div>
                </div>
              </Nav>

            </div>

            <div className="col-10 bg-inferenceScreen p-0 d-flex flex-column justify-content-between ">

              <div className="col-9 mx-auto pt-5">
                <div className="overflow-auto scrollbar-hide text-white" style={{ maxHeight: "36rem" }}>
                  <Tab.Content>
                    {SampleChat.map((value, index) => (
                      <Tab.Pane eventKey={index + 1} key={index}>
                        {value ?
                          <>
                            {(value.chats).map((chat, index) => (
                              <div key={index}>
                                <div className="text-start col-7">
                                  <p>{chat.question}</p>
                                </div>
                                <div className="d-flex justify-content-end">
                                  <div className="text-end col-7">
                                    <p>{chat.answer}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                          :
                          <></>}

                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>
              </div>

              <div>
                <PromptBar />
              </div>

            </div>

          </Tab.Container>

        </div>
      </div >
    </>
  )
}

export default InferenceScreen;
