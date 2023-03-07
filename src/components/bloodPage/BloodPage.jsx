import { Box } from "@mui/material";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import UpdateBar from "./UpdateBar";

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
