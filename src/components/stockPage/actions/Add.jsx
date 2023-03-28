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
  const showCard = useSelector((state) => state.addStock.show);

  const dispatch = useDispatch();

  const showCardHandler = () => {
    dispatch(addActions.showCardHandler());
    console.log(showCard);
  };

  const handleChanges = event => {
    setBloodGrp(event.target.value)
  };

  const submitHandler = event => {
    event.preventDefault()
    axios
      .post("http://localhost:9005/blood-bank/stock", {
        blood: bloodGrp
      })
      .then((res) => {
        console.log("res.data", res);
        dispatch(addActions.countHandler());
      });
  }

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
                  <Input onChange={handleChanges} required />
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
