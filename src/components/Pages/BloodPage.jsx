import { Settings } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import DataTable from "../bloodPage/DataTable";
import SearchBar from "../bloodPage/SearchBar";
import Sidebar from "../bloodPage/Sidebar";
import UpdateBar from "../bloodPage/UpdateBar";

const PageName = styled(Box)({
  display: "flex",
  marginRight: 50,
  marginBottom: 30,
  justifyContent: "end",
  alignItems: "center",
  gap: 10
})

const BloodPage = () => {
  return (
    <Box sx={{width: "100%"}}>
      <SearchBar />
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Blood Page
        </Typography>
        <Settings sx={{width: 40, height: 40, color: "lightgrey"}}/>
      </PageName>
      <DataTable />
      <UpdateBar/>
      <Sidebar/>

    </Box>
  );
};

export default BloodPage;
