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
  MenuItem,
  Select,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../../theme/styles";
import { AjoutActions } from "./store/ajout";
import { modifActions } from "./store/modif";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});


const SearchBar = () => {

  const ajout = useDispatch();
  let i = 0;

  const toggleAjoutDonationHandler =() =>{
    ajout(AjoutActions.Showme());
    
  };
  const toggleModifDonationHandler =() =>{
    ajout(modifActions.Showme());
    
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            onClick={toggleAjoutDonationHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px " }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
          <Button
            onClick={toggleModifDonationHandler}
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
            <InputLabel id="demo-select-small">Numero Identity...</InputLabel>
            <Input  required />
          </FormControl>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Type Identity...</InputLabel>
            <Input  required />
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
