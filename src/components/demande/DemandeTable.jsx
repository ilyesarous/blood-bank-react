import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Check, Close, Settings } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addActions } from "./store/AddSlice";

const PageName = styled(Box)({
  display: "flex",
  marginRight: 50,
  marginTop: 50,
  marginBottom: 30,
  justifyContent: "end",
  alignItems: "center",
  gap: 10,
});

const entete = [
  { id: "code", label: "Code", minWidth: 160 },
  { id: "blood", label: "Blood", minWidth: 160 },
  { id: "quantiter", label: "Quantity", minWidth: 160 },
  { id: "codeService", label: "Code Service", minWidth: 160 },
  { id: "nameMedecin", label: "Doctor", minWidth: 160 },
  { id: "state", label: "State", minWidth: 160 },
  { id: "createDate", label: "Creation Date", minWidth: 160 },
  // { id: "response", label: "Response", minWidth: 160 },
];

const DemandeTable = () => {
  const [table, setTable] = useState([]);
  const count = useSelector((state) => state.addDemande.count);
  const dispatch = useDispatch();
  const getDemandeDataHandler = useCallback(async () => {
    try {
      const demande = await fetch(
        "http://localhost:9005/blood-bank/demandeeee"
      );
      if (!demande.ok) throw new Error("something went wrong!");
      const data = await demande.json();
      setTable(data);
    } catch (error) {
      console.log(console.error);
    }
  }, [count]);

  useEffect(() => {
    getDemandeDataHandler();
  }, [getDemandeDataHandler]);

  const AcceptedHandler = (tab) => {
    console.log(tab);
    dispatch(addActions.addCount());
    axios.put(`http://localhost:9005/blood-bank/demandeeee/${tab.code}`, {
      code: tab.code,
      codeMedecin: tab.doctorCode,
      blood: tab.bloodGrp,
      quantiter: tab.quantiter,
      codeService: tab.serviceCode,
      state: tab.state,
      status: "SOLVED",
      usercreate: tab.usercreate,
      createDate: tab.createDate,
      nameMedecin: tab.nameMedecin,
      id: tab.id,
    });
    window.location.reload();
  };

  const RejectedHandler = (tab) => {
    dispatch(addActions.addCount())
    axios.put(
      `http://localhost:9005/blood-bank/demandeeee/${tab.code}`,
    {
    code: tab.code,
    codeMedecin: tab.doctorCode,
    blood: tab.bloodGrp,
    quantiter: tab.quantiter,
    codeService: tab.serviceCode,
    state: tab.state,
    status: "REJECTED",
    usercreate: tab.usercreate,
    createDate: tab.createDate,
    nameMedecin: tab.nameMedecin,
    id: tab.id,
      }
    );
    window.location.reload();
  };
  let i = 0;
  return (
    <Stack>
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Requests Page
        </Typography>
        <Settings sx={{ width: 40, height: 40, color: "lightgrey" }} />
      </PageName>
      <Stack flexDirection={"row"}>
        <TableContainer
          sx={{
            boxShadow: "0 1px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            margin: "2rem auto",
            width: "77rem",
            maxWidth: "95%",
            minHeight: 450,
            backgroundColor: "transparent",
          }}
        >
          <Table stickyHeader size="small" aria-label="sticky table">
            <TableHead>
              <TableRow>
                {entete.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    <Typography variant="h6">{column.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.map((tab) => (
                <TableRow key={i++}>
                  {entete.map((column) => (
                    <TableCell  align="center" key={column.id}>{tab[column.id]}</TableCell>
                  ))}
                  <TableCell  align="center">
                    <Stack flexDirection={"row"}>
                      <IconButton
                        onClick={() => AcceptedHandler(tab)}
                        sx={{
                          ":hover": {
                            backgroundColor: "#1D95BB",
                            color: "white",
                          },
                        }}
                      >
                        <Check />
                      </IconButton>
                      <IconButton
                        onClick={() => RejectedHandler(tab)}
                        sx={{
                          ":hover": {
                            backgroundColor: "#DF2E38",
                            color: "white",
                          },
                        }}
                      >
                        <Close />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default DemandeTable;
