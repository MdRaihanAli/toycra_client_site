import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function MyComponent() {
  const [modalData, setModalData] = useState(null);

  // Function to open the modal with dynamic data
  const openModal = (data) => {
    setModalData(data);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <Button onClick={() => openModal('Dynamic Data')}>Open Modal</Button>

      {/* Modal component */}
      <Modal show={modalData !== null} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Dynamic Data Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the dynamic data */}
          {modalData}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default MyComponent