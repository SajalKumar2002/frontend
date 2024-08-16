import React, { useEffect, useState } from 'react';

import https from '../https';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SidePanel from '../components/SidePanel';
// import PromptBar from '../components/PromptBar';
// import ResponseScreen from '../components/ResponseScreen';

const InferenceScreen = () => {
  const [prevChats, setPrevChats] = useState([]);
  const [promptText, setPromptText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentResponse, setCurrentResponse] = useState();
  const [loading, setLoading] = useState(false);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      const data = {
        "question": promptText
      }
      setPromptText("");
      setCurrentQuestion(data);
      const response = await https.post(
        '/generate_sql_query',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      // const chatResponse = handleQuery(response.data.sql_query);
      setCurrentResponse({
        // answer: chatResponse
        answer: response.data.sql_query
      })
      setLoading(false);
    }
  }

  const handleQuery = async (query) => {
    const response = await axios.post("https://e1e8-34-80-82-25.ngrok-free.app/generate_response",
      {
        sql_query: query,
        question: currentQuestion
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    // console.log(response.data);
    // setLoading(false);
    return response.data.response;
  }

  useEffect(() => {
    setPrevChats((prevChat) => [
      ...prevChat,
      {
        ...currentQuestion,
        ...currentResponse
      }
    ])
    setCurrentQuestion();
    setCurrentResponse();
  }, [currentResponse])

  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">

          <SidePanel />

          {/* MAIN CHAT SCREEN */}
          <div className="col-10 bg-inferenceScreen p-0 d-flex flex-column justify-content-between ">

            <div className="col-9 mx-auto pt-5">
              <div className="overflow-auto scrollbar-hide text-white" style={{ maxHeight: "36rem" }}>

                <div>

                  {prevChats.length > 0 ?
                    <>
                      {prevChats.map((prevChat, index) => (
                        <div key={index}>
                          <div className="d-flex justify-content-end">
                            <div className="text-end col-7">
                              <p>{prevChat.question}</p>
                            </div>
                          </div>
                          <div className="text-start col-7">
                            <p>{prevChat.answer}</p>
                          </div>
                        </div>
                      ))}
                    </>
                    :
                    <></>
                  }

                  <div className="d-flex justify-content-end">
                    <div className="text-end col-7">
                      <p>{currentQuestion ? currentQuestion.question : ""}</p>
                    </div>
                  </div>
                  <div className="text-start col-7">
                    {loading ?
                      <div>
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                      :
                      <p>{currentResponse ? currentResponse.answer : ""}</p>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="w-75 text-center mx-auto pb-4">
              <input
                type='text'
                className='w-100 rounded-pill border-0 bg-dark text-light py-3 px-4'
                placeholder='Enter your prompt here'
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default InferenceScreen;
