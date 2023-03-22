import styled from "@emotion/styled";
import {
    Checkbox,
    FormControl,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#F6F6F6",
    },
}));

const columns = [
    { id: "code", label: "Code", align: "center", height: "20px" },
    // { id: "dateCreate", label: "dateCreate", align: "center", height: "20px" },
    {
        id: "codePatient",
        label: "code patient",
        align: "center",
        height: "20px",
    },
    {
        id: "observation",
        label: "Observation",
        align: "center",
        height: "20px",
    },
    {
        id: "userCreate",
        label: "User",
        align: "center",
        height: "20px",
    },
    {
        id: "dateCreate",
        label: "Creation Date",
        align: "center",
        height: "20px",
    },
    {
        id: "state",
        label: "state",
        align: "center",
        height: "20px",
    },
];

const TableHistory = () => {

    const [donnations, setDeoonations] = useState([]);
    const codepatient = useSelector(state => state.getDonateur.Code)
    console.log("el code ",codepatient);
    const get = useDispatch();
    const getDonnationsHandler = useCallback(async () => {
        try {
            const blood = await fetch(`http://localhost:9005/blood-bank/historique/${'pat10'}`);
            if (!blood.ok) throw new Error("something went wrong!");
            const data = await blood.json();
            setDeoonations(data);
        } catch (error) {
            console.log(console.error);
        }
    }, []);
    useEffect(() => {
        getDonnationsHandler();
    }, [getDonnationsHandler]);

    return (
        <Stack>
            <TableContainer>
                <Table size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                        border: ".5px solid #EEEEEE",
                                        borderCollapse: "collapse",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donnations.map((row) => {
                            return (
                                <StyledTableRow
                                    //   onClick={() => getlesvaleur(row)}
                                    hover
                                    tabIndex={-1}
                                    key={row.code}
                                    sx={{ ":focus": { backgroundColor: "#EEEEEE" } }}
                                >
                                    {columns.map((column) => {
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                sx={{
                                                    border: ".5px solid #EEEEEE",
                                                    borderCollapse: "collapse",
                                                    height: "50px",
                                                }}
                                            >
                                                {row[column.id]}
                                            </TableCell>
                                        );
                                    })}
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default TableHistory;
