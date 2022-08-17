import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Form } from "react-bootstrap";
import { useState } from "react";


const ModalForm = ({
  isOpen,
  handleClose,
  handleSubmit,
  closeModal,
  setUserName,
}) => {

  const [name, setName] = useState("");

  const handle = (e) => {
      e.preventDefault();
        console.log("NAME", name);
      handleSubmit(name);
  }
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Form onSubmit={handle}>
        <ModalHeader closeButton>
          <ModalTitle>Enter Your name to Chat</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <input
            className="p-2 w-full rounded-md border border-black"
            onChange={(e) => setName(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <button
            variant="primary"
            onClick={(e) => {
              closeModal();
            }}
            type="button"
          >
            Submit
          </button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default ModalForm;
