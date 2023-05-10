import {
  Box,
  Button,
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
import { ModifActions } from "../store/Modifredux";
import axios from "axios";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Modif = () => {

  const patient = useSelector((state) => state.modif.patient);

  const cancel = useSelector((state) => state.modif.showUpdate);

  const up = useDispatch();

  const [Email, setEmail] = useState(patient.email);
  const [Adress, setAdress] = useState(patient.adress);
  const [NumberPhone, setNumber] = useState(patient.phoneNumber);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9005/blood-bank/patient/${patient.code}`, {
        code: patient.code,
        firstNameAr: patient.firstNameAr,
        lastNameAr: patient.lastNameAr,
        fatherNameAr: patient.fatherNameAr,
        grandFatherNameAr: patient.grandFatherNameAr,
        fullNameAr: patient.fullNameAr,
        firstNameEng: patient.firstNameEng,
        lastNameEng: patient.lastNameEng,
        fatherNameEng: patient.fatherNameEng,
        grandFatherNameEng: patient.grandFatherNameEng,
        fullNameEng: patient.fullNameEng,
        birthDate: patient.birthDate,
        gender: patient.gender,
        phoneNumber: NumberPhone,
        adress: Adress,
        email: Email,
        bloodCode: patient.bloodCode,
      })
      .then((res) => {
        console.log("udateted");
        up(ModifActions.modifCounteur());
      })
      .catch((e) => {
        console.log("error");
      });
    up(ModifActions.ShowAlert());

    setEmail("");
    setAdress("");
    setNumber("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const closeHandler = () => {
    up(ModifActions.ShowAlert());
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={cancel}
        onClose={closeHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={400} bgcolor="white" padding={3} borderRadius={5}>
          <List>
            <form onSubmit={updateHandler}>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <CancelOutlined sx={{ flex: 0.2 }} onClick={closeHandler} />
                <Typography
                  variant="h6"
                  color="gray"
                  textAlign="center"
                  sx={{ flex: 2, alignItems: "center" }}
                >
                  Update Patient
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex", marginTop: 5 }}>
                <InputLabel sx={{ flex: 1 }}>Code Patient:</InputLabel>
                <Typography flex={2}>
                  <u>{patient.code}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 1 }}>Last Name:</InputLabel>
                <Typography flex={2}>
                  <u>{patient.lastNameEng}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{ flex: 1 }}> Birdhay:</InputLabel>
                <Typography flex={2}>
                  <u>{patient.birthDay}</u>
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <InputLabel sx={{ flex: 1 }}>Email:</InputLabel>
                <Input
                  sx={{ flex: 2 }}
                  type="email"
                  onChange={handleEmail}
                  placeholder={patient.email}
                />
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <InputLabel sx={{ flex: 1 }}>Adress:</InputLabel>
                <Input
                  sx={{ flex: 2 }}
                  onChange={handleAdress}
                  placeholder={patient.adress}
                />
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <InputLabel sx={{ flex: 1 }}>Phone :</InputLabel>

                <Input
                  sx={{ flex: 2 }}
                  onChange={handleNumber}
                  placeholder={patient.phoneNumber}
                />
              </ListItem>

              <ListItem sx={{ marginTop: 2, justifyContent: "right", gap: 1 }}>
                <Button onClick={closeHandler} variant="outlined">
                  <Typography>cancel</Typography>
                </Button>
                <Button type="submit" variant="outlined">
                  <Typography>Update</Typography>
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
