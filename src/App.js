import { Box } from "@mui/material";
import Body from "./components/welcomePage/Body";
import Navbar from "./components/welcomePage/Navbar";
import "./App.css";
import BloodPage from "./components/Pages/BloodPage";
import { Route, Routes } from "react-router-dom";
import Formulaire from "./components/formulaire/Formulaire";
import Patient from "./components/Pages/Patient";
import DonnationPage from "./components/Pages/DonnationPage";
import HistoryPage from "./components/Pages/HistoryPage";
import Stock from "./components/Pages/Stock";
import DemandePage from "./components/Pages/DemandePage";
import DemandeTable from "./components/demande/DemandeTable";
import Auth from "./components/authentification/loginPage";
import { useSelector } from "react-redux";
import Signup from "./components/authentification/signupPage";
import Profile from "./components/authentification/Profile";
import UpdatePassword from "./components/authentification/UpdatePassword";

function App() {
  // const loggedin = useSelector((state) => state.auth.isLoggedIn);
  const logInLS = window.localStorage.getItem("isLoggedIn")
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={ <Auth />}></Route>
          {logInLS && (
            <>
              <Route path="/welcome" element={<Body />} />
              <Route path="/blood" element={<BloodPage />} />
              <Route path="/patients" element={<Patient />} />
              <Route path="/patients/donnation" element={<DonnationPage />} />
              <Route path="/patients/history" element={<HistoryPage />} />
              <Route path="/form" element={<Formulaire />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/demande_form" element={<DemandePage />} />
              <Route path="/demande_table" element={<DemandeTable />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/add_user" element={<Signup />} />
            </>
          )}
          <Route path="/update_password" element={<UpdatePassword />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
