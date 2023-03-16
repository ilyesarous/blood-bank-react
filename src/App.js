import { Box, Stack } from "@mui/material";
import Body from "./components/welcomePage/Body";
import Navbar from "./components/welcomePage/Navbar";
import "./App.css";
import BloodPage from "./components/bloodPage/BloodPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulaire from "./components/formulaire/Formulaire";
import Patient from "./components/patientPage/Patient";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* <Body/> */}
        {/* <BloodPage/> */}
        <Formulaire/>
        {/* <Patient/> */}
      </Stack>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/blood"  element={<BloodPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </Box>
  );
}

export default App;
