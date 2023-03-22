import { Stack } from "@mui/material"
import Ajout from "../donationPage/actions/ajout"
import Modif from "../donationPage/actions/Modif"
import SearchBar from "../donationPage/SearchBar"
import TableDonnation from "../donationPage/TableDonnation"

const DonnationPage = () => {

    return(
        <Stack>
            <SearchBar/>
            <Ajout/>
            <Modif/>
            <TableDonnation/>
        </Stack>
    )

}

export default DonnationPage