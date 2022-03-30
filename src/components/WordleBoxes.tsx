// imports for MUI
import { Container, Box, TextField } from "@mui/material";

export default function WordleBoxes() {
  const word = "hello";
  const wordArr = word.split("");

  return (
    <Container>
      {wordArr.map(() => (
        <Box
          component="form"
          sx={{
            m: 0.5,
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          {wordArr.map((letter) => (
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={letter}
              sx={{
                m: 0.5,
              }}
              size="small"
            />
          ))}
        </Box>
      ))}
    </Container>
  );
}
