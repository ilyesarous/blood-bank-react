import styled from "@emotion/styled";
import { CancelOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActions } from "../store/AddSlice";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [bloodGrp, setBloodGrp] = useState("");
  const [quantity, setQuantity] = useState("");
  const showCard = useSelector((state) => state.addStock.show);

  const dispatch = useDispatch();

  const showCardHandler = () => {
    dispatch(addActions.showCardHandler());
  };

  const handleChanges = (event) => {
    setBloodGrp(event.target.value);
  };
  const handleCodeChanges = (event) => {
    setQuantity(event.target.value);
  };
  let i = 1;
  const submitHandler = (event) => {
    let code = "F",i
    event.preventDefault();
    axios
      .post("http://localhost:9005/blood-bank/stock", {
        blood: bloodGrp,
        codedonateur: code,
        quantite: quantity,
        version: 1
      })
      .then((res) => {
        // console.log("res.data", res);
        dispatch(addActions.countHandler());
        showCardHandler();
        i++
      }).catch(e => {
        console.log("error");
      });
    setBloodGrp("");
    setQuantity("");
    
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={showCard}
        onClose={showCardHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box bgcolor="white" p={3} borderRadius={5}>
          <List>
            <form onSubmit={submitHandler}>
              <ListItem sx={{ display: "flex", gap: 3 }}>
                <CancelOutlined onClick={showCardHandler} />
                <Typography variant="h6" color="gray" textAlign="center">
                  Add to Stock
                </Typography>
              </ListItem>

              <ListItem sx={{ display: "flex", gap: 5, margin: 2 }}>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>Group Blood</InputLabel>
                  <Input onChange={handleChanges} value={bloodGrp} required />
                </FormControl>
              </ListItem>
              <ListItem sx={{ display: "flex", gap: 5, margin: 2 }}>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>Quantity</InputLabel>
                  <Input onChange={handleCodeChanges} value={quantity} required />
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button onClick={showCardHandler} variant="outlined">
                  <Typography>cancel</Typography>
                </Button>
                <Button type="submit" variant="outlined">
                  <Typography>Add</Typography>
                </Button>
              </ListItem>
            </form>
          </List>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Add;
