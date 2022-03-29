// import for mui
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Pub Quizzle
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
