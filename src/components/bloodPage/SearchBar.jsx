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
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bloodActions } from "../store/BloodSlice";
import { searchActions } from "../store/Search";
import { updateActions } from "../store/updateBloodSlice";
import { Icons } from "../../theme/styles";

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
  const [types, setTypes] = useState([]);
  const [groups, setGroups] = useState([]);
  const count = useSelector((state) => state.blood.count);
  let i = 0;
  const getTypes = useCallback(() => {
    axios.get("http://localhost:9005/blood-bank/blood/type").then((res) => {
      setTypes(res.data);
    });
  }, [count]);
  const getGroups = useCallback(() => {
    axios.get("http://localhost:9005/blood-bank/blood/groups").then((res) => {
      setGroups(res.data);
    });
  }, [count]);

  useEffect(() => {
    getGroups();
    getTypes();
  }, [getGroups, getTypes]);

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
    dispatch(bloodActions.getGroup(bloodGrp))
    dispatch(bloodActions.getGiven(givenTo)) 
    dispatch(bloodActions.getReceive(receivedFrom))
    dispatch(bloodActions.setCount())

    setGivenTo("")
    setRecievedFrom("")
    setBloodGrp("")
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={2}>
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
            <InputLabel id="demo-select-small">Received From</InputLabel>
            <Select
              label="Received From"
              onChange={handleReceivedFrom}
              value={receivedFrom}
              name="receivedFrom"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {types.map((type) => (
                <MenuItem key={i++} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Given To</InputLabel>
            <Select
              label="Given To"
              onChange={handleGivenTo}
              value={givenTo}
              name="givenTo"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {types.map((type) => (
                <MenuItem key={i++} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Blood Group</InputLabel>
            <Select
              label="Blood Group"
              onChange={handleBloodGrpChange}
              value={bloodGrp}
              name="groups"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {groups.map((group) => (
                <MenuItem key={i++} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
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
        {/* <Search>
          <InputBase placeholder="Search..." sx={{ flex: 2 }} />
          <SearchOutlined color="secondary" />
        </Search> */}
      </SearchToolBar>
    </Stack>
  );
};

export default SearchBar;
