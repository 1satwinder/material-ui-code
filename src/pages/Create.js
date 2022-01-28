import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  field: {
    margin: "10px 20px",
    display: "block"
  }
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form Submitted ${title + details + category}`);

    fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, details, category})
    }).then( () => history.push('/'))
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Note Title"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          id="outlined-basic"
          label="Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />

        <FormControl className={classes.field}>
          <FormLabel>Select Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
        
            <FormControlLabel value="money" control={<Radio />} label="money" />
            <FormControlLabel value="todos" control={<Radio />} label="todos" />
            <FormControlLabel value="work" control={<Radio />} label="work" />
            <FormControlLabel value="random" control={<Radio />} label="random" />
          </RadioGroup>
        </FormControl>
        
        <br/>
        <Button
          className={`${classes.root}`}
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Contained
        </Button>
      </form>
    </Container>
  );
}
