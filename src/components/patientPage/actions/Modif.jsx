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
import { ModifActions } from "../store/Modifredux";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Modif = (props) => {
  const codeup = useSelector((state) => state.modif.codeP);
  const LastName = useSelector((state) => state.modif.lastName);
  const birdhday = useSelector((state) => state.modif.birdh);
  const Num = useSelector(state => state.modif.phone);
  const adress = useSelector(state => state.modif.adresse);
  const email = useSelector(state => state.modif.email);

  const cancel = useSelector((state) => state.modif.show);


  const up = useDispatch();

  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");
  const [NumberPhone, setNumber] = useState("");
  
  const tabPatientup = [codeup, Adress, Email, NumberPhone];

  const togglerHandler = (e) => {
    e.preventDefault();
    up(ModifActions.Updat(tabPatientup));
    up(ModifActions.modifCounteur());
    up(ModifActions.Showme())

    setEmail("");
    setAdress("");
    setNumber("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log(Email);

  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const toggleCancelHandler = () => {
    up(ModifActions.Showme());
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={cancel}
        onClose={toggleCancelHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={500} bgcolor="white" padding={3} borderRadius={5}>
          <List>
            <form onSubmit={togglerHandler}>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <CancelOutlined
                  sx={{ flex: 0.2 }}
                  onClick={toggleCancelHandler}
                />
                <Typography
                  variant="h6"
                  color="gray"
                  textAlign="center"
                  sx={{ flex: 2, alignItems: "center" }}
                >
                  Update Patient
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <FormControl
                  variant="standard"
                >
                  <Typography>
                    Code Patient:
                    <b>
                      <u>{codeup}</u>
                    </b>
                  </Typography>
                </FormControl>
              </ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "space-around" }}>
                <FormControl
                  variant="standard"
                >
                  <Typography>
                    Last Name:
                    <b>
                      <u>{LastName}</u>
                    </b>
                  </Typography>
                </FormControl>
         
                <FormControl
                  variant="standard"
                  
                >
                  <Typography>
                    Birdhay:
                    <b>
                      <u>{birdhday}</u>
                    </b>
                  </Typography>
                </FormControl>
              </ListItem>

              <ListItem sx={{ display: "flex" , justifyContent: "center" }}>
                <FormControl variant="standard" sx={{ minWidth: 250 }}>

                  <InputLabel>{email}</InputLabel>
                  <Input
                    value={Email}
                    onChange={handleEmail}
                    placeholder={email}
                  />
                </FormControl>
              </ListItem>

              <ListItem sx={{ display: "flex" , justifyContent: "center" }}>
                <FormControl variant="standard" sx={{ minWidth: 250 }}>
                  <InputLabel>{adress}</InputLabel>
                  <Input
                    value={Adress}
                    onChange={handleAdress}
                    placeholder={adress}
                  />
                </FormControl>
              </ListItem>

              <ListItem sx={{ display: "flex" , justifyContent: "center" }}>
                <FormControl variant="standard" sx={{ minWidth: 250 }}>
                  <InputLabel>{Num}</InputLabel>

                  <Input
                    value={NumberPhone}
                    onChange={handleNumber}
                    placeholder={Num}
                  />
                </FormControl>
              </ListItem>

              <ListItem sx={{ marginTop: 2, justifyContent: "right", gap: 1 }}>
                <Button onClick={toggleCancelHandler} variant="outlined">
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
