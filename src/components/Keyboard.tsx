// import context
import { useLettersContext } from "../views/Landing";

// import model
import LetterModel from "../models/LetterModel";

// imports for MUI
import { Container, Box, Avatar, Button } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Keyboard() {
  const { letters, handleLetterClick, handleDeleteLastLetter } =
    useLettersContext();

  function HandleKeyClick(letter: LetterModel) {
    handleLetterClick(letter);
  }

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
              onClick={() => {
                if (!letter.isWrong) {
                  HandleKeyClick(letter);
                }
              }}
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
        <Button variant="contained" onClick={handleDeleteLastLetter}>
          Delete
        </Button>
      </Box>
    </Container>
  );
}
