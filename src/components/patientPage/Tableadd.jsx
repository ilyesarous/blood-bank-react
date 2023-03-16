import {
  Box,
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  {
    id: "code",
    label: "Code ",
    align: "center",
    
  },
  {
    id: "lastNameAr",
    label: "Last Name ",
    align: "center",
    
  },
  {
    id: "firstNameAr",
    label: "First Name",
    align: "center",
    
  },
  {
    id: "fatherNameAr",
    label: "Father  ",
    align: "center",
    
  },
  {
    id: "grandFatherNameAr",
    label: "Grand Father",
    align: "center",
    
  },
  {
    id: "fullNameAr",
    label: "Full Name",
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
    id: "fatherNameEng",
    label: "Father ",
    align: "center",
    
  },
  {
    id: "grandFatherNameEng",
    label: "Grand Father",
    align: "center",
    
  },
  {
    id: "fullNameEng",
    label: "Full Name",
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
    id: "birthDate",
    label: "BirthDate",
    align: "center",
    
  },
  {
    id: "gender",
    label: "Gender",
    align: "center",
    
  },
];

const Tableadd = () => {
  // const Lastname = useSelector(state=>state.geet.lastNameAr)
  const lastName = useSelector((state) => state.geet.lastNamear);
  console.log("el name", lastName);
  const CodePatient = useSelector((state) => state.geet.Code);
  console.log("le code ", CodePatient);
  const PhoneNumber = useSelector((state) => state.geet.Numero);
  console.log("le numero", PhoneNumber);

  const get = useDispatch();

  const [patients, setPatient] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getlesvaleur = (Patient) => {
    const p = [
      Patient.code,
      Patient.lastNameAr,
      Patient.firstNameAr,
      Patient.fatherNameAr,
      Patient.grandFatherNameAr,
      Patient.lastNameEng,
      Patient.fullNameAr,
      Patient.firstNameEng,
      Patient.fatherNameEng,
      Patient.grandFatherNameEng,
      Patient.fullNameEng,
      Patient.bloodCode,
      Patient.gender,
    ];

    get(ModifActions.modifPat(p));
    get(ModifActions.modifBirth(Patient.birthDate));
    get(ModifActions.modif(Patient.code));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const count = useSelector((state) => state.modif.counteur);

  const getPatientDataHandler = useCallback(async () => {
    try {
      const blood = await fetch(
        `http://localhost:9005/blood-bank/patient?lastNameAr=${lastName}&phoneNumber=${PhoneNumber}&codepatient=${CodePatient}`
      );
      if (!blood.ok) throw new Error("something went wrong!");
      const data = await blood.json();
      setPatient(data);
    } catch (error) {
      console.log(console.error);
    }
  }, [count]);
  useEffect(() => {
    getPatientDataHandler();
  }, [getPatientDataHandler]);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ width: "100%", overflow: "hidden"}}>
        <TableContainer  sx={{ maxHeight: 440}}>
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
              {patients.map((row) => {
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
                            minWidth: "150px"
                          }}
                          key={column.id}
                          align={column.align}
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