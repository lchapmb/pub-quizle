// react import
import { useEffect, useState } from "react";

// imports for MUI
import { Container, Box, TextField } from "@mui/material";
import { useAnswerContext } from "../views/Landing";

export default function WordleBoxes() {
  const { targetWord } = useAnswerContext();
  const [displayGrid, setDisplayGrid] = useState(
    [0, 1, 2, 3, 4].map(() => [0, 1, 2, 3, 4].map(() => ""))
  );
  const [currentRow, setCurrentRow] = useState(0);

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
