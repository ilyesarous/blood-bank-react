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
  const up = useDispatch();
  const get = useDispatch();

  const [lastNameAr, setlastnamear] = useState("");
  const [CodePatient, setCodePatient] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const toggleCounterHandler = () => {
    aj(AjoutActions.Showme());
  };
  const toggleCancelHandler = () => {
    up(ModifActions.Showme());
  };

  const handleCode = (e) => {
    setCodePatient(e.target.value);
  };
  const Codepa = () => {
    get(GetActions.CodePat(CodePatient));
    get(ModifActions.modifCounteur());
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const PhoneNum = () => {
    get(GetActions.NumTel(PhoneNumber));
    get(ModifActions.modifCounteur());
  };
  const handleLastnamear = (e) => {
    setlastnamear(e.target.value);
  };
  const lastName = () => {
    get(GetActions.lastName(lastNameAr));
    get(ModifActions.modifCounteur());
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            onClick={toggleCounterHandler}
            variant="outlined"
            sx={{ display: "flex", gap:  "10px", border: " solod 1.5px" }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline sx={{ color: "#1293b8" }} />
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

        <Stack flexDirection={"row"} sx={{ justifyContent: "right" }}>
          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <Stack
              flexDirection={"row"}
              sx={{
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <InputLabel>Search by code...</InputLabel>
              <Input
                value={CodePatient}
                onChange={handleCode}
                placeholder="Search......"
              />
              <IconButton onClick={Codepa}>
                <SearchOutlined color="secondary" />
              </IconButton>
            </Stack>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <Stack
              flexDirection={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                // border: "  1px solid  #808080" 
              }}
            >
              <InputLabel>Search by name...</InputLabel>
              <Input
                value={lastNameAr}
                onChange={handleLastnamear}
                placeholder="Search......"
              />
              <IconButton onClick={lastName}>
                <SearchOutlined color="secondary" />
              </IconButton>
            </Stack>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <Stack
              flexDirection={"row"}
              sx={{
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <InputLabel>Search by Num tel...</InputLabel>
              <Input
                value={PhoneNumber}
                onChange={handlePhoneNumber}
                placeholder="Search......"
              />
              <IconButton onClick={PhoneNum}>
                <SearchOutlined color="secondary" />
              </IconButton>
            </Stack>
          </FormControl>
        </Stack>
      </SearchToolBar>
    </Stack>
  );
};

export default SearchBar;
