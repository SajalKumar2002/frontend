import React, { useState } from "react";
import { Link } from "react-router-dom";

import { api3, http } from "../http";

import { Button, Spinner } from "react-bootstrap";

const PDFConnectScreen = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [acceptedFile, setAcceptedFile] = useState(
    localStorage.getItem("pdf") ? JSON.parse(localStorage.getItem("pdf")) : {}
  );

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();

    const pdfFiles = selectedFile?.type === "test/pdf";

    if (pdfFiles) {
      alert("Please select only pdf files");
      return;
    }

    formData.append(`files`, selectedFile);

    try {
      const response = await http.post("/data/pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      await handleFileURL(response?.data?.file);
    } catch (error) {
      alert(`Error: ${error?.response?.data?.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleFileURL = async (url) => {
    const data = { s3_link: url };
    try {
      const response = await api3.post("/upload", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(`${response?.data?.message}`);
      setAcceptedFile(selectedFile);
      setSelectedFile();
    } catch (error) {
      console.log(error);
      alert(`Error: ${error.response.data}`);
    }
  };

  return (
    <div className="container main-content">
      <div className="row">
        <div className="col-7 p-2">
          <h3 className="mb-4">
            <span className="text-decoration-underline link-offset-1">
              Upload PDF Files
            </span>
          </h3>
          <form onSubmit={handleSubmit}>
            <section className="container">
              <div className="p-3 border-1 mb-3">
                <input type="file" onChange={handleFileChange} accept=".pdf" />
                <p>Files to Upload</p>
                <ol>
                  {selectedFile?.name ? <li>{selectedFile.name}</li> : <></>}
                </ol>
                <p>Uploaded Files</p>
                {loading ? (
                  <div>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
                  <ol>
                    {acceptedFile?.name ? <li>{acceptedFile.name}</li> : <></>}
                  </ol>
                )}
              </div>
            </section>
            <div className="container d-flex justify-content-around">
              <Button
                type="submit"
                className={`${selectedFile ? "" : "disabled"}`}
              >
                Upload
              </Button>
              <Link to="/model" className={`btn`}>
                Go to Models Tab
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PDFConnectScreen;
