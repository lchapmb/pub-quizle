import { Container, Box, Typography, Divider } from "@mui/material";

export default function Feedback() {
  return (
    <Container>
      <Divider />
      <Box
        sx={{
          m: 0.5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Feedback</Typography>
      </Box>
    </Container>
  );
}
