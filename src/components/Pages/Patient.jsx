import Ajout from "../patientPage/actions/Ajout";
import Modif from "../patientPage/actions/Modif";
import SearchBar from "../patientPage/actions/SearchBar";
import Tableadd from "../patientPage/Tableadd";
import { Box, styled, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";

const PageName = styled(Box)({
  display: "flex",
  marginRight: 50,
  marginBottom: 30,
  justifyContent: "end",
  alignItems: "center",
  gap: 10
})

function Patient() {
  return (
    <Box sx={{ Width: "100%" }}>
      <SearchBar />
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Patient Page
        </Typography>
        <Settings sx={{width: 40, height: 40, color: "lightgrey"}}/>
      </PageName>
      <Tableadd />
      <Ajout />
      <Modif />

      
    </Box>
  );
}

export default Patient;
