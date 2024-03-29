import {
  Box,
  Button,
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
import { modifActions } from "../store/modif";
import { GetActions } from "../store/get";
import axios from "axios";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Modif = () => {
  const show = useSelector((state) => state.modifDonation.show);
  const donateur = useSelector((state) => state.modifDonation.donateur);

  const [state, setState] = useState("");
  const [blood, setBlood] = useState("");
  const [observation, setObservation] = useState("");
  const mf = useDispatch();

  const showCardHandler = () => {
    mf(modifActions.Showme());
    mf(modifActions.getDonateur(""))
  };
  const handleObservation = (e) => {
    setObservation(e.target.value);
  };
  const handleBlood = (e) => {
    if(donateur.blood === "--")
      setBlood(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const togglerHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9005/blood-bank/donation/${donateur.code}`, {
        code: donateur.code,
        codePatient: donateur.codePatient,
        fullName: donateur.fullName,
        age: donateur.age,
        sexe: donateur.sexe,
        typeIdentity: donateur.typeIdentity,
        numIdentity: donateur.numIdentity,
        phoneNumber: donateur.phoneNumber,
        adress: donateur.adress,
        blood: blood,
        observation: observation,
        etat: state,
      })
      .then((res) => {
        mf(GetActions.modifcounteur());
        if (state === "SOLVED") {
          mf(modifActions.showBonAfter());
        }
        mf(modifActions.Showme());
        mf(modifActions.getDonateur(""))
      })
      .catch((e) => {
        console.log("error");
      });

    setState("");
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
        <Box width="400px" bgcolor="white" p={3} borderRadius={5}>
          <Box sx={{ display: "flex" }}>
            <CancelOutlined
              onClick={showCardHandler}
              sx={{ marginRight: "25%" }}
            />
            <Typography variant="h6" color="gray" textAlign="center">
              update Donation
            </Typography>
          </Box>
          <List>
            <form onSubmit={togglerHandler}>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>Full Name:</InputLabel>
                <Typography flex={2} justifyContent={"center"}>
                  <u>{donateur.fullName}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>Blood Group:</InputLabel>
                <Input onChange={handleBlood} sx={{ flex: 2 }} />
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel id="demo-select-small" sx={{ flex: 2 }}>
                  State
                </InputLabel>
                <Select
                  variant="standard"
                  sx={{ flex: 2 }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={state}
                  label="State"
                  onChange={handleState}
                >
                  <MenuItem value="SOLVED">SOLVED</MenuItem>
                  <MenuItem value="REJECTED">REJECTED</MenuItem>
                </Select>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>Observation:</InputLabel>
                <Input onChange={handleObservation} sx={{ flex: 2 }} />
              </ListItem>

              <ListItem sx={{ justifyContent: "right", gap: 3, mt: 2 }}>
                <Button onClick={showCardHandler} variant="outlined">
                  <Typography>cancel</Typography>
                </Button>
                <Button type="submit" variant="outlined">
                  <Typography>update</Typography>
                </Button>
              </ListItem>
            </form>
          </List>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Modif;
