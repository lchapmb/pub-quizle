// react import
import { useEffect, useState } from "react";

// model import
import LetterModel from "../models/LetterModel";

// imports for MUI
import { Container, Box, Avatar, Button } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Keyboard() {
  const qwerty = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "E", "R", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const [letters, setLetters] = useState(
    qwerty.map((row) => row.map((letter) => new LetterModel(letter)))
  );

  return (
    <Container disableGutters>
      {letters.map((row, index) => (
        <Box
          component="form"
          sx={{
            m: 0.5,
            display: "flex",
            justifyContent: "center",
          }}
          noValidate
          autoComplete="off"
          key={index}
        >
          {row.map((letter, index) => (
            <Avatar
              variant="square"
              sx={{ m: 0.5, width: 24, height: 24, bgcolor: blue[500] }}
              key={index}
            >
              {letter.letter}
            </Avatar>
          ))}
        </Box>
      ))}
      <Box
        component="form"
        sx={{
          m: 0.5,
          display: "flex",
          justifyContent: "space-around",
        }}
        noValidate
        autoComplete="off"
      >
        <Button variant="contained">Submit</Button>
        <Button variant="contained">Delete</Button>
      </Box>
    </Container>
  );
}
