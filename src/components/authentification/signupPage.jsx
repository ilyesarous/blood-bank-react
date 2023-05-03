import styled from "@emotion/styled";
import {
  Email,
  Person
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mes, setMes] = useState("");
  const [role, setRole] = useState("");
  const navigateor = useNavigate();
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.auth.showAlertSignUp);



  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getName = (e) => {
    setName(e.target.value);
  };
  const getRole = (e) => {
    setRole(e.target.value);
  };

  const closeHandler = () => {
    if(mes === "Verify email by the link sent on your email address"){
      navigate();
    }
    dispatch(authActions.changeAlertStateSign());
  };

  const navigate = () => {
    navigateor("/welcome");
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9005/blood-bank/authentification", {
        adress: email,
        role: role,
        name: name,
      })
      .then((res) => {
        setMes(res.data);
        dispatch(authActions.changeAlertStateSign());
      })
      .catch(() => {
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
              <Person />
            </ListItemIcon>
            <Input
              placeholder="set Role"
              type="text"
              onChange={getRole}
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
