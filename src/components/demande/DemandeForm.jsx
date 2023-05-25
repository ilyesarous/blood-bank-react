import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActions } from "./store/AddSlice";
import { useCallback } from "react";
import { useEffect } from "react";

const StyleModal = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const DemandeForm = () => {
  const [bloodGrp, setBloodGrp] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [doctorCode, setDoctorCode] = useState("");
  const [state, setState] = useState("");
  const [types, setTypes] = useState([]);
  const status = "";
  const dispatch = useDispatch();
  const disable = useSelector(state => state.addDemande.selected)

  const closeHandler = () => {
    dispatch(addActions.setSelected());
  };

  const getTypes = useCallback(() => {
    axios.get("http://localhost:9005/blood-bank/blood/type").then((res) => {
      setTypes(res.data);
    });
  }, []);
  useEffect(() => {
    getTypes();
  }, [getTypes]);

  const grpBloodChangeHandler = (e) => {
    setBloodGrp(e.target.value);
  };
  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };
  const serviceCodeChangeHandler = (e) => {
    setServiceCode(e.target.value);
  };
  const doctorCodeChangeHandler = (e) => {
    setDoctorCode(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const sendRequestHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9005/blood-bank/demandeeee", {
        codeMedecin: doctorCode,
        blood: bloodGrp,
        quantiter: quantity,
        codeService: serviceCode,
        state: state,
        status: status,
        createDate: "",
        nameMedecin: "",
      })
      .then((res) => {
        dispatch(addActions.addCount());
        // setError("success")
      })
      .catch((e) => {
        dispatch(addActions.setSelected())
        // setError("error")
      });

    setBloodGrp("");
    setQuantity("");
    setServiceCode("");
    setDoctorCode("");
    setState("");
  };

  return (
    <Stack width="100%" paddingTop={4}>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5">Blood Request Form</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <StyleModal>
        <form onSubmit={sendRequestHandler}>
          <Box
            sx={{
              paddingTop: 4,
              width: "400px",
            }}
          >
            <List>
              <ListItem>
                <ListItemText>Blood group:</ListItemText>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 175 }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bloodGrp}
                    onChange={grpBloodChangeHandler}
                    label="blood"
                  >
                    <MenuItem value={""}>NONE</MenuItem>
                    {types.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                    {/* <MenuItem value={"minor"}>Minor</MenuItem> */}
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem>
                <ListItemText>Quantity:</ListItemText>
                <Input
                  value={quantity}
                  onChange={quantityChangeHandler}
                  required
                />
              </ListItem>
              <ListItem>
                <ListItemText>Service Code:</ListItemText>
                <Input
                  value={serviceCode}
                  onChange={serviceCodeChangeHandler}
                  required
                />
              </ListItem>
              <ListItem>
                <ListItemText>Doctor's code:</ListItemText>
                <Input
                  value={doctorCode}
                  onChange={doctorCodeChangeHandler}
                  required
                />
              </ListItem>
              <ListItem>
                <ListItemText>State:</ListItemText>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 175 }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="state"
                    onChange={handleStateChange}
                  >
                    <MenuItem value={"Urgent"}>Urgent</MenuItem>
                    <MenuItem value={"Minor"}>Minor</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "right" }}>
                <Button
                  type="submit"
                  variant="outlined"
                >
                  Send
                </Button>
              </ListItem>
            </List>
          </Box>
        </form>
        <Dialog
          open={disable}
          onClose={closeHandler}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">{"failed to send request!"}</DialogTitle> */}
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            failed to send request!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeHandler} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </StyleModal>
    </Stack>
  );
};

export default DemandeForm;
