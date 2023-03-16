import { Box } from "@mui/material";
import DataTable from "../bloodPage/DataTable";
import SearchBar from "../bloodPage/SearchBar";
import Sidebar from "../bloodPage/Sidebar";
import UpdateBar from "../bloodPage/UpdateBar";

const BloodPage = () => {
  return (
    <Box sx={{width: "100%"}}>
      <SearchBar />
      <UpdateBar/>
      <Sidebar/>
      <DataTable />
    </Box>
  );
};

export default BloodPage;
