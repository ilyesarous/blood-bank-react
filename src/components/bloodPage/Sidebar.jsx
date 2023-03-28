import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bloodActions } from "./BloodStore/BloodSlice";
const StyleModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Sidebar = () => {
  let i = 0;

  const [bloodGrp, setBloodGrp] = useState("");
  const [rhesus, setRhesus] = useState("");
  const [givenTo, setGivenTo] = useState([]);
  const [receivedFrom, setRecievedFrom] = useState([]);
  const [allTypes, setAllTypes] = useState([]);

  const isOpen = useSelector((state) => state.blood.show);
  const verif = useSelector((state) => state.blood.alert);
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
    if (ch === "") ch = "-";
  }
  if (receivedFrom.length > 0) {
    for (let i = 0; i < receivedFrom.length; i++) {
      ch1 = ch1 + receivedFrom[i] + ",";
    }
    ch1 = ch1.substring(1);
    if (ch1 === "") ch1 = "-";
  }

  const bloods = [bloodGrp, rhesus, ch, ch1];

  const handleBloodGrpChange = (event) => {
    setBloodGrp(event.target.value);
  };

  const handleRhesusChange = (event) => {
    if (event.target.value === "positive") {
      setRhesus("+");
    } else {
      setRhesus("-");
    }

    console.log("rhesus: ", rhesus);
  };

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

  const dispatch = useDispatch();
  const showHandler = () => {
    dispatch(bloodActions.showCard());
    setBloodGrp("");
    setRhesus("");
    setGivenTo("");
    setRecievedFrom("");
  };

  const [res, setRes] = useState([]);

  const addHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9005/blood-bank/blood", {
        bloodGrp: bloods[0],
        rhesus: bloods[1],
        givenTo: bloods[2],
        receivedFrom: bloods[3],
      })
      .then((res) => {
        console.log("res.data", res);
        setRes(res.data);
        dispatch(bloodActions.setCount());
      });

    if (res !== "") {
      dispatch(bloodActions.showCard());
      dispatch(bloodActions.setAlert());
    }

    setBloodGrp("");
    setRhesus("");
    setGivenTo("");
    setRecievedFrom("");
  };

  const cancelHandler = () => {
    dispatch(bloodActions.showCard());

    setBloodGrp("");
    setRhesus("");
    setGivenTo("");
    setRecievedFrom("");
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
          <form onSubmit={addHandler}>
            <List>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Add
                </Typography>
              </ListItem>
              
              <ListItem sx={{ display: "flex", width: "100%" }}>
                <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                  <InputLabel>Blood Group</InputLabel>
                  <Input
                    value={bloodGrp}
                    onChange={handleBloodGrpChange}
                    label="Blood Group"
                    name="bloodGrp"
                    required
                    error={bloodGrp === ""}
                  />
                  {bloodGrp === "" && (
                    <FormHelperText error={bloodGrp === ""}>
                      Blood group is required
                    </FormHelperText>
                  )}
                </FormControl>
              </ListItem>
              <ListItem>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Rhesus
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onClick={handleRhesusChange}
                    sx={{ display: "flex", gap: 5 }}
                  >
                    <FormControlLabel
                      value="positive"
                      control={<Radio />}
                      label="+"
                    />
                    <FormControlLabel
                      value="negative"
                      control={<Radio />}
                      label="-"
                    />
                  </RadioGroup>
                  {rhesus === "" && (
                    <FormHelperText error={rhesus === ""}>
                      Blood type is required
                    </FormHelperText>
                  )}
                  {!alert && (
                    <FormHelperText error={alert}>
                      Already exists
                    </FormHelperText>
                  )}
                </FormControl>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography>Given to</Typography>
                  <FormControl>
                    <FormGroup
                      onChange={handleGivenTo}
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      {allTypes.map((g) => (
                        <FormControlLabel
                          key={i++}
                          control={<Checkbox />}
                          label={g}
                          value={g}
                          name="givenTo"
                        />
                      ))}
                    </FormGroup>
                    {/* {ch === "" && (
                      <FormHelperText error={ch === ""}>
                        you need to pick at least one
                      </FormHelperText>
                    )} */}
                  </FormControl>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography>Received From</Typography>
                  <FormControl>
                    <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                      {allTypes.map((g) => (
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
                    {/* {ch1 === "" && (
                      <FormHelperText error={ch1 === ""}>
                        you need to pick at least one
                      </FormHelperText>
                    )} */}
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
                  disabled={bloodGrp === "" || rhesus === ""}
                >
                  Add
                </Button>
              </ListItem>
            </List>
          </form>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Sidebar;
