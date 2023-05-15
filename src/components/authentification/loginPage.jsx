import styled from "@emotion/styled";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/authSlice";
import { useNavigate } from "react-router-dom";

const StyleModal = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Auth = () => {
  const [isShown, setIsShown] = useState(true);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<Visibility />);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const role = useSelector((state) => state.auth.role);
  const navigateor = useNavigate();
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.auth.showAlertLogin);

  const showPassword = () => {
    setIsShown(!isShown);
    if (isShown) {
      setType("text");
      setIcon(<VisibilityOff />);
    } else {
      setType("password");
      setIcon(<Visibility />);
    }
  };



  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const closeHandler = () => {
    dispatch(authActions.changeAlertStateLog());
  };

  const navigate = () => {
    navigateor("/welcome");
  };


  const login = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://localhost:9005/blood-bank/authentification/${email}/${password}`
      )
      .then((res) => {
        dispatch(authActions.getRole(res.data))
        // window.localStorage.setItem("role", JSON.stringify(res.data))
        dispatch(authActions.changeLoginStatus());
        window.localStorage.setItem("isLoggedIn", true);
        navigate();
      })
      .catch((e) => {
        dispatch(authActions.changeAlertStateLog());
      });
  };

  return (
    <StyleModal paddingTop={4}>
      <form onSubmit={login}>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              sx={{
                textAlign: "center",
                fontSize: "25px",
                bgcolor: "transparent",
              }}
            >
              Sign in
            </ListSubheader>
          }
        >
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <Input
              placeholder="enter your email"
              // type="email"
              onChange={getEmail}
              required
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <Input
              placeholder="enter your password"
              type={type}
              onChange={getPassword}
              required
            />
            <ListItemIcon
              onClick={showPassword}
              sx={{
                ":hover": { color: "#1D95BB", cursor: "pointer" },
                paddingLeft: 2,
                borderRadius: "55px",
              }}
            >
              {icon}
            </ListItemIcon>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </ListItem>
        </List>
      </form>

      <Dialog
        open={disable}
        onClose={closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login failed!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Email or Password is incorrect!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </StyleModal>
  );
};

export default Auth;
