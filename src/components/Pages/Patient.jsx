import Ajout from "../patientPage/actions/Ajout";
import Modif from "../patientPage/actions/Modif";
import SearchBar from "../patientPage/actions/SearchBar";
import Tableadd from "../patientPage/Tableadd";
import { Box } from "@mui/material";

function Patient() {
  return (
    <Box sx={{ Width: "100%" }}>
      <SearchBar />
      <Ajout />
      <Modif />
      <Box sx={{marginTop: 7}}>
        <Tableadd />
      </Box>
    </Box>
  );
}

export default Patient;
