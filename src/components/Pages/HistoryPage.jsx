
import { Settings } from "@mui/icons-material";
import { Box, Stack, styled, Typography } from "@mui/material";
import SearchBarHistory from "../HistoryPage/SearchBarHistory";
import TableHistory from "../HistoryPage/TableHistory";

const PageName = styled(Box)({
  display: "flex",
  marginRight: 50,
  marginBottom: 30,
  justifyContent: "end",
  alignItems: "center",
  gap: 10
})

function HistoryPage() {
  return (
    <Stack sx={{ Width: "100%" }}>
      <SearchBarHistory />
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          History Page
        </Typography>
        <Settings sx={{width: 40, height: 40, color: "lightgrey"}}/>
      </PageName>
      <TableHistory/>
      
      
    </Stack>
  );
}

export default HistoryPage;
