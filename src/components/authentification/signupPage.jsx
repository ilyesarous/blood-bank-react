import styled from "@emotion/styled";
import { AssignmentInd, Email, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  MenuItem,
  Select,
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
  const [title, setTitle] = useState("")
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
    if (mes === "Verify email by the link sent on your email address") {
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
        setTitle("Email Sent!")
        dispatch(authActions.changeAlertStateSign());
      })
      .catch(() => {
        dispatch(authActions.changeAlertStateSign());
        setTitle("Login failed!")
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
              <AssignmentInd />
            </ListItemIcon>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small" sx={{ flex: 2 }}>
                Role
              </InputLabel>
              <Select
                variant="standard"
                labelId="demo-select-small"
                id="demo-select-small"
                value={role}
                label="Role"
                onChange={getRole}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="request responsable">
                  Request Responsable
                </MenuItem>
                <MenuItem value="data responsable">Data Responsable</MenuItem>
                <MenuItem value="stock responsable">Stock Responsable</MenuItem>
              </Select>
            </FormControl>
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
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
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
