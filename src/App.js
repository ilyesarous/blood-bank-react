import { Box, Stack } from "@mui/material";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Body/>
      </Stack>
    </Box>
  );
}

export default App;
