import {
  AddCircleOutline,
  DeleteOutline,
  SearchOutlined,
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
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../../theme/styles";
import { addActions } from "./store/AddSlice";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const SearchBar = () => {
  const code = useSelector((state) => state.addStock.code);
  
  const selected = useSelector((state) => state.addStock.selected);
  const dispatch = useDispatch();
  const showCard = useSelector((state) => state.addStock.show);

  const [blood, setBlood] = useState("")

  const showAddCardHandler = () => {
    dispatch(addActions.showCardHandler());
    console.log(showCard);
  };

  const getBloodHandler= (event) => {
    setBlood(event.target.value)
  }

  const searchHandler = () => {
    dispatch(addActions.getBlood(blood))
    dispatch(addActions.countHandler())

    setBlood("")
  }

  const deleteHandler = () => {
    if (code !== "") {
      axios
        .delete(`http://localhost:9005/blood-bank/stock/${code}`)
        .then(() => dispatch(addActions.countHandler()));
    }
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
            onClick={showAddCardHandler}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
          <Button
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
            onClick={deleteHandler}
          >
            <Typography>Delete</Typography>
            <DeleteOutline />
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
            <InputLabel id="demo-select-small">Blood Group</InputLabel>
            <Input onChange={getBloodHandler} value={blood}/>
          </FormControl>
          
          <Icons>
            <IconButton
              onClick={searchHandler}
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ mr: 2, border: ".5px solid #1D95BB" }}
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
 