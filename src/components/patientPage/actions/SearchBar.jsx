import {
  Alert,
  Button,
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

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "0 10px",
//   width: "30%",
//   border: "1.5px solid #1D95BB",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   borderRadius: theme.shape.borderRadius,
// }));

const SearchBar = () => {
  const verif = useSelector((state) => state.modif.select);
  const aj = useDispatch();

  const [lastNameAr, setlastnamear] = useState("");
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
  const handleLastnamear = (e) => {
    setlastnamear(e.target.value);
  };

  const searchHandler = () => {
    aj(GetActions.CodePat(CodePatient));
    aj(GetActions.lastName(lastNameAr));
    aj(GetActions.NumTel(PhoneNumber));
    aj(ModifActions.modifCounteur());

    setlastnamear("");
    setCodePatient("");
    setPhoneNumber("");
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
          {verif && (
            <Alert severity="warning">you need to select a patient!</Alert>
          )}
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
            <InputLabel>Search by code:</InputLabel>
            <Input value={CodePatient} onChange={handleCode} />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel>Search by last name:</InputLabel>
            <Input value={lastNameAr} onChange={handleLastnamear} />
          </FormControl>

          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <InputLabel>Search by Num tel:</InputLabel>
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
    </Stack>
  );
};

export default SearchBar;
