import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bloodActions } from "./BloodStore/BloodSlice";
import { updateActions } from "./BloodStore/updateBloodSlice";
const StyleModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const UpdateBar = () => {
  let i = 0;
  const codeBlood = useSelector((state) => state.updateBlood.code);
  const bloodGrpStore = useSelector((state) => state.updateBlood.bloodGrp);
  const bloodRhesus = useSelector((state) => state.updateBlood.rhesus);

  const [givenTo, setGivenTo] = useState([]);

  const [receivedFrom, setRecievedFrom] = useState([]);

  const [allTypes, setAllTypes] = useState([]);
  const count = useSelector((state) => state.blood.count);

  const getTypes = useCallback(() => {
    axios.get("http://localhost:9005/blood-bank/blood/type").then((res) => {
      setAllTypes(res.data);
    });
  }, [count]);
  useEffect(() => {
    getTypes();
  }, [getTypes]);

  let ch = "-";
  let ch1 = "-";
  if (givenTo.length > 0) {
    for (let i = 0; i < givenTo.length; i++) {
      ch = ch + givenTo[i] + ",";
    }
    ch = ch.substring(1);
  }
  if (receivedFrom.length > 0) {
    for (let i = 0; i < receivedFrom.length; i++) {
      ch1 = ch1 + receivedFrom[i] + ",";
    }
    ch1 = ch1.substring(1);
    if (ch1 === "") ch1 = "-";
  }

  const handleGivenTo = (event) => {
    const index = givenTo.indexOf(event.target.value);
    if (index === -1) setGivenTo([...givenTo, event.target.value]);
    else setGivenTo(givenTo.filter((data) => data !== event.target.value));

    console.log("givenTo: ", givenTo);
  };
  const handleReceivedFrom = (event) => {
    const index = receivedFrom.indexOf(event.target.value);
    if (index === -1) setRecievedFrom([...receivedFrom, event.target.value]);
    else
      setRecievedFrom(
        receivedFrom.filter((data) => data !== event.target.value)
      );

    console.log("receivedFrom: ", receivedFrom);
  };

  const isOpen = useSelector((state) => state.updateBlood.showUpdate);

  const dispatch = useDispatch();
  const showHandler = () => {
    dispatch(updateActions.showCardUpdate());
  
    setGivenTo("");
    setRecievedFrom("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9005/blood-bank/blood/${codeBlood}`, {
        codeBlood: codeBlood,
        bloodGrp: bloodGrpStore,
        rhesus: bloodRhesus,
        givenTo: ch,
        receivedFrom: ch1,
      })
      .then((res) => {
        console.log("updated");
        dispatch(bloodActions.setCount());
      })
      .catch((e) => {
        console.log("error");
      });

    setGivenTo("");
    setRecievedFrom("");
    dispatch(updateActions.showCardUpdate());
  };

  const cancelHandler = () => {
    setGivenTo("");
    setRecievedFrom("");

    dispatch(updateActions.showCardUpdate());
  };

  return (
    <Box flex={2} p={2}>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpen}
        onClose={showHandler}
      >
        <Box
          backgroundColor="#DDDDDD"
          sx={{
            maxWidth: "30%",
            borderRadius: 5,
            paddingLeft: 3,
            paddingRight: 2,
          }}
        >
          <form onSubmit={updateHandler}>
            <List>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Update
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h6" color={"#6B728E"}>
                  Code Blood: {codeBlood}
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "flex", width: "100%" }}>
                <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                  <InputLabel>Blood</InputLabel>
                  <Input
                    label="Blood Group"
                    name="bloodGrp"
                    value={bloodGrpStore + bloodRhesus}
                    disabled
                  />
                 
                </FormControl>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography>Donor</Typography>
                  <FormControl>
                    <FormGroup
                      onChange={handleGivenTo}
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      {allTypes
                        .filter((item) => {
                          return item !== "--";
                        })
                        .map((g) => (
                          <FormControlLabel
                            key={i++}
                            control={<Checkbox />}
                            label={g}
                            value={g}
                            name="givenTo"
                          />
                        ))}
                    </FormGroup>
                  </FormControl>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography>Receiver</Typography>
                  <FormControl>
                    <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                      {allTypes
                        .filter((item) => {
                          return item !== "--";
                        })
                        .map((g) => (
                          <FormControlLabel
                            onChange={handleReceivedFrom}
                            key={i++}
                            control={<Checkbox />}
                            name="receivedFrom"
                            label={g}
                            value={g}
                          />
                        ))}
                    </FormGroup>
                  </FormControl>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button variant="outlined" onClick={cancelHandler}>
                  cancel
                </Button>
                <Button
                  variant="outlined"
                  type="submit"
                >
                  Update
                </Button>
              </ListItem>
            </List>
          </form>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default UpdateBar;
