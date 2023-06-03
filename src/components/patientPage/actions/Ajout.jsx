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
  MenuItem,
  Modal,
  Select,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { AjoutActions } from "../store/Ajoutredux";
import { ModifActions } from "../store/Modifredux";
import axios from "axios";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Ajout = () => {
  const show = useSelector((state) => state.ajout.show);

  const aj = useDispatch();

  const [lastNameEng, setLastnameEng] = useState("");
  const [firstNameEng, setFirstnameEng] = useState("");
  const [fatherNameEng, setFathernameEng] = useState("");
  const [grandFatherNameEng, setGrandFathernameEng] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [gendre, setGender] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [typeIdentity, setTypeIdentity] = useState("");
  const [birdhday, setBirthday] = useState(null);
  const [numIdentity, setNumIdentity] = useState("");

  const verif = useSelector((state) => state.ajout.showAlert);

  const addPatient = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9005/blood-bank/patient", {
        adress: adress,
        birthDate: birdhday,
        email: email,
        fatherNameEng: fatherNameEng,
        firstNameEng: firstNameEng,
        gender: gendre,
        grandFatherNameEng: grandFatherNameEng,
        lastNameEng: lastNameEng,
        phoneNumber: phoneNumber,
        typeIdentity: typeIdentity,
        numIdentity: numIdentity,
      })
      .then((res) => {
        console.log("patient added!");
        aj(ModifActions.modifCounteur());
        aj(AjoutActions.Showme());
      })
      .catch((e) => {
        closeHandler();
        console.log("error!");
      });

    setLastnameEng("");
    setFirstnameEng("");
    setFathernameEng("");
    setGrandFathernameEng("");
    setEmail("");
    setAdress("");
    setGender("");
    setNumber("");
    setTypeIdentity("");
    setNumIdentity("");
    setBirthday(null);
  };

  const closeHandler = () => {
    aj(AjoutActions.ShowAlert());
  };

  const handleBirdhday = (e) => {
    setBirthday(e.target.value);
  };

  const handleLastnamEng = (e) => {
    setLastnameEng(e.target.value);
  };
  const handleFirstnameEng = (e) => {
    setFirstnameEng(e.target.value);
  };
  const handleFathernameEng = (e) => {
    setFathernameEng(e.target.value);
  };
  const handleGrandFathernameEng = (e) => {
    setGrandFathernameEng(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleNumIdentity = (e) => {
    setNumIdentity(e.target.value);
  };
  const handleIdentityType = (e) => {
    setTypeIdentity(e.target.value);
  };

  const showCardHandler = () => {
    setLastnameEng("");
    setFirstnameEng("");
    setFathernameEng("");
    setGrandFathernameEng("");
    setEmail("");
    setAdress("");
    setGender("");
    setNumber("");
    setTypeIdentity("");
    setNumIdentity("");

    aj(AjoutActions.Showme());
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={show}
        onClose={showCardHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width="750px" bgcolor="white" p={3} borderRadius={5}>
          <Box sx={{ display: "flex", gap: 11 }}>
            <CancelOutlined
              onClick={showCardHandler}
              sx={{ marginRight: "25%" }}
            />
            <Typography variant="h6" color="gray" textAlign="center">
              Add Patient
            </Typography>
          </Box>
          <List>
            <form onSubmit={addPatient}>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Last name</InputLabel>
                    <Input
                      onChange={handleLastnamEng}
                      value={lastNameEng}
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>First name </InputLabel>
                    <Input
                      onChange={handleFirstnameEng}
                      value={firstNameEng}
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Father's name </InputLabel>
                    <Input
                      onChange={handleFathernameEng}
                      value={fatherNameEng}
                      required
                    />
                  </FormControl>
                </ListItem>
              </ListItem>

              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Grand father's name</InputLabel>
                    <Input
                      onChange={handleGrandFathernameEng}
                      value={grandFatherNameEng}
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard" sx={{width: "100%"}}>
                    <InputLabel>Identity type</InputLabel>
                    <Select
                      variant="standard"
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={typeIdentity}
                      label="Identity type"
                      onChange={handleIdentityType}
                    >
                      <MenuItem value="cin">Cin</MenuItem>
                      <MenuItem value="passport">Passport</MenuItem>
                    </Select>
                  </FormControl>
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Identity number</InputLabel>
                    <Input
                      onChange={handleNumIdentity}
                      value={numIdentity}
                      required
                    />
                  </FormControl>
                </ListItem>
              </ListItem>

              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Email</InputLabel>
                    <Input onChange={handleEmail} value={email} required />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Adress</InputLabel>
                    <Input onChange={handleAdress} value={adress} required />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl variant="standard">
                    <InputLabel>Phone number</InputLabel>
                    <Input
                      onChange={handleNumber}
                      value={phoneNumber}
                      required
                    />
                  </FormControl>
                </ListItem>
              </ListItem>

              <ListItem>
                <ListItem sx={{ flex: 1 }}>
                  <TextField
                    onChange={handleBirdhday}
                    id="date"
                    label="Birthday"
                    type="date"
                    variant="standard"
                    sx={{ minWidth: 180 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </ListItem>

                <ListItem sx={{ flex: 1 }}>
                  <FormControl
                    sx={{ minWidth: 180 }}
                    size="small"
                    variant="standard"
                  >
                    <InputLabel id="demo-select-small">Gendre</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={gendre}
                      label="Age"
                      onChange={handleGender}
                    >
                      <MenuItem value={"male"}>male</MenuItem>
                      <MenuItem value={"female"}>female</MenuItem>
                    </Select>
                  </FormControl>
                </ListItem>
              </ListItem>

              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button onClick={showCardHandler} variant="outlined">
                  <Typography>cancel</Typography>
                </Button>
                <Button type="submit" variant="outlined">
                  <Typography>Add</Typography>
                </Button>
              </ListItem>
              <Dialog
                open={verif}
                onClose={closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Error!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    This Patient already exists
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeHandler} autoFocus>
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </form>
          </List>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Ajout;
