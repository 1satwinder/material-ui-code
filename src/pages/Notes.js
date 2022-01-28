import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <Typography variant="h6" align="center">
        {notes.map((note) => (
          <h1>{note.title}</h1>
        ))}
      </Typography>
    </div>
  );
}
