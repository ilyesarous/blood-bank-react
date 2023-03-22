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
          <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
            <Button
             
              variant="outlined"
              sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
            >
              <Typography>Add</Typography>
              <AddCircleOutline />
            </Button>
            <Button
              
              variant="outlined"
              sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
            >
              <Typography>Update</Typography>
              <UpdateOutlined />
            </Button>
          
          </Stack>
  
          <Stack flexDirection={"row"} gap={2}>
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
  