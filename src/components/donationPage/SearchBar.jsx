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
  let i = 0;

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            // onClick={showSideBarHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
          <Button
            // onClick={showUpdateBarHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Update</Typography>
            <UpdateOutlined />
          </Button>
          {/* {selected && (
            <Alert severity="warning">you need to select a blood</Alert>
          )} */}
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
              // onChange={handleReceivedFrom}

              name="receivedFrom"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              <MenuItem key={i++}>aaa</MenuItem>
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
              // onChange={handleGivenTo}

              name="givenTo"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              <MenuItem key={i++}>bbbb</MenuItem>
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
              // onChange={handleBloodGrpChange}

              name="groups"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              <MenuItem key={i++}>ccc</MenuItem>
            </Select>
          </FormControl>
          <Icons>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ mr: 2, border: ".5px solid #1D95BB" }}
              // onClick={searchHandler}
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
