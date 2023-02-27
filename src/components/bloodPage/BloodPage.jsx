import { Box } from "@mui/material";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";

const BloodPage = () => {
  return (
    <Box sx={{width: "100%"}}>
      <SearchBar />
      <DataTable />
    </Box>
  );
};

export default BloodPage;
