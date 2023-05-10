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
import { useDispatch, useSelector } from "react-redux";
import { modifActions } from "./store/modif";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  { id: "code", label: "Code", align: "center", height: "20px" },
  {
    id: "codePatient",
    label: "code patient",
    align: "center",
    height: "20px",
  },
  {
    id: "fullName",
    label: "Full name",
    align: "center",
    height: "20px",
  },
  {
    id: "age",
    label: "Age",
    align: "center",
    height: "20px",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    align: "center",
    height: "20px",
  },
  {
    id: "userCreate",
    label: "user create",
    align: "center",
    height: "20px",
  },
  {
    id: "date_creation",
    label: "Creation Date",
    align: "center",
    height: "20px",
  },
  {
    id: "typeIdentity",
    label: "Identity type",
    align: "center",
    height: "20px",
  },
  {
    id: "numIdentity",
    label: "Num identity",
    align: "center",
    height: "20px",
  },
  {
    id: "sexe",
    label: "Sexe",
    align: "center",
    height: "20px",
  },
  {
    id: "blood",
    label: "Blood",
    align: "center",
    height: "20px",
  },
  {
    id: "adress",
    label: "Adress",
    align: "center",
    height: "20px",
  },
  {
    id: "etat",
    label: "Etat",
    align: "center",
    height: "20px",
  },
];

const TableDonnation = () => {
  const typeIdentity = useSelector((state) => state.getDonation.typeIdentity);

  const numIdentity = useSelector((state) => state.getDonation.NumIdentity);
  const count = useSelector((state) => state.getDonation.counteur);

  const [donnations, setDeoonations] = useState([]);
  const get = useDispatch();

  const getDonnationsHandler = useCallback(async () => {
    try {
      const blood = await fetch(
        `http://localhost:9005/blood-bank/donation?typeIdentity=${typeIdentity}&numIdentity=${numIdentity}`
      );
      if (!blood.ok) throw new Error("something went wrong!");
      const data = await blood.json();
      setDeoonations(data);
    } catch (error) {
      console.log(console.error);
    }
  }, [count]);
  useEffect(() => {
    getDonnationsHandler();
  }, [getDonnationsHandler]);

  const getlesvaleur = (donation) => {
    get(modifActions.getDonateur(donation));
  };

  return (
    <Stack>
      <TableContainer
        sx={{maxHeight: 450}}
      >
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
                  onClick={() => getlesvaleur(row)}
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

export default TableDonnation;
