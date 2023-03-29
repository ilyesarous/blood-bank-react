import {
    AddCircleOutline,
    SearchOutlined,
  } from "@mui/icons-material";
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
 
  
  const SearchToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  });
  
  
  const SearchBarHistory = () => {
  
 
  
    return (
      <Stack alignItems={"center"}>
        <SearchToolBar>
          <Stack flexDirection={"row"} justifyContent={"end"} gap={2} width={"100%"}>
            <FormControl
              variant="standard"
              size="small"
              sx={{ m: 1, minWidth: 140 }}
            >
              <InputLabel>Date Create...</InputLabel>
              <Input   required />
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
  