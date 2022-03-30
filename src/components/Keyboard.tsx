// imports for MUI
import { Container, Box, Button, IconButton, Avatar } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PublishIcon from "@mui/icons-material/Publish";

export default function Keyboard() {
  const qwerty = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    [<BackspaceIcon />, "z", "x", "c", "v", "b", "n", "m", <PublishIcon />],
  ];

  //   const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

  return (
    <Container>
      {qwerty.map((row) => (
        <Box
          component="form"
          sx={{
            m: 0.5,
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          {row.map((letter) => (
            <Box
              component="form"
              sx={{
                m: 0.5,
                display: "flex",
              }}
              noValidate
              autoComplete="off"
            >
              <Avatar variant="square" sx={{ m: 0.2, width: 24, height: 24 }}>
                {letter}
              </Avatar>
            </Box>
          ))}
        </Box>
      ))}
    </Container>
  );
}
