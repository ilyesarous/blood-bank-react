import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const columns = [
  { id: "codeBlood", label: "Blood code", align: "center" },
  { id: "bloodGrp", label: "Blood group", align: "center" },
  {
    id: "bloodType",
    label: "Blood type",
    align: "center",
  },
  {
    id: "givenTo",
    label: "Given to",
    align: "center",
  },
  {
    id: "receivedFrom",
    label: "Received from",
    align: "center",
  },
];

const DataTable = () => {
  const [bloods, setBloods] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:9005/blood-bank/blood")
    .then(res => res.json())
    .then(blood =>setBloods(blood))
}, [bloods])

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bloods.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.codeBlood}>
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    
    </Box>
  );
};

export default DataTable;
