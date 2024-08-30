import React from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = ({ show, handleClose, errorMessage }) => {
  const handleOkClick = () => {
    handleClose();
    window.location.reload();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOkClick}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
