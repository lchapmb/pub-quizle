// react import
import { useEffect, useState } from "react";

// controller import
import { QuizzleController } from "../controllers/Quizzle.Controller";

// model import
import LetterModel from "../models/LetterModel";

// imports for MUI
import { Container, Box, TextField } from "@mui/material";

export default function WordleBoxes() {
  const [targetWord, setTargetWord] = useState("");
  const [displayGrid, setDisplayGrid] = useState(
    [0, 1, 2, 3, 4].map(() => [0, 1, 2, 3, 4].map(() => ""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [letters, setLetters] = useState<LetterModel[]>();

  useEffect(() => {
    QuizzleController.generateQuizzleWord().then((word) => {
      setTargetWord(word);
      return;
    });
    console.log(targetWord);
  }, []);

  return (
    <Container>
      {displayGrid.map((row, index) => (
        <Box
          component="form"
          sx={{
            m: 0.5,
            display: "flex",
          }}
          noValidate
          autoComplete="off"
          key={index}
        >
          {row.map((letter: string, index: number) => (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                m: 0.5,
              }}
              size="small"
              key={index}
              disabled
            >
              {letter}
            </TextField>
          ))}
        </Box>
      ))}
    </Container>
  );
}
