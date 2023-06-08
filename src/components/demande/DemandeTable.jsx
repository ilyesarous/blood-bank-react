import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { Check, DeleteForever, Settings } from "@mui/icons-material";
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
  { id: "nameService", label: "Service", minWidth: 160 },
  { id: "nameMedecin", label: "Doctor", minWidth: 160 },
  { id: "state", label: "State", minWidth: 160 },
  { id: "createDate", label: "Creation Date", minWidth: 160 },
];

const DemandeTable = () => {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [quantityInStock, setQteInStock] = useState(0);
  const [line, setLine] = useState("");

  const [table, setTable] = useState([]);
  const [mes, setMes] = useState("");
  const count = useSelector((state) => state.addDemande.count);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

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

  const getBlood = (tab) => {
    setLine(tab);
    axios
      .get(`http://localhost:9005/blood-bank/stock/${tab.blood}`)
      .then((res) => {
        setQteInStock(res.data);
        setAlert(true);
      });
  };

  const AcceptedHandler = () => {
    axios
      .put(`http://localhost:9005/blood-bank/demandeeee/${line.code}`, {
        code: line.code,
        codeMedecin: line.doctorCode,
        blood: line.bloodGrp,
        quantiter: line.quantiter,
        codeService: line.serviceCode,
        state: line.state,
        status: line.status,
        usercreate: line.usercreate,
        createDate: line.createDate,
        nameMedecin: line.nameMedecin,
        nameService: line.nameService,
        id: line.id,
      })
      .then((res) => {
        if (res.data.code === null) {
          setMes("Request has been aproved!");
        } else {
          setMes("quantity has been decreased!");
        }
        dispatch(addActions.addCount());
      })
      .finally(() => {
        setAlert(false);
        setOpen(true);
      });
  };

  const RejectedHandler = (tab) => {
    axios
      .put(`http://localhost:9005/blood-bank/demandeeee/rej/${tab.code}`, {
        code: tab.code,
        codeMedecin: tab.doctorCode,
        blood: tab.bloodGrp,
        quantiter: tab.quantiter,
        codeService: tab.serviceCode,
        state: tab.state,
        status: tab.status,
        usercreate: tab.usercreate,
        createDate: tab.createDate,
        nameService: tab.nameService,
        nameMedecin: tab.nameMedecin,
        id: tab.id,
      })
      .then((res) => {
        setMes("Request has been rejected!");
        dispatch(addActions.addCount());
      })
      .finally(() => {
        setOpen(true);
      });
  };
  let i = 0;

  const handleClose = () => {
    setOpen(false);
  };

  const closeAlertHandler = () => {
    setAlert(false);
  };
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
                    <TableCell align="center" key={column.id}>
                      {tab[column.id]}
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <Stack flexDirection={"row"}>
                      {role.role !== "doctor" && (
                        <IconButton
                          onClick={() => getBlood(tab)}
                          sx={{
                            ":hover": {
                              backgroundColor: "#1D95BB",
                              color: "white",
                            },
                          }}
                        >
                          <Check />
                        </IconButton>
                      )}
                      <IconButton
                        onClick={() => RejectedHandler(tab)}
                        sx={{
                          ":hover": {
                            backgroundColor: "#DF2E38",
                            color: "white",
                          },
                        }}
                      >
                        <DeleteForever />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog
          open={alert}
          onClose={closeAlertHandler}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Alert!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              There is {quantityInStock}, would you like to take it?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           {quantityInStock!== 0 && <Button onClick={AcceptedHandler} autoFocus>
              Yes
            </Button>}
            <Button onClick={closeAlertHandler} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Alert!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {mes}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Stack>
  );
};

export default DemandeTable;
