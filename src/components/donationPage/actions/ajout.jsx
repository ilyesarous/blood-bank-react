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
  const count = useSelector((state) => state.getDonation.counteur);

  const ajou = useDispatch();

  const [Age, setAge] = useState("");
  const [typeIdentity, setTypeIdentity] = useState("");
  const [NumIdentity, setNumIdentity] = useState("");
  const [State, setState] = useState("PENDING");
  const Blood = "-";

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleTypeIdentity = (e) => {
    setTypeIdentity(e.target.value);
  };
  const handleNumIdentity = (e) => {
    setNumIdentity(e.target.value);
  };

  const tabDonation = [typeIdentity, NumIdentity, Age, Blood, State];

  const submitHandler = (e) => {
    e.preventDefault();
    ajou(AjoutActions.addDonation(tabDonation));
    ajou(GetActions.modifcounteur());
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
                  <u>{code}</u>
                </Typography>
              </ListItem>

              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 2 }}
              >
                <InputLabel>Full Name:</InputLabel>
                <Typography>
                  <u>{lastname}</u>
                </Typography>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 2 }}
              >
                <InputLabel>Adress:</InputLabel>
                <Typography>
                  <u>{adresse}</u>
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
                    value={NumIdentity}
                    onChange={handleNumIdentity}
                    required
                  />
                </FormControl>
              </ListItem>

              <ListItem sx={{ display: "flex", gap: 4, margin: 2 }}>
                <FormControl variant="standard" sx={{ manWidth: 100 }}>
                  <InputLabel>age:</InputLabel>
                  <Input value={Age} onChange={handleAge} />
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
