// imports for MUI
import { Container, Box, Button, IconButton, Avatar } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PublishIcon from "@mui/icons-material/Publish";

export default function Keyboard() {
  const qwerty = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "E", "R", "F", "G", "H", "J", "K", "L"],
    [<BackspaceIcon />, "Z", "X", "C", "V", "B", "N", "M", <PublishIcon />],
  ];

  return (
    <Container disableGutters>
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
