import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Price from '../../../types/priceTypes/Price';
import http from '../../../http-common';
import Card from 'react-bootstrap/Card';


export function GetAllPrices() {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [prices, setPrices] = useState<Price[]>([]);

    async function fetchPrices() {
        const response = await http.get<Price[]>("/prices");
        setPrices(response.data);
    }

    useEffect(() => {
        fetchPrices();
    }, []);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Подивитись всі ціни
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ціни</Modal.Title>
          </Modal.Header>
          <Modal.Body>           
         
          <Card>
            <Card.Body>Id:</Card.Body>
          </Card>
         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Редагувати
            </Button>            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 