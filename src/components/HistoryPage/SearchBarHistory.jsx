import { AddCircleOutline, SearchOutlined } from "@mui/icons-material";
import {
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

import { Icons } from "../../theme/styles";
import { useNavigate } from "react-router-dom";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const SearchBarHistory = () => {
  const navigator = useNavigate();
  
  const addDonation = () => {
    navigator("/patients/donnation");
  };
  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            onClick={addDonation}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"end"}
          gap={2}
          width={"100%"}
        >
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Date Create</InputLabel>
            <Input required />
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

export default SearchBarHistory;
