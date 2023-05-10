import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  Modal,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { AjoutActions } from "../store/ajout";
import { GetActions } from "../store/get";
import axios from "axios";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Ajout = () => {
  const patient = useSelector((state) => state.ajoutDonation.patient);

  const sh = useSelector((state) => state.ajoutDonation.show);

  const ajou = useDispatch();

  const [age, setAge] = useState("");
  const [typeIdentity, setTypeIdentity] = useState("");
  const [numIdentity, setNumIdentity] = useState("");
  const [state, setState] = useState("PENDING");
  const blood = "-";

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleTypeIdentity = (e) => {
    setTypeIdentity(e.target.value);
  };
  const handleNumIdentity = (e) => {
    setNumIdentity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9005/blood-bank/donation", {
      fullName: patient.fullNameAr,
      codePatient: patient.code,
      age: age,
      typeIdentity: typeIdentity,
      numIdentity: numIdentity,
      adress: patient.adress,
      etat: state,
      blood: blood,
      sexe: patient.gender,
      phoneNumber: patient.phoneNumber,
    }).then(res => {
      console.log("done");
      ajou(GetActions.modifcounteur())
    }).catch(e => {
      console.log("error");
    });

    setTypeIdentity("");
    setNumIdentity("");
    setAge("");
    setState("");
    ajou(AjoutActions.Showme());
  };

  const showCardHandler = () => {
    ajou(AjoutActions.Showme());
    setTypeIdentity("");
    setNumIdentity("");
    setAge("");
    setState("");
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={sh}
        onClose={showCardHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box bgcolor="white" p={3} borderRadius={5}>
          <List>
            <form onSubmit={submitHandler}>
              <ListItem sx={{ display: "flex", gap: 16 }}>
                <CancelOutlined onClick={showCardHandler} />
                <Typography variant="h6" color="gray" textAlign="center">
                  ajout Donation
                </Typography>
              </ListItem>

              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 2 }}
              >
                <InputLabel>Code:</InputLabel>
                <Typography>
                  <u>{patient.code}</u>
                </Typography>
              </ListItem>

              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 2 }}
              >
                <InputLabel>Full Name:</InputLabel>
                <Typography>
                  <u>{patient.fullNameAr}</u>
                </Typography>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 2 }}
              >
                <InputLabel>Adress:</InputLabel>
                <Typography>
                  <u>{patient.adress}</u>
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex", gap: 5, margin: 2 }}>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>type Identity :</InputLabel>
                  <Input
                    value={typeIdentity}
                    onChange={handleTypeIdentity}
                    required
                  />
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>Numero Identity : </InputLabel>
                  <Input
                    value={numIdentity}
                    onChange={handleNumIdentity}
                    required
                  />
                </FormControl>
              </ListItem>

              <ListItem sx={{ display: "flex", gap: 4, margin: 2 }}>
                <FormControl variant="standard" sx={{ manWidth: 100 }}>
                  <InputLabel>age:</InputLabel>
                  <Input value={age} onChange={handleAge} />
                </FormControl>
              </ListItem>

              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button onClick={showCardHandler} variant="outlined">
                  <Typography>cancel</Typography>
                </Button>
                <Button type="submit" variant="outlined">
                  <Typography>Add</Typography>
                </Button>
              </ListItem>
            </form>
          </List>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Ajout;
