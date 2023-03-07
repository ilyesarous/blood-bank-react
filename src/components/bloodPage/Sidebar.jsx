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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bloodActions } from "../store/BloodSlice";
const StyleModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Sidebar = () => {

  let i = 0

  const [bloodGrp, setBloodGrp] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [givenTo, setGivenTo] = useState([]);
  const [receivedFrom, setRecievedFrom] = useState([]);
  const [allTypes, setAllTypes] = useState([]);

  const isOpen = useSelector((state) => state.blood.show);
  const verif = useSelector((state) => state.blood.alert);

  useEffect(() => {
    axios.get("http://localhost:9005/blood-bank/blood/type").then((res) => {
      setAllTypes(res.data);
    });
  }, []);

  let ch = "-";
  let ch1 = "-";
  if(givenTo.length > 0){
    for (let i = 0; i < givenTo.length; i++) {
      ch = ch + givenTo[i] + ",";
    }
    ch = ch.substring(1)
    if(ch==="")
      ch = "-"
  }
  if(receivedFrom.length > 0){
    for (let i = 0; i < receivedFrom.length; i++) {
      ch1 = ch1 + receivedFrom[i] + ",";
    }
    ch1 = ch1.substring(1)
    if(ch1==="")
      ch1 = "-"
  }

  const bloods = [bloodGrp, bloodType, ch, ch1];

  const handleBloodGrpChange = (event) => {
    setBloodGrp(event.target.value);
  };

  const handleBloodTypeChange = (event) => {
    if (event.target.value === "positive") {
      setBloodType(bloodGrp + "+");
    } else {
      setBloodType(bloodGrp + "-");
    }

    console.log("bloodType: ", bloodType);
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
    setBloodType("");
    setGivenTo("");
    setRecievedFrom("");
  };
  

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(bloodActions.addBlood(bloods));

    console.log("liste des blood: ", bloods);
    if(!verif)
      dispatch(bloodActions.showCard());
    setBloodGrp("");
    setBloodType("");
    setGivenTo("");
    setRecievedFrom("");
  };
  const cancelHandler = () => {
    dispatch(bloodActions.showCard());

    setBloodGrp("");
    setBloodType("");
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
                    Blood Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onClick={handleBloodTypeChange}
                    sx={{display: "flex", gap: 5}}
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
                  {bloodType === "" && (
                    <FormHelperText error={bloodType === ""}>
                      Blood type is required
                    </FormHelperText>
                  )}
                  {!alert&& (
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
                  disabled={bloodGrp === "" || bloodType === ""}
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
