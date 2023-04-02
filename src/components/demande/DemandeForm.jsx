import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Modal,
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
import { useDispatch } from "react-redux";
import { addActions } from "./store/AddSlice";

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
  const status = "";
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

  const dispatch = useDispatch()

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
      })
      .then((res) => {
        dispatch(addActions.addCount())
      });
    //   .catch((e) => {});

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
                <Input value={bloodGrp} onChange={grpBloodChangeHandler} required />
              </ListItem>
              <ListItem>
                <ListItemText>Quantity:</ListItemText>
                <Input value={quantity} onChange={quantityChangeHandler} required />
              </ListItem>
              <ListItem>
                <ListItemText>Service Code:</ListItemText>
                <Input value={serviceCode} onChange={serviceCodeChangeHandler} required />
              </ListItem>
              <ListItem>
                <ListItemText>Doctor's code:</ListItemText>
                <Input value={doctorCode} onChange={doctorCodeChangeHandler} required />
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
                    <MenuItem value={""}>NONE</MenuItem>
                    <MenuItem value={"urgent"}>Urgent</MenuItem>
                    <MenuItem value={"minor"}>Minor</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "right" }}>
                <Button type="submit" variant="outlined">
                  Send
                </Button>
              </ListItem>
            </List>
          </Box>
        </form>
      </StyleModal>
    </Stack>
  );
};

export default DemandeForm;
