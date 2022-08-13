import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const Formulario = () => {
    
  return (

    <div>
    <Form>
      <Form.Group className="my-5 d-flex">
        <Form.Control type="text" placeholder="Tarea..." />
      <Button variant="primary" type="submit" className="ms-1">
        Enviar
      </Button>
      </Form.Group>
    </Form>
    <ListaTarea></ListaTarea>
    </div>
  );
};

export default Formulario;
