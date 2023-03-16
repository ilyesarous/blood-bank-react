import Ajout from "./actions/Ajout";
import Modif from "./actions/Modif";
import SearchBar from "./actions/SearchBar";
import Tableadd from "./Tableadd";
import { Box } from "@mui/material";


function Patient() {

    return (
        <Box sx={{maxWidth: "100%"}}>
            <SearchBar />
            <Ajout />
            <Modif />
            <Tableadd />
        </Box>
    );

}

export default Patient