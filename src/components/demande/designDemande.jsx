import { Stack, IconButton, Box } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addActions } from "./store/AddSlice";

const DesignDemande = (props) => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const AcceptedHandler = () => {
    // console.log("accepted ", props.demande.quantiter);
    setStatus("SOLVED");
    axios
      .put(
        `http://localhost:9005/blood-bank/demandeeee/${props.demande.code}`,
        {
          code: props.demande.code,
          codeMedecin: props.demande.doctorCode,
          blood: props.demande.bloodGrp,
          quantiter: props.demande.quantiter,
          codeService: props.demande.serviceCode,
          state: props.demande.state,
          status: status,
          usercreate: props.demande.usercreate,
          createDate: props.demande.createDate,
          id: props.demande.id,
        }
      )
      .then((res) => {
        dispatch(addActions.addCount())
      });
  };
  const RejectedHandler = () => {
    // console.log("rejected ", props.demande.code);
    setStatus("REJECTED");
    console.log("status: ", status);
    axios.put(
      `http://localhost:9005/blood-bank/demandeeee/${props.demande.code}`,
      {
        code: props.demande.code,
        codeMedecin: props.demande.doctorCode,
        blood: props.demande.bloodGrp,
        quantiter: props.demande.quantiter,
        codeService: props.demande.serviceCode,
        state: props.demande.state,
        status: status,
        usercreate: props.demande.usercreate,
        createDate: props.demande.createDate,
        id: props.demande.id,
      }
    ).then((res) => {
        dispatch(addActions.addCount())
      });;
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        padding: " 1rem",
        margin: " 1rem auto",
        width: " 50rem",
        maxWidth: "95%",
        borderRadius: " 12px",
        textAlign: " center",
        backgroundColor: "white",
        flexDirection: "row",
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.code}
      </Box>
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.blood}
      </Box>
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.quantiter}
      </Box>
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.codeService}
      </Box>
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.codeMedecin}
      </Box>
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.state}
      </Box>
      <Box
        variant="h5"
        sx={{
          font: "inherit",
          padding: "0.5rem",
          borderRadius: "6px",
          textAlign: "start",
          fontSize: "1.2rem",
          fontWeight: "bold",
          maxWidth: "100%",
        }}
      >
        {props.demande.createDate}
      </Box>
      <Stack flexDirection={"row"}>
        <IconButton
          onClick={AcceptedHandler}
          sx={{ ":hover": { backgroundColor: "#1D95BB", color: "white" } }}
        >
          <Check />
        </IconButton>
        <IconButton
          onClick={RejectedHandler}
          sx={{ ":hover": { backgroundColor: "#DF2E38", color: "white" } }}
        >
          <Close />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default DesignDemande;
