import React, { useContext } from "react";
import { Nav } from "react-bootstrap";

import LLMModels from "./LLMModels";
import DataSourceContext from "../context/Source.Context";

const SidePanel = () => {
  const { state } = useContext(DataSourceContext);

  const handleNewChat = async () => {
    try {
      localStorage.removeItem("chat");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Some error occured");
    }
  };

  return (
    <div className="col-2 bg-history-inferenceScreen p-3 overflow-auto text-white d-flex flex-column h-custom">
      {state?.type === "unstructured" ? (
        <>
          <LLMModels defaultValue={state ? state.source : ""} />
          <hr />
        </>
      ) : (
        <></>
      )}
      <Nav variant="pills" className="d-flex flex-column">
        <div>
          <Nav.Item>
            <Nav.Link className="text-white active" onClick={handleNewChat}>
              New Chat
            </Nav.Link>
          </Nav.Item>
          <p className="mt-2 fs-5">Recent</p>
        </div>
      </Nav>
    </div>
  );
};

export default SidePanel;
