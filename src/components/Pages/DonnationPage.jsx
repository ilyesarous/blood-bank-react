import { Stack } from "@mui/material"
import SearchBar from "../donationPage/SearchBar"
import TableDonnation from "../donationPage/TableDonnation"

const DonnationPage = () => {

    return(
        <Stack>
            <SearchBar/>
            <TableDonnation/>
        </Stack>
    )

}

export default DonnationPage