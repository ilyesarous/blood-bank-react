import { AddCircleOutline, SearchOutlined } from "@mui/icons-material";
import { Button, InputBase, styled, Toolbar, Typography } from "@mui/material";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
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
  return (
    <SearchToolBar>
        <Button variant="outlined" sx={{display: "flex", gap: "10px", border: " solod 1.5px"}}>
            <Typography>Add</Typography>
            <AddCircleOutline/>
        </Button>
        <Search>
          <InputBase placeholder="Search..." sx={{flex: 2}}/>
          <SearchOutlined color="secondary"/>
        </Search>
    </SearchToolBar>
);
};

export default SearchBar;
