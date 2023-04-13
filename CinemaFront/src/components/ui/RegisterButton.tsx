import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import RegisterForm from '../forms/RegisterForm';

const RegisterButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <button className="nav-link px-2 text-white" onClick={handleOpenModal}>Реєстрація</button>
        <Modal show={isModalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Реєстрація</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegisterForm onClose={handleCloseModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
  
  export default RegisterButton;