import styled from "@emotion/styled";
import {
  Email,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/authSlice";
import { useNavigate } from "react-router-dom";

const StyleModal = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Signup = () => {
  const [isShown, setIsShown] = useState(true);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<Visibility />);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [verifPass, setVerifPass] = useState("");
  const [password, setPassword] = useState("");
  const [mes, setMes] = useState("");
  const navigateor = useNavigate();
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.auth.showAlertSignUp);

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
  const getName = (e) => {
    setName(e.target.value);
  };
  const getVerifPass = (e) => {
    setVerifPass(e.target.value);
  };

  const closeHandler = () => {
    dispatch(authActions.changeAlertStateSign());
  };

  const navigate = () => {
    navigateor("/");
  };

  const signup = (e) => {
    e.preventDefault();
    if (password !== verifPass) {
      setMes("verif your password!");
      dispatch(authActions.changeAlertStateSign());
    }
    console.log("user added");
    axios
      .post("http://localhost:9005/blood-bank/authentification", {
        adress: email,
        code: password,
        role: "-",
        name: name,
      })
      .then((res) => {
        // dispatch(authActions.getRole(res.data.role));
        // dispatch(authActions.changeLoginStatus());
        navigate();
      })
      .catch((e) => {
        dispatch(authActions.changeAlertStateSign());
        setMes("this Email already exists");
      });
  };

  return (
    <StyleModal paddingTop={4}>
      <form onSubmit={signup}>
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
              Sign up
            </ListSubheader>
          }
        >
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <Input
              placeholder="enter your name"
              type="text"
              onChange={getName}
              required
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <Input
              placeholder="enter your email"
              type="email"
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
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <Input
              placeholder="Verify your password"
              type="password"
              onChange={getVerifPass}
              required
            />
          </ListItem>

          <ListItem sx={{ justifyContent: "center" }}>
            <Button type="submit" variant="outlined">
              Sign up
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
            {mes}
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

export default Signup;
