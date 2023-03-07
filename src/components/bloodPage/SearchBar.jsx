import {
  AddCircleOutline,
  SearchOutlined,
  UpdateOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  InputBase,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bloodActions } from "../store/BloodSlice";
import { updateActions } from "../store/updateBloodSlice";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "30%",
  border: "1.5px solid #1D95BB",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
}));

const SearchBar = () => {
  const dispatch = useDispatch();

  const showSideBarHandler = () => {
    dispatch(bloodActions.showCard());
  };
  const isOpen = useSelector((state) => state.updateBlood.showUpdate);
  const selected = useSelector((state) => state.updateBlood.selected);
  const showUpdateBarHandler = () => {
    dispatch(updateActions.showCardUpdate())
    console.log(isOpen);
  }
  return (
    <Box>
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
          {selected && <Alert severity="warning">you need to select a blood</Alert>}
        </Stack>

        <Search>
          <InputBase placeholder="Search..." sx={{ flex: 2 }} />
          <SearchOutlined color="secondary" />
        </Search>
      </SearchToolBar>
    </Box>
  );
};

export default SearchBar;
