import { Stack, IconButton, Box } from "@mui/material";
import { Check, Close } from "@mui/icons-material";

const DesignDemande = (props) => {

    const AcceptedHandler = () => {
        console.log("accepted ", props.demande.code);
    }
    const RejectedHandler = () => {
        console.log("rejected ", props.demande.code);
    }

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
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.05)"
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
        <IconButton onClick={AcceptedHandler} sx={{":hover":{backgroundColor:"#1D95BB", color:"white"}}}>
          <Check />
        </IconButton>
        <IconButton onClick={RejectedHandler} sx={{":hover":{backgroundColor:"#DF2E38", color:"white"}}}>
          <Close />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default DesignDemande;
