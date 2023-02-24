import { Home, OpenWith, Person, PowerSettingsNew } from "@mui/icons-material";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { Icons, StyledToolBar, Text } from "../theme/styles";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <StyledToolBar variant="dense">
          <Icons>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <PowerSettingsNew />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <OpenWith />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Home />
            </IconButton>
            <Text>
              <Typography>name.clinisys</Typography>
              <Person />
            </Text>
          </Icons>
          <Text>
            <Typography color="inherit" component="div">
              page name
            </Typography>
            <Typography color="inherit" component="div">
              CliniSysErp
            </Typography>
          </Text>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
