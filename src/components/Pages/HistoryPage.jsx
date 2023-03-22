
import { Box, Stack } from "@mui/material";
import SearchBarHistory from "../HistoryPage/SearchBarHistory";
import TableHistory from "../HistoryPage/TableHistory";

function HistoryPage() {
  return (
    <Stack sx={{ Width: "100%" }}>
      <SearchBarHistory />
      <TableHistory/>
      
      
    </Stack>
  );
}

export default HistoryPage;
