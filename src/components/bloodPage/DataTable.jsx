import styled from "@emotion/styled";
import {
  Box,
  Checkbox,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch  } from "react-redux";
import { updateActions } from "../store/updateBloodSlice";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  { id: "active", label: "Active", align: "center", height: "20px" },
  { id: "codeBlood", label: "Blood code", align: "center", height: "20px" },
  { id: "bloodGrp", label: "Blood group", align: "center", height: "20px" },
  {
    id: "bloodType",
    label: "Blood type",
    align: "center",
    height: "20px",
  },
  {
    id: "givenTo",
    label: "Given to",
    align: "center",
    height: "20px",
  },
  {
    id: "receivedFrom",
    label: "Received from",
    align: "center",
    height: "20px",
  },
];

const DataTable = () => {
  const dispatch = useDispatch();
  const [bloods, setBloods] = useState([]);


  const getBloodDataHandler = useCallback(async () => {  
    try{
      const blood = await fetch("http://localhost:9005/blood-bank/blood")
      if(!blood.ok)
        throw new Error("something went wrong!")  
      const data = await blood.json()
      setBloods(data)
    }catch(error){console.log(console.error)}
  })
  
  useEffect(() => {
    getBloodDataHandler()
  }, [getBloodDataHandler]);

  

  const changeActiveStateHandler = (id) => {
    console.log(id, ": ", typeof id);
    dispatch(updateActions.getCodeBlood(id))
    dispatch(updateActions.updateBloodStatus())
  };

  const getBloodCode = (id) => {
    dispatch(updateActions.getCodeBlood(id));
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            {bloods.map((row) => {
              return (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.codeBlood}
                  onClick={() => getBloodCode(row.codeBlood)}
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
                        {column.id === "active" ? (
                          <FormControl>
                            <Checkbox
                              defaultChecked
                              inputProps={{ "aria-label": "controlled" }}
                              onChange={(e) =>
                                changeActiveStateHandler(row.codeBlood, e)
                              }
                            />
                          </FormControl>
                        ) : (
                          row[column.id]
                        )}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
