import { Container, Box, Typography, Divider } from "@mui/material";

export default function Feedback() {
  return (
    <Container>
      <Divider />
      <Box
        sx={{
          m: 0.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">
          Guess the WORDLE in six tries. Each guess must be a valid work. Hit
          submit to guess. After each guess, the color fo the tiles change to
          show how close your guess was to the word.
        </Typography>
      </Box>
    </Container>
  );
}
