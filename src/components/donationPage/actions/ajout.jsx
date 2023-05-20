import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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

  const show = useSelector((state) => state.ajoutDonation.show);
  const verif = useSelector((state) => state.ajoutDonation.showError);

  const ajou = useDispatch();

  const [age, setAge] = useState(0);
  const [state, setState] = useState("PENDING");

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9005/blood-bank/donation", {
        fullName: patient.fullNameEng,
        codePatient: patient.code,
        tension: age,
        adress: patient.adress,
        etat: state,
        blood: "--",
        sexe: patient.gender,
        phoneNumber: patient.phoneNumber,
      })
      .then((res) => {
        console.log("done");
        ajou(GetActions.modifcounteur());
        ajou(AjoutActions.showBonBefore());
        ajou(AjoutActions.Showme());
      })
      .catch((e) => {
        console.log("error");
      });

    setAge("");
    setState("");
  };

  const showCardHandler = () => {
    ajou(AjoutActions.Showme());

    setAge("");
    setState("");
  };

  const closeHandler = () => {
    ajou(AjoutActions.showError())
  }

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
              Add Donation
            </Typography>
          </Box>
          <List>
            <form onSubmit={submitHandler}>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>Code:</InputLabel>
                <Typography sx={{ flex: 2 }}>
                  <u>{patient.code}</u>
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>Full Name:</InputLabel>
                <Typography sx={{ flex: 2 }}>
                  <u>{patient.fullNameEng}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>Adress:</InputLabel>
                <Typography sx={{ flex: 2 }}>
                  <u>{patient.adress}</u>
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 2 }}>tension:</InputLabel>
                <Input
                  sx={{ flex: 2 }}
                  // value={age}
                  onChange={handleAge}
                  required
                />
              </ListItem>

              <ListItem sx={{ justifyContent: "right", gap: 3, mt: 2 }}>
                <Button onClick={showCardHandler} variant="outlined">
                  <Typography>cancel</Typography>
                </Button>
                <Button type="submit" variant="outlined">
                  <Typography>Add</Typography>
                </Button>
              </ListItem>
            </form>
            <Dialog
                  open={verif}
                  onClose={closeHandler}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Error!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      There was a problem!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeHandler} autoFocus>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
          </List>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Ajout;
