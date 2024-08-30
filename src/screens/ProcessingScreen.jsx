import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";

import { http } from "../http";

const ProcessingScreen = () => {
  const [records, setRecords] = useState([]);
  const [result, setResult] = useState([]);

  const getJob = async () => {
    const response = await http.get("/job");
    if (response.data.success) {
      setRecords(response.data.job_details);
      setResult(response.data.job_details);
    }
  };

  const filterByJobID = (filteringText) => {
    setResult(
      records.filter((record) =>
        record.id.includes(filteringText.toLowerCase()) ? record : null
      )
    );
  };

  const filterByStatus = (filteringText) => {
    setResult(
      records.filter((record) =>
        record.status.includes(filteringText.toLowerCase()) ? record : null
      )
    );
  };

  useEffect(() => {}, [result]);

  useEffect(() => {
    getJob();
  }, []);

  return (
    <div className="container mt-4" style={{ height: "39rem" }}>
      <div className="row w-50">
        <p className="fs-4">
          You can check the status of model training jobs submitted in the
          "Model" section.
        </p>
      </div>

      <div className="row ms-0 mt-3 ps-0">
        <div className="col-5">
          <Form.Group className="row ps-2">
            <Form.Label className="col-4 my-auto">Search by Job ID</Form.Label>
            <Form.Control
              onChange={(event) => filterByJobID(event.target.value)}
              className="col border-dark rounded-pill"
              type="text"
              placeholder="Job ID"
            />
          </Form.Group>
        </div>
        <div className="col-5">
          <Form.Group className="row ps-2">
            <Form.Label className="col-4 text-end my-auto">
              Search by Status
            </Form.Label>
            <Form.Control
              onChange={(event) => filterByStatus(event.target.value)}
              className="col border-dark rounded-pill"
              type="text"
              placeholder="Status"
            />
          </Form.Group>
        </div>
      </div>

      {result.length > 0 ? (
        <div
          className="container ms-5 mt-4 w-75 overflow-auto scrollbar-hide"
          style={{ maxHeight: "25rem" }}
        >
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Job ID</th>
                <th>Submitted Time</th>
                <th>Expected Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {result.map((record, index) => (
                <tr className="text-center" key={index}>
                  <td>{index + 1}</td>
                  <td className="text-start">{record.id}</td>
                  <td>{record.createdAt}</td>
                  <td>{record.expectedTime}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProcessingScreen;
