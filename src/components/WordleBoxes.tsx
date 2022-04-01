// import context
import { useLettersContext } from "../views/Landing";

// imports for MUI
import { Container, Box, TextField } from "@mui/material";

export default function WordleBoxes() {
  const { displayGrid, letterBackgroundColor, currentRow } =
    useLettersContext();

  return (
    <Container>
      {displayGrid.map((row, index) => (
        <Box
          component="form"
          sx={{
            m: 0.5,
            display: "flex",
            justifyContent: "center",
          }}
          noValidate
          autoComplete="off"
          key={`row_${index}`}
        >
          {row.map((letter: string, ii: number) => (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                m: 0.5,
                bgcolor:
                  index === currentRow ? "" : letterBackgroundColor(letter),
                maxWidth: 60,
              }}
              size="small"
              key={`letter_${ii}`}
              disabled
              value={letter}
            />
          ))}
        </Box>
      ))}
    </Container>
  );
}
