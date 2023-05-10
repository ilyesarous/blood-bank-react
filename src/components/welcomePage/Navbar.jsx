import { Home, OpenWith, Person, PowerSettingsNew } from "@mui/icons-material";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Icons, StyledToolBar, Text } from "../../theme/styles";
import { fullScreenActions } from "../bloodPage/BloodStore/FullScreen";
import { authActions } from "../authentification/store/authSlice";

const Navbar = () => {
  const loggedin = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.role)
  const dispatch = useDispatch();
  const navigateor = useNavigate();

  const fullScreen = useSelector((state) => state.fullScreen.fullScreen);
  const fullScreenHandler = () => {
    dispatch(fullScreenActions.fullScreenMode());
    if (fullScreen) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  const logout = () => {
    dispatch(authActions.changeLogoutStatus());
    navigateor("/");
  };
  const goToProfile = () => {
    navigateor("/profile");
  }

  return (
    <Box>
      <AppBar position="static">
        <StyledToolBar variant="dense">
          {/* {loggedin && ( */}
            <Icons>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={logout}
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
              <Link to="/welcome" style={{ color: "white" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Home />
                </IconButton>
              </Link>
                <Typography>{name.name}.clinisys</Typography>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={goToProfile}
                >
                  <Person />
                </IconButton>
            </Icons>
          {/* )} */}
          <Box display={"flex"} width={"100%"} justifyContent={"right"}>
            <Text>
              <Typography color="inherit" component="div">
                page name
              </Typography>
              <Typography color="inherit" component="div">
                CliniSysErp
              </Typography>
            </Text>
          </Box>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
