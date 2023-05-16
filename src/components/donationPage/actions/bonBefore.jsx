import styled from "@emotion/styled";
import {
  Box,
  Button,
  InputLabel,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AjoutActions } from "../store/ajout";
import { useCallback, useEffect, useState } from "react";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BonBefore = () => {
  const show = useSelector((state) => state.ajoutDonation.showBonBefore);

  const count = useSelector((state) => state.getDonation.counteur);
  const dispatch = useDispatch();
  const [bon, setBon] = useState("");

  const getBonHandler = useCallback(async () => {
    try {
      const blood = await fetch(
        `http://localhost:9005/blood-bank/receiptBefore`
      );
      if (!blood.ok) throw new Error("something went wrong!");
      const data = await blood.json();
      setBon(data);
    } catch (error) {
      console.log(console.error);
    }
  }, [count]);
  useEffect(() => {
    getBonHandler();
  }, [getBonHandler]);

  const showCardHandler = () => {
    dispatch(AjoutActions.showBonBefore());
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={show}
        onClose={showCardHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width="320px" bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Receipt
          </Typography>

          <List>
            <ListItem sx={{ display: "flex" }}>
              <InputLabel sx={{ flex: 2 }}>Code recu:</InputLabel>
              <Typography sx={{ flex: 2 }}>{bon.code}</Typography>
            </ListItem>

            <ListItem sx={{ display: "flex" }}>
              <InputLabel sx={{ flex: 2 }}>code patient:</InputLabel>
              <Typography sx={{ flex: 2 }}>{bon.codepatient}</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex" }}>
              <InputLabel sx={{ flex: 2 }}>date create:</InputLabel>
              <Typography sx={{ flex: 2 }}>{bon.dateCreate}</Typography>
            </ListItem>

            <ListItem sx={{ justifyContent: "right" }}>
              <Button onClick={showCardHandler} variant="outlined">
                <Typography>Print</Typography>
              </Button>
            </ListItem>
          </List>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default BonBefore;
