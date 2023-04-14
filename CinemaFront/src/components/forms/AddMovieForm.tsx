import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export function AddMovie() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Додати новий фільм
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Додати фільм</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Оригінальна назва</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Назва</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Тривалість</Form.Label>
              <Form.Control type="number"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Дата релізу</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>URL постеру</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Опублікувати на головній сторінці" />
            </Form.Group>


            <Button variant="primary" type="submit">
              Додати деталі фільму
            </Button>
          </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Опублікувати
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Зберегти зміни
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 // render(<AddMovie />);