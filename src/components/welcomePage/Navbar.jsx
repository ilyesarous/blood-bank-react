import { Home, OpenWith, Person, PowerSettingsNew } from "@mui/icons-material";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Icons, StyledToolBar, Text } from "../../theme/styles";
import { fullScreenActions } from "../bloodPage/BloodStore/FullScreen";

const Navbar = () => {
  const dispatch = useDispatch();
  const fullScreen = useSelector(state => state.fullScreen.fullScreen)
  const fullScreenHandler = () => {
    dispatch(fullScreenActions.fullScreenMode());
    if (fullScreen) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };
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
              onClick={fullScreenHandler}
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
