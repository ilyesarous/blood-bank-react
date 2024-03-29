import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AddCircleOutline, SearchOutlined, Update } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { AjoutActions } from "../store/Ajoutredux";
import { ModifActions } from "../store/Modifredux";
import { GetActions } from "../store/getdata";
import { Icons } from "../../../theme/styles";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const SearchBar = () => {
  const verif = useSelector((state) => state.modif.select);
  const aj = useDispatch();

  const [fullNameEng, setfullNameEng] = useState("");
  const [CodePatient, setCodePatient] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const toggleCounterHandler = () => {
    aj(AjoutActions.Showme());
  };
  const toggleCancelHandler = () => {
    aj(ModifActions.ShowAlert());
  };

  const handleCode = (e) => {
    setCodePatient(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlefullNameEng = (e) => {
    setfullNameEng(e.target.value);
  };

  const searchHandler = () => {
    aj(GetActions.CodePat(CodePatient));
    aj(GetActions.lastName(fullNameEng));
    aj(GetActions.NumTel(PhoneNumber));
    aj(ModifActions.modifCounteur());

    setfullNameEng("");
    setCodePatient("");
    setPhoneNumber("");
  };
  const closeHandler = () => {
    aj(ModifActions.hideAlert());
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            onClick={toggleCounterHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
          <Button
            onClick={toggleCancelHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "2px", border: " solod 1px" }}
          >
            <Typography>Update</Typography>

            <Update />
          </Button>
        </Stack>

        <Stack flexDirection={"row"} gap={2}>
          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <InputLabel>Search by code</InputLabel>
            <Input value={CodePatient} onChange={handleCode} />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel>Search by name</InputLabel>
            <Input value={fullNameEng} onChange={handlefullNameEng} />
          </FormControl>

          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <InputLabel>Search by phone</InputLabel>
            <Input value={PhoneNumber} onChange={handlePhoneNumber} />
          </FormControl>
          <Icons>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ mr: 2, border: ".5px solid #1D95BB" }}
              onClick={searchHandler}
            >
              <SearchOutlined color="primary" />
            </IconButton>
          </Icons>
        </Stack>
      </SearchToolBar>
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
                      You need to select a patient!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeHandler} autoFocus>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
    </Stack>
  );
};

export default SearchBar;
