import { Box, Stack } from "@mui/material";
// import Body from "./components/welcomePage/Body";
import Navbar from "./components/welcomePage/Navbar";
import './App.css'
import BloodPage from "./components/bloodPage/BloodPage";

function App() {

  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* <Body/> */}
        <BloodPage/>
      </Stack>
    </Box>
  );
}

export default App;
