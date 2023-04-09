import styled from "@emotion/styled";
import {
  Alert,
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
  Slide,
  Snackbar,
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

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const DemandeForm = () => {
  const [bloodGrp, setBloodGrp] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [doctorCode, setDoctorCode] = useState("");
  const [state, setState] = useState("");
  const [types, setTypes] = useState([]);
  const status = "";
  const dispatch = useDispatch();
  const [mes, setMes] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        nameMedecin:""
      })
      .then((res) => {
        dispatch(addActions.addCount());
        setMes("Sent Successfully!");
        // setError("success")
      })
      .catch((e) => {
        setMes("Error! Check your infos");
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
                      <MenuItem key={type} value={type}>{type}</MenuItem>
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
                    <MenuItem value={""}>NONE</MenuItem>
                    <MenuItem value={"urgent"}>Urgent</MenuItem>
                    <MenuItem value={"minor"}>Minor</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "right" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  onClick={handleClick(TransitionUp)}
                >
                  Send
                </Button>
              </ListItem>
            </List>
          </Box>
        </form>
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message={mes}
          key={transition ? transition.name : ""}
          autoHideDuration={2000}
        >
          <Alert
            onClose={handleClose}
            // severity={error}
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </StyleModal>
    </Stack>
  );
};

export default DemandeForm;
