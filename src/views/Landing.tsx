// import components
import Nav from "../components/Nav";

// import for mui
import { Container, Box, TextField } from "@mui/material";

export default function Landing() {
  const word = "hello";
  const wordArr = word.split("");
  const wordLen = wordArr.length;

  return (
    <>
      <Nav />
      <Container>
        <Box
          component="form"
          sx={{
            m: 1,
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
                m: 1,
              }}
            />
          ))}
        </Box>
        <Box
          component="form"
          sx={{
            m: 1,
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
                m: 1,
              }}
            />
          ))}
        </Box>
        <Box
          component="form"
          sx={{
            m: 1,
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
                m: 1,
              }}
            />
          ))}
        </Box>
        <Box
          component="form"
          sx={{
            m: 1,
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
                m: 1,
              }}
            />
          ))}
        </Box>
        <Box
          component="form"
          sx={{
            m: 1,
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
                m: 1,
              }}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}
