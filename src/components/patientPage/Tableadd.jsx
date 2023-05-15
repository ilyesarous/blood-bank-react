import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { ModifActions } from "./store/Modifredux";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AjoutActions } from "../donationPage/store/ajout";
import { GetDonateurActions } from "../HistoryPage/store/getDonateur";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  {
    id: "",
    align: "center",
  },
  {
    id: "code",
    label: "Code ",
    align: "center",
  },
  {
    id: "lastNameEng",
    label: "Last Name",
    align: "center",
  },
  {
    id: "firstNameEng",
    label: "First Name",
    align: "center",
  },
  {
    id: "fullNameEng",
    label: "Full Name",
    align: "center",
  },
  {
    id: "typeIdentity",
    label: "Identity type",
    align: "center",
  },
  {
    id: "numIdentity",
    label: "Identity number",
    align: "center",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    align: "center",
  },
  {
    id: "adress",
    label: "Adress",
    align: "center",
  },
  {
    id: "email",
    label: "Email",
    align: "center",
  },
  {
    id: "bloodCode",
    label: "Blood",
    align: "center",
  },
  {
    id: "birthDay",
    label: "Birthday",
    align: "center",
  },
  {
    id: "gender",
    label: "Gender",
    align: "center",
  },
  
];

const Tableadd = () => {
  const count = useSelector((state) => state.modif.counteur);

  const lastName = useSelector((state) => state.geet.lastNamear);

  const CodePatient = useSelector((state) => state.geet.Code);

  const PhoneNumber = useSelector((state) => state.geet.Numero);

  const get = useDispatch();

  const [patients, setPatient] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getlesvaleur = (patient) => {
    get(ModifActions.modifPat(patient));
    // send data into history page
    get(GetDonateurActions.CodePat(patient.code));
    // send data into donnation page
    get(AjoutActions.getPatient(patient));
    get(AjoutActions.getcode(patient.code));
    get(ModifActions.getCodePatient(patient.code))
  };
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getPatientDataHandler = useCallback(async () => {
    try {
      const blood = await fetch(
        `http://localhost:9005/blood-bank/patient?lastNameAr=&phoneNumber=&codepatient=`
      );
      if (!blood.ok) throw new Error("something went wrong!");
      const data = await blood.json();
      setPatient(data);
    } catch (error) {
      // console.log(console.error);
    }
  }, [count]);
  useEffect(() => {
    getPatientDataHandler();
  }, [getPatientDataHandler]);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ height: "450px" }}>
          <Table size="small" stickyHeader={true} aria-label="sticky table">
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
                    <b>{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.filter((item) => {
              return lastName === "" ? item : item.fullNameEng.includes(lastName);
            }).filter((item) => {
              return PhoneNumber === "" ? item : item.phoneNumber.includes(PhoneNumber);
            }).filter((item) => {
              return CodePatient === "" ? item : item.code.includes(CodePatient);
            }).map((row) => {
                return (
                  <StyledTableRow
                    sx={{ ":focus": { backgroundColor: "#EEEEEE" } }}
                    onClick={() => getlesvaleur(row)}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {columns.map((column) => {
                      return (
                        <TableCell
                          sx={{
                            border: ".5px solid #EEEEEE",
                            borderCollapse: "collapse",
                            minWidth: "150px",
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.id === "" ? (
                            <FormControl size="small">
                              <Select sx={{ height: "20px" }}>
                                <MenuItem>
                                  <Link
                                    to="/patients/history"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  >
                                    History
                                  </Link>
                                </MenuItem>
                                <MenuItem>
                                  <Link
                                    to="/form"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  >
                                    Donation
                                  </Link>
                                </MenuItem>
                              </Select>
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={patients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default Tableadd;
