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
import { Stack } from "@mui/system";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Modif = (props) => {
  const codeup = useSelector((state) => state.modif.codeP);
  const LastName = useSelector((state) => state.modif.lastName);
  const birthday = useSelector((state) => state.modif.birth);
  const Num = useSelector((state) => state.modif.phone);
  const adress = useSelector((state) => state.modif.adresse);
  const email = useSelector((state) => state.modif.email);

  const cancel = useSelector((state) => state.modif.showUpdate);

  const up = useDispatch();

  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");
  const [NumberPhone, setNumber] = useState("");

  const tabPatientup = [codeup, Adress, Email, NumberPhone];

  const togglerHandler = (e) => {
    e.preventDefault();
    up(ModifActions.Updat(tabPatientup));
    up(ModifActions.modifCounteur());
    up(ModifActions.ShowAlert());

    setEmail("");
    setAdress("");
    setNumber("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // console.log(Email);

  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const toggleCancelHandler = () => {
    up(ModifActions.ShowAlert());
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
        <Box width={400} bgcolor="white" padding={3} borderRadius={5}>
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

              <ListItem sx={{ display: "flex", marginTop:5 }}>
                <InputLabel sx={{flex:1}}>Code Patient:</InputLabel>
                <Typography flex={2}>
                  <u>{codeup}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{flex:1}}>Last Name:</InputLabel>
                <Typography flex={2}>
                  <u>{LastName}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{flex:1}}> Birdhay:</InputLabel>
                <Typography flex={2}>
                  <u>{birthday}</u>
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                  <InputLabel sx={{flex:1}}>Email:</InputLabel>
                  <Input
                    sx={{flex:2}}
                    value={Email}
                    onChange={handleEmail}
                    placeholder={email}
                  />
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                  <InputLabel sx={{flex:1}}>Adress:</InputLabel>
                  <Input
                    sx={{flex:2}}
                    value={Adress}
                    onChange={handleAdress}
                    placeholder={adress}
                  />
              </ListItem>

              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                  <InputLabel sx={{flex:1}}>Phone :</InputLabel>

                  <Input
                    sx={{flex:2}}
                    value={NumberPhone}
                    onChange={handleNumber}
                    placeholder={Num}
                  />
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
