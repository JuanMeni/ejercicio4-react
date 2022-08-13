import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = (props) => {
  return (
    <div>
      <ListGroup>
        <ItemTarea></ItemTarea>
      </ListGroup>
    </div>
  );
};

export default ListaTarea;
