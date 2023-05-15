import {
  AddCircleOutline,
  SearchOutlined,
  UpdateOutlined,
} from "@mui/icons-material";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bloodActions } from "./BloodStore/BloodSlice";
import { updateActions } from "./BloodStore/updateBloodSlice";
import { Icons } from "../../theme/styles";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const SearchBar = () => {

  const [bloodGrp, setBloodGrp] = useState("");
  const [givenTo, setGivenTo] = useState("");
  const [receivedFrom, setRecievedFrom] = useState("");

  const handleBloodGrpChange = (event) => {
    setBloodGrp(event.target.value);
  };

  const handleGivenTo = (event) => {
    setGivenTo(event.target.value);
  };
  const handleReceivedFrom = (event) => {
    setRecievedFrom(event.target.value);
  };

  const dispatch = useDispatch();

  const showSideBarHandler = () => {
    dispatch(bloodActions.showCard());
  };
  const isOpen = useSelector((state) => state.updateBlood.showUpdate);
  const selected = useSelector((state) => state.updateBlood.selected);
  const showUpdateBarHandler = () => {
    dispatch(updateActions.showCardUpdate());
    console.log(isOpen);
  };

  const searchHandler = () => {
    dispatch(bloodActions.getGroup(bloodGrp));
    dispatch(bloodActions.getGiven(givenTo));
    dispatch(bloodActions.getReceive(receivedFrom));
    dispatch(bloodActions.setCount());

    setGivenTo("");
    setRecievedFrom("");
    setBloodGrp("");
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            onClick={showSideBarHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
          <Button
            onClick={showUpdateBarHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Update</Typography>
            <UpdateOutlined />
          </Button>
          {selected && (
            <Alert severity="warning">you need to select a blood</Alert>
          )}
        </Stack>

        <Stack flexDirection={"row"} gap={2}>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel id="demo-select-small">Receiver</InputLabel>
            <Input value={receivedFrom} onChange={handleReceivedFrom} />
          </FormControl>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Donor</InputLabel>
            <Input value={givenTo} onChange={handleGivenTo} />
          </FormControl>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Blood Group</InputLabel>
            <Input value={bloodGrp} onChange={handleBloodGrpChange}/>
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
