import { Settings } from "@mui/icons-material";
import { Box, Stack, styled, Typography } from "@mui/material";
import Ajout from "../donationPage/actions/ajout";
import Modif from "../donationPage/actions/Modif";
import SearchBar from "../donationPage/SearchBar";
import TableDonnation from "../donationPage/TableDonnation";

const PageName = styled(Box)({
    display: "flex",
    marginRight: 50,
    marginBottom: 30,
    justifyContent: "end",
    alignItems: "center",
    gap: 10
  })

const DonnationPage = () => {
  return (
    <Stack>
      <SearchBar />
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Donation Page
        </Typography>
        <Settings sx={{ width: 40, height: 40, color: "lightgrey" }} />
      </PageName>
      <TableDonnation />
      <Ajout />
      <Modif />
      
    </Stack>
  );
};

export default DonnationPage;
