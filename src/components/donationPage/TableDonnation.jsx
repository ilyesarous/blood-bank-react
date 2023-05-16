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
import BonBefore from "./actions/bonBefore" ;
import BonAfter from "./actions/BonAfter";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
    height: "20px",
  },
  {
    id: "fullName",
    label: "Full name",
    align: "center",
    height: "20px",
  },
  {
    id: "tension",
    label: "Tension",
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
    id: "date_creation",
    label: "Creation Date",
    align: "center",
    height: "20px",
  },
  {
    id: "sexe",
    label: "Gender",
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
    label: "Status",
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
        `http://localhost:9005/blood-bank/donation?typeIdentity=&numIdentity=`
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
            {donnations.filter((item) => {
              return typeIdentity === "" ? item : item.typeIdentity.includes(typeIdentity);
            }).filter((item) => {
              return numIdentity === "" ? item : item.numIdentity.includes(numIdentity);
            }).map((row) => {
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
      <BonBefore/>
      <BonAfter/>
    </Stack>
  );
};

export default TableDonnation;
