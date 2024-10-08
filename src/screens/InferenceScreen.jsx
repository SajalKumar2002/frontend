import React, { useContext, useEffect, useState } from "react";

import { api1, api2, api3 } from "../http";

import DataSourceContext from "../context/Source.Context";

import { Button, Spinner } from "react-bootstrap";
import SidePanel from "../components/SidePanel";

import StopBtn from "../svg/StopBtn.svg";
import StartBtn from "../svg/StartBtn.svg";

const InferenceScreen = () => {
  const { state } = useContext(DataSourceContext);

  const [prevChats, setPrevChats] = useState(
    localStorage.getItem("chat") ? JSON.parse(localStorage.getItem("chat")) : []
  );
  const [promptText, setPromptText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentResponse, setCurrentResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      chatRouting();
    }
  };

  // const stopChatRouting = async () => {
  //   setLoading(false);
  // }

  const chatRouting = async () => {
    setLoading(true);
    try {
      if (
        (state.source === "sql" || state.source === "csv") &&
        state.type === "structured"
      ) {
        await structuredChat();
      } else if (state.source === "pdf" && state.type === "structured") {
        await unstructuredPDFChat();
      }
    } catch (error) {
      console.log(error);
      setCurrentResponse({
        answer: error.response?.data?.error || "An error occurred",
      });
      setPrevChats((prevChat) => [
        ...prevChat,
        {
          question: promptText,
          answer: error.response?.data?.error || "An error occurred",
        },
      ]);

      setCurrentQuestion("");
      setCurrentResponse("");
    } finally {
      setLoading(false);
    }
  };

  // unstructured (pdf)
  const unstructuredPDFChat = async () => {
    try {
      const data = {
        query: promptText,
      };
      setCurrentQuestion({ question: promptText });
      const response = await api3.post("/chat", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setCurrentResponse({ answer: response.data.response });
      setPrevChats((prevChat) => [
        ...prevChat,
        {
          question: promptText,
          answer: response?.data?.response,
        },
      ]);
      
      setPromptText("");
      setCurrentQuestion("");
      setCurrentResponse("");
    } catch (error) {
      setCurrentResponse({
        answer: error.response?.data?.error || "An error occurred",
      });
      setPrevChats((prevChat) => [
        ...prevChat,
        {
          question: promptText,
          answer: error.response?.data?.error || "An error occurred",
        },
      ]);

      setCurrentQuestion("");
      setCurrentResponse("");
      return;
    }
  };

  // structured (csv, sql)
  const structuredChat = async () => {
    const data = {
      question: promptText,
    };
    setCurrentQuestion(data);

    try {
      const response = await api1.post("/generate_sql_query", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await handleSQLQuery(response.data?.sql_query);
    } catch (error) {
      setCurrentResponse({
        answer: error.response?.data?.error || "An error occurred",
      });
      setPrevChats((prevChat) => [
        ...prevChat,
        {
          question: promptText,
          answer: error.response?.data?.error || "An error occurred",
        },
      ]);

      setCurrentQuestion("");
      setCurrentResponse("");
      return;
    }
  };

  const handleSQLQuery = async (query) => {
    try {
      const data = {
        question: promptText,
        sql_query: query,
      };
      setPromptText("");

      const response = await api2.post("/generate_response", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setCurrentResponse({ answer: response.data.response });
      setPrevChats((prevChat) => [
        ...prevChat,
        {
          question: promptText,
          answer: response.data.response,
        },
      ]);

      setCurrentQuestion("");
      setCurrentResponse("");
    } catch (error) {
      console.log(error.response.data.error);
      return error.response.data.error;
    }
  };

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(prevChats));
  }, [prevChats]);

  return (
    <>
      <div className="container-fluid infernce-screen">
        <div className="row h-100">
          <SidePanel />

          {/* MAIN CHAT SCREEN */}
          <div className="col-10 bg-inferenceScreen p-0 d-flex flex-column justify-content-between ">
            <div className="col-9 mx-auto pt-5">
              <div
                className="overflow-auto scrollbar-hide text-white"
                style={{ maxHeight: "36rem" }}
              >
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
                  ) : (
                    <></>
                  )}

                  {currentQuestion ? (
                    <div className="d-flex justify-content-end">
                      <div className="text-end col-7">
                        <p>{currentQuestion.question}</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="text-start col-7">
                    {loading ? (
                      <div>
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                    ) : (
                      <p>{currentResponse ? currentResponse.answer : ""}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* PROMPT BAR */}
            <div className="w-75 mx-auto mb-4 d-flex position-relative">
              <input
                type="text"
                className="w-100 rounded-pill border-0 bg-dark text-light py-3 px-4"
                placeholder="Enter your prompt here"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {loading ? (
                // <Button type="button" variant='none' onClick={stopChatRouting} className='prompt-bar-btn my-1'>
                //   <img src={StopBtn} alt='STOP' className='' width="35" />
                // </Button>
                <></>
              ) : (
                <Button
                  type="button"
                  variant="none"
                  disabled={promptText.length === 0}
                  onClick={chatRouting}
                  className="prompt-bar-btn my-1"
                >
                  <img src={StartBtn} alt="STOP" className="" width="35" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InferenceScreen;
