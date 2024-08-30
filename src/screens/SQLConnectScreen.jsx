import React from "react";

import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { http } from "../http";

const SQLConnectScreen = () => {
  const redirect = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      user: event.target.username.value,
      password: event.target.password.value,
      host: event.target.host.value,
      port: event.target.port.value,
      database: event.target.database.value,
    };
    try {
      const resposne = await http.post("/data/sql", data);
      alert(resposne.data?.message);
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.error || "Server Error";
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="main-content">
      <div className="d-flex justify-content-between px-4 py-2">
        <Button variant="primary" onClick={() => redirect("/data")}>
          {"<"}Back
        </Button>
        <Button variant="primary" onClick={() => redirect("/inference")}>
          Next{">"}
        </Button>
      </div>
      <div className="container mt-2">
        <div className="row mt-2">
          <div className="p-2">
            <h3 className="mb-4">
              <span className="text-decoration-underline link-offset-1">
                Connect to SQL DB
              </span>
            </h3>
            <Form className="container px-5" onSubmit={handleSubmit}>
              <Form.Group className="row mb-1">
                <Form.Label className="col-3 my-auto">Host</Form.Label>
                <Form.Control
                  name="host"
                  className="col border-dark rounded-pill"
                  type="text"
                  placeholder="192.168.1.1"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="row mb-1">
                <Form.Label className="col-3 my-auto">Port</Form.Label>
                <Form.Control
                  name="port"
                  className="col border-dark rounded-pill"
                  type="text"
                  placeholder="Port"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="row mb-1">
                <Form.Label className="col-3 my-auto">Username</Form.Label>
                <Form.Control
                  name="username"
                  className="col border-dark rounded-pill"
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="row mb-1">
                <Form.Label className="col-3 my-auto">Password</Form.Label>
                <Form.Control
                  name="password"
                  className="col border-dark rounded-pill"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="row mb-3">
                <Form.Label className="col-3 my-auto">Database</Form.Label>
                <Form.Control
                  name="database"
                  className="col border-dark rounded-pill"
                  type="text"
                  placeholder="Database"
                  autoComplete="off"
                />
              </Form.Group>
              <div className="row justify-content-end">
                <div className="text-center">
                  <Button
                    variant="info"
                    className="me-2 text-white"
                    type="reset"
                  >
                    Reset
                  </Button>
                  <Button
                    variant="info"
                    className="ms-2 text-white"
                    type="submit"
                  >
                    Connect
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SQLConnectScreen;
