import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Help() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Toggle static offcanvas
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Допомога</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            I will not close if you click outside of me.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  