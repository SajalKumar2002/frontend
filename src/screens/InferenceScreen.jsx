import React, { useEffect, useState } from 'react';

import api1 from '../api1';
import api2 from '../api2';

import { Spinner } from 'react-bootstrap';
import SidePanel from '../components/SidePanel';

const InferenceScreen = () => {
  const [prevChats, setPrevChats] = useState([]);
  const [promptText, setPromptText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentResponse, setCurrentResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      const data = {
        question: promptText
      };
      setCurrentQuestion(data);

      try {
        const response = await api1.post('/generate_sql_query', data, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        // const chatResponse = await handleQuery(response.data.sql_query);
        setCurrentResponse({ answer: response.data.sql_query });

        setPrevChats(prevChat => [
          ...prevChat,
          {
            ...data,
            answer: response.data.sql_query
          }
        ]);

        setPromptText("");
        setCurrentQuestion("");
        setCurrentResponse("");
      } catch (error) {
        console.log(error);
        setCurrentResponse({ answer: error.response?.data?.error || "An error occurred" });
        setPrevChats(prevChat => [
          ...prevChat,
          {
            ...data,
            answer: error.response?.data?.error || "An error occurred"
          }
        ]);

        setPromptText("");
        setCurrentQuestion("");
        setCurrentResponse("");
      } finally {
        setLoading(false);
      }
    }
  }

  const handleQuery = async (query) => {
    const data = {
      "question": promptText,
      "sql_query": query
    }
    setPromptText("");

    const response = await api2.post("/generate_response",
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    return response.data.response;
  }

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

                  {prevChats && prevChats.length > 0 ? (
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
                  )
                    : (
                      <></>
                    )
                  }

                  {currentQuestion ?
                    <div className="d-flex justify-content-end">

                      <div className="text-end col-7">
                        <p>{currentQuestion.question}</p>
                      </div>

                    </div>
                    :
                    <></>
                  }

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

            {/* PROMPT BAR */}
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
