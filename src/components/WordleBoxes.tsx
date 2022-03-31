// imports for MUI
import { Container, Box, TextField } from "@mui/material";

export default function WordleBoxes() {
  const word = "hello";
  const wordArr = word.split("");
  const guesses = "abcdef";
  const guessesArr = guesses.split("");

  return (
    <Container>
      {guessesArr.map((guess) => (
        <Box
          component="form"
          sx={{
            m: 0.5,
            display: "flex",
          }}
          noValidate
          autoComplete="off"
          key={guess}
        >
          {wordArr.map((letter, index) => (
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={letter}
              sx={{
                m: 0.5,
              }}
              size="small"
              key={index}
            />
          ))}
        </Box>
      ))}
    </Container>
  );
}
