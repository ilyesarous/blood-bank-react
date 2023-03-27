import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Modal,
  Select,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { AjoutActions } from "../store/ajout";
import { GetActions } from "../store/get";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Ajout = (props) => {
  const code = useSelector((state) => state.ajoutDonation.codeP);

  const adresse = useSelector((state) => state.ajoutDonation.adre);

  const lastname = useSelector((state) => state.ajoutDonation.lastname);

  const sh = useSelector((state) => state.ajoutDonation.show);

  const ajou = useDispatch();

  const [Age, setAge] = useState("");
  const [typeIdentity, setTypeIdentity] = useState("");
  const [NumIdentity, setNumIdentity] = useState("");
  const [State, setState] = useState("PENDING");

  const tabDonation = [typeIdentity, NumIdentity, Age, State];
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleTypeIdentity = (e) => {
    setTypeIdentity(e.target.value);
  };
  const handleNumIdentity = (e) => {
    setNumIdentity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };

  const togglerHandler = (e) => {
    e.preventDefault();
    ajou(AjoutActions.addDonation(tabDonation));
    ajou(GetActions.modifcounteur());
    setTypeIdentity("");
    setNumIdentity("");
    setAge("");
    setState("");
    ajou(AjoutActions.Showme());
  };

  const toggleAjoutDonationHandler = () => {
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
        onClose={toggleAjoutDonationHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box bgcolor="white" p={3} borderRadius={5}>
          <List>
            <form onSubmit={togglerHandler}>
              <ListItem sx={{ display: "flex", gap: 16 }}>
                <CancelOutlined onClick={toggleAjoutDonationHandler} />
                <Typography variant="h6" color="gray" textAlign="center">
                  ajout Donation
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <InputLabel>
                  Code:{" "}
                  <b>
                    <u>{code}</u>
                  </b>
                </InputLabel>
              </ListItem>

              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 5 }}
              >
                <InputLabel>
                  Full Name:{" "}
                  <b>
                    <u>{lastname}</u>
                  </b>
                </InputLabel>
                </ListItem>
                <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 5 }}
              >
                <InputLabel>
                  Adress:{" "}
                  <b>
                    <u>{adresse}</u>
                  </b>
                </InputLabel>
              </ListItem>

              <ListItem sx={{ display: "flex", gap: 5, margin: 2 }}>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>type Identity :</InputLabel>
                  <Input
                    value={typeIdentity}
                    onChange={handleTypeIdentity}
                    placeholder="type Identity..."
                    required
                  />
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>Numero Identity : </InputLabel>
                  <Input
                    value={NumIdentity}
                    onChange={handleNumIdentity}
                    placeholder="Numero Identity..."
                    required
                  />
                </FormControl>
              </ListItem>

              <ListItem sx={{ display: "flex", gap: 4, margin: 2 }}>
                <FormControl variant="standard" sx={{ manWidth: 100 }}>
                  <InputLabel>age:</InputLabel>
                  <Input
                    value={Age}
                    onChange={handleAge}
                    placeholder="Age..."
                  />
                </FormControl>

                {/* <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  // size="small"
                  variant="standard"
                >
                  <InputLabel id="demo-select-small">State</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={State}
                    label="State"
                    onChange={handleState}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="SOLVED">SOLVED</MenuItem>
                    <MenuItem value="REJECTED">REJECTED</MenuItem>
                    <MenuItem value="PENDING">PENDING</MenuItem>
                  </Select>
                </FormControl> */}
              </ListItem>

              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button onClick={toggleAjoutDonationHandler} variant="outlined">
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
