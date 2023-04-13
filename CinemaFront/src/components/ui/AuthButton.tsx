import React, { useState } from 'react';
import { Button, Form, Modal} from 'react-bootstrap';
import { DecodedToken, verifyAuthToken } from '../../hooks/verifyAuthToken';
import axios from 'axios';

interface AuthButtonProps {
  onLogin: (token: string) => void;
  onRole: (role: string) => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onLogin, onRole }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(): void {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle login logic here
    try {
      // Send a request to the server to authenticate the user and get a JWT token
      const response = await axios.post('https://localhost:7282/api/auth/login', {email, password});
      const token = response.data;

      localStorage.setItem('token', token);

      onLogin(token);

      const tokenInfo = verifyAuthToken();
      if (tokenInfo){
        const decodedToken = tokenInfo as DecodedToken;
        onRole(decodedToken.role);
        console.log(decodedToken.role);
      }
    }
    catch {
      // If authentication fails, show an error message
      setError('Invalid email or password');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  return (
    <div>
      <button className="nav-link px-2 text-white" onClick={handleOpenModal}>Вхід</button>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Вхід</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Електронна пошта</Form.Label>
              <Form.Control type="email" placeholder="Введіть пошту" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введіть пароль" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            {error && <div>{error}</div>}
            <Button variant="primary" type="submit" className="w-100">
              Увійти
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
  };
  
  export default AuthButton;

