import styled from "@emotion/styled";
import { CancelOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
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
  const show = useSelector((state) => state.addStock.show);

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
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9005/blood-bank/stock", {
        blood: bloodGrp,
        codedonateur: "F",
        quantite: quantity,
        version: 1
      })
      .then((res) => {
        dispatch(addActions.countHandler());
        showCardHandler();
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
      open={show}
      onClose={showCardHandler}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box width="400px" bgcolor="white" p={3} borderRadius={5}>
        <Box sx={{ display: "flex" }}>
          <CancelOutlined
            onClick={showCardHandler}
            sx={{ marginRight: "25%" }}
          />
          <Typography variant="h6" color="gray" textAlign="center">
            Add Blood from supplier 
          </Typography>
        </Box>
          <List>
            <form onSubmit={submitHandler}>

              <ListItem sx={{ display: "flex", mt: 2}}>
                  <InputLabel sx={{flex:2}}>Blood Group</InputLabel>
                  <Input onChange={handleChanges} sx={{flex:2}} value={bloodGrp} required />
              </ListItem>
              <ListItem sx={{ display: "flex"}}>
                  <InputLabel sx={{flex:2}}>Quantity</InputLabel>
                  <Input onChange={handleCodeChanges} sx={{flex:2}} value={quantity} required />
              </ListItem>
              <ListItem sx={{ justifyContent: "right", gap: 3, mt: 2 }}>
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
