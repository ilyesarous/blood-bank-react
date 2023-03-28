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
import { modifActions } from "../store/modif";
import { GetActions } from "../store/get";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Modif = (props) => {
  const md = useSelector((state) => state.modifDonation.show);
  const lastname = useSelector((state) => state.modifDonation.lastname);
  const typeIdentity = useSelector((state) => state.modifDonation.type);
  const NumeroIdentity = useSelector((state) => state.modifDonation.numerotype);
  const [State, setState] = useState("");
  const [blood, setBlood] = useState("");

  const mf = useDispatch();

  const showCardHandler = () => {
    mf(modifActions.Showme());
  };

  const handleBlood = (e) => {
    setBlood(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const togglerHandler = (e) => {
    e.preventDefault();
    mf(modifActions.getstate(State))
    mf(modifActions.getBlood(blood));
    mf(modifActions.updatDonateur())
    mf(GetActions.modifcounteur());
    setState("");
    mf(modifActions.Showme());
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={md}
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
                <InputLabel sx={{flex: 2}} >Last Name:</InputLabel>
                <Typography flex={2} justifyContent={"center"}>
                  <u>{lastname}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{flex: 2}}>type Identity :</InputLabel>
                <Typography flex={2} justifyContent={"center"}>
                  <u>{typeIdentity}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel sx={{flex: 2}}>Numero Identity :</InputLabel>
                <Typography flex={2} justifyContent={"center"}>
                  <u>{NumeroIdentity}</u>
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <InputLabel>Blood Group:</InputLabel>
                <Input onChange={handleBlood} />
              </ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <FormControl
                  sx={{ m: 1, minWidth: 120, marginRight: "50%" }}
                  size="small"
                >
                  <InputLabel id="demo-select-small">State</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={State}
                    label="State"
                    onChange={handleState}
                  >
                    <MenuItem value="SOLVED">SOLVED</MenuItem>
                    <MenuItem value="REJECTED">REJECTED</MenuItem>
                    <MenuItem value="PENDING">PENDING</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>

              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
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
