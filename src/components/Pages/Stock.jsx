import { Box } from "@mui/material"
import DonationTable from "../stockPage/StockTable"
import SearchBar from "../stockPage/SearchBar"
import Add from "../stockPage/actions/Add"

const Stock = () => {
    return(
        <Box>
            <SearchBar/>
            <DonationTable/>
            <Add/>
        </Box>
    )
}

export default Stock