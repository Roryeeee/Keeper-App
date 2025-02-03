import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { Fab, Zoom } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab onClick={handleClick} size="small" style={{ backgroundColor: "#f5ba13", color: "#fff" }}>
          <RemoveIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
