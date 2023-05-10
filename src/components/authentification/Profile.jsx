import styled from "@emotion/styled";
import { Settings } from "@mui/icons-material";
import { Box, Button, Divider, Input, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/authSlice";

const PageName = styled(Box)({
  display: "flex",
  margin: 50,
  justifyContent: "end",
  alignItems: "center",
  gap: 10,
});

const Profile = () => {
  const role = useSelector((state) => state.auth.role);
  const [isDisabled, setIsDisabled] = useState(true);
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState(role.name);
  const [password, setPassword] = useState(role.code);
  const dispatch = useDispatch()

  const profileItems = [
    { label: "Email", variable: role.adress },
    { label: "Role", variable: role.role },
    { label: "Creation Date", variable: role.datecreate }
  ];

  const editHandler = () => {
    setEdit(false);
    setIsDisabled(false);
  };

  const getName = (e) => {
    setName(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const saveUpdates = () => {
    axios
      .put(`http://localhost:9005/blood-bank/authentification/${role.adress}`, {
        adress: role.adress,
        name: name,
        code: password,
      })
      .then((res) => {
        console.log("profile:", res.data);
       dispatch(authActions.getRole(res.data));
      });
    setEdit(true);
    setIsDisabled(true);
  };

  return (
    <Stack>
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Profile
        </Typography>
        <Settings sx={{ width: 40, height: 40, color: "lightgrey" }} />
      </PageName>
      <Stack ml={60} mr={60}>
        <Stack flexDirection={"row"} marginTop={4}>
          <Typography variant="h6" flex={1}>
            Name:
          </Typography>
          <Divider />
          <Input
            disabled={edit}
            placeholder={role.name}
            sx={{ flex: 1, justifyContent: "start" }}
            onChange={getName}
          />
        </Stack>
        {profileItems.map((profile) => (
          <Stack key={profile.label} flexDirection={"row"} marginTop={4}>
            <Typography variant="h6" flex={1}>
              {profile.label}:
            </Typography>
            <Divider />
            <Input
              disabled
              placeholder={profile.variable}
              sx={{ flex: 1, justifyContent: "start" }}
            />
          </Stack>
        ))}
        <Stack flexDirection={"row"} marginTop={4}>
          <Typography variant="h6" flex={1}>
            Password:
          </Typography>
          <Divider />
          <Input
            disabled={edit}
            placeholder={role.code}
            onChange={getPassword}
            sx={{ flex: 1, justifyContent: "start" }}
          />
        </Stack>
        <Stack flexDirection={"row"} gap={2} justifyContent={"end"} mt={4}>
          <Button variant="outlined" onClick={editHandler}>
            Edit
          </Button>
          <Button
            variant="outlined"
            onClick={saveUpdates}
            disabled={isDisabled}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
