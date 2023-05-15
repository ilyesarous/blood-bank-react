import styled from "@emotion/styled";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  { id: "code", label: "Code", align: "center", height: "20px" },
 
  {
    id: "codePatient",
    label: "Patient code",
    align: "center",
  },
  {
    id: "userCreate",
    label: "User",
    align: "center",
  },
  {
    id: "dateCreate",
    label: "Creation Date",
    align: "center",
  },
  {
    id: "observation",
    label: "Observation",
    align: "center",
  },
  {
    id: "state",
    label: "State",
    align: "center",
  },
];

const TableHistory = () => {
  const [donnations, setDeoonations] = useState([]);
  const codepatient = useSelector((state) => state.getDonateur.Code);
  console.log("el code ", codepatient);
  const getDonnationsHandler = useCallback(async () => {
    try {
      const blood = await fetch(
        `http://localhost:9005/blood-bank/historique/${codepatient}`
      );
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
  let i = 0;
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
                  hover
                  tabIndex={-1}
                  key={i++}
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
