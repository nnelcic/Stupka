import React, { useState } from 'react';
import { Button, Form, Modal} from 'react-bootstrap';
import axios from 'axios';
import { getCurrentUserId } from '../../hooks/getCurrentUserId';

interface UpdateUserFormProps{
  modalCondition?: boolean
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ modalCondition }) => {
  const [isModalOpen, setIsModalOpen] = useState(modalCondition);

  function handleOpenModal(): void {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const id = getCurrentUserId();
      await axios.put(`https://localhost:7282/api/users/${id}`, 
        { email, password, firstName, lastName, birthday, phoneNumber }
      );
      window.location.href = "/Account"
    }
    catch(error) {
      setError('Invalid input');
    }
  };
  
  return (
    <>
    <button className="btn btn-primary me-md-2" onClick={handleOpenModal}>
        Оновити інформацію
    </button>
    <Modal show={isModalOpen} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Внесення змін</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Електронна пошта</Form.Label>
            <Form.Control type="email" placeholder="Введіть пошту" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введіть пароль" value={password} onChange={(event) => setPassword(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>Ім'я</Form.Label>
            <Form.Control type="text" placeholder="Введіть ім'я" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Прізвище</Form.Label>
            <Form.Control type="text" placeholder="Введіть прізвище" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBirthday">
            <Form.Label>День народження</Form.Label>
            <Form.Control type="date" placeholder="Введіть День народження" value={birthday} onChange={(event) => setBirthday(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Мобільний номер</Form.Label>
            <Form.Control type="tel" placeholder="Введіть номер" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
          </Form.Group>

          {error && <div>{error}</div>}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Змінити інформацію
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default UpdateUserForm;