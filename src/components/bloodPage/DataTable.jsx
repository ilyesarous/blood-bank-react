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
import { useDispatch, useSelector } from "react-redux";
import { updateActions } from "./BloodStore/updateBloodSlice";
import axios from "axios";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  { id: "active", label: "Status", align: "center", height: "20px" },
  { id: "codeBlood", label: "Blood code", align: "center", height: "20px" },
  { id: "bloodGrp", label: "Blood group", align: "center", height: "20px" },
  {
    id: "rhesus",
    label: "Rhesus",
    align: "center",
    height: "20px",
  },
  {
    id: "givenTo",
    label: "Donor",
    align: "center",
    height: "20px",
  },
  {
    id: "receivedFrom",
    label: "Receiver",
    align: "center",
    height: "20px",
  },
];

const DataTable = () => {
  const dispatch = useDispatch();
  const [bloods, setBloods] = useState([]);

  const bloodCount = useSelector((state) => state.blood.count);
  const group = useSelector((state) => state.blood.group);

  const receive = useSelector((state) => state.blood.receive);
  const given = useSelector((state) => state.blood.given);

  const getBloodDataHandler = useCallback(async () => {
    try {
      const blood = await fetch(
        `http://localhost:9005/blood-bank/blood?group=&given=&receive=`
      );
      if (!blood.ok) throw new Error("something went wrong!");
      const data = await blood.json();
      setBloods(data);
    } catch (error) {
      console.log(console.error);
    }
  }, [bloodCount]);

  useEffect(() => {
    getBloodDataHandler();
  }, [getBloodDataHandler]);

  const changeActiveStateHandler = (id, e) => {
    dispatch(updateActions.getCodeBlood(id));

    axios
      .put(`http://localhost:9005/blood-bank/blood/status/${id}`)
      .then(() => {
        console.log("status updated");
      })
      .catch((e) => console.log("error"));
  };

  const getBloodCode = (row) => {
    dispatch(updateActions.getBlood(row))
    dispatch(updateActions.getCodeBlood(row.codeBlood));
    dispatch(updateActions.getBloodGrp(row.bloodGrp));
    dispatch(updateActions.getRhesus(row.rhesus));
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TableContainer sx={{ maxHeight: 450 }}>
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
            {bloods.filter((item) => {
              return item.bloodGrp !== "-";
            }).filter((item) => {
              return receive === "" ? item : item.receivedFrom.includes(receive);
            }).filter(item => {
              return given === "" ? item : item.givenTo.includes(given);
            }).filter(item => {
              return group === "" ? item : item.bloodGrp.includes(group);
            }).map((row) => {
              return (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.codeBlood}
                  onClick={() => getBloodCode(row)}
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
