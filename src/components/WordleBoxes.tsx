// react import
import { useState } from "react";

// import context
import { useLettersContext } from "../views/Landing";

// imports for MUI
import { Container, Box, TextField } from "@mui/material";

export default function WordleBoxes() {
  const { displayGrid, letterBackgroundColor } = useLettersContext();
  const [currentRow] = useState(0);

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
                bgcolor:
                  index === currentRow ? "" : letterBackgroundColor(letter),
              }}
              size="small"
              key={index}
              disabled
              value={letter}
            />
          ))}
        </Box>
      ))}
    </Container>
  );
}
