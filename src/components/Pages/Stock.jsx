import { Box, Typography } from "@mui/material";
import DonationTable from "../stockPage/StockTable";
import SearchBar from "../stockPage/SearchBar";
import Add from "../stockPage/actions/Add";
import { Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

const PageName = styled(Box)({
    display: "flex",
    marginRight: 50,
    marginBottom: 30,
    justifyContent: "end",
    alignItems: "center",
    gap: 10
  })

const Stock = () => {
  return (
    <Box>
      <SearchBar />
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Stock Page
        </Typography>
        <Settings sx={{ width: 40, height: 40, color: "lightgrey" }} />
      </PageName>
      <DonationTable />
      <Add />
    </Box>
  );
};

export default Stock;
