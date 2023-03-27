import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Modal,
  Select,
  styled,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { AjoutActions } from "../store/Ajoutredux";
import { ModifActions } from "../store/Modifredux";
import axios from "axios";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Ajout = () => {
  const ajt = useSelector((state) => state.ajout.show);
  console.log(ajt);

  const aj = useDispatch();
  const [lastNameAr, setlastnamear] = useState("");
  const [firstnamear, setFirstnamear] = useState("");
  const [fathernamear, setFathernamear] = useState("");
  const [GrandFathernamear, setGrandFathernamear] = useState("");
  const [lastnameEng, setLastnameEng] = useState("");
  const [FirstnameEng, setFirstnameEng] = useState("");
  const [FathernameEng, setFathernameEng] = useState("");
  const [GrandFathernameEng, setGrandFathernameEng] = useState("");
  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");
  const [Gendre, setGender] = useState("");
  const [NumberPhone, setNumber] = useState("");
  const [Blood, setBlood] = useState("");
  const [Birdhday, setBirthday] = useState(null);

    const [types, setTypes] = useState([]);

  // const [Datacreation, setdatacreation] = useState("")

  const tabPatient = [
    Adress,
    Birdhday,
    Email,
    fathernamear,
    FathernameEng,
    firstnamear,
    FirstnameEng,
    Gendre,
    GrandFathernamear,
    GrandFathernameEng,
    lastNameAr,
    lastnameEng,
    NumberPhone,
    Blood,
  ];

  console.log(tabPatient);

  const togglerHandler = (e) => {
    e.preventDefault();

    aj(AjoutActions.addP(tabPatient));
    aj(ModifActions.modifCounteur());
    aj(AjoutActions.Showme());

        setlastnamear("")
        setFirstnamear("")
        setFathernamear("")
        setGrandFathernamear("")
        setLastnameEng("")
        setFirstnameEng("")
        setFathernameEng("")
        setGrandFathernameEng("")
        setEmail("")
        setAdress("")
        setGender("")
        setNumber("")
        setBlood("")
        setBirthday(null)

    }

    const getTypes = useCallback(() => {
        axios.get("http://localhost:9005/blood-bank/blood/type").then((res) => {
            setTypes(res.data);
        });
    }, []);
    useEffect(() => {
        getTypes();
    }, [getTypes]);



  const handleBirdhday = (e) => {
    setBirthday(e.target.value);
  };

  const handleLastnamear = (e) => {
    setlastnamear(e.target.value);
  };
  const handleFirstnamear = (e) => {
    setFirstnamear(e.target.value);
  };
  const handleFathernamear = (e) => {
    setFathernamear(e.target.value);
  };
  const handleGrandFathernamear = (e) => {
    setGrandFathernamear(e.target.value);
  };
  const handleLastnamEng = (e) => {
    setLastnameEng(e.target.value);
  };
  const handleFirstnameEng = (e) => {
    setFirstnameEng(e.target.value);
  };
  const handleFathernameEng = (e) => {
    setFathernameEng(e.target.value);
  };
  const handleGrandFathernameEng = (e) => {
    setGrandFathernameEng(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleblood = (e) => {
    setBlood(e.target.value);
  };

  const toggleCounterHandler = () => {
    aj(AjoutActions.Showme());
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={ajt}
        onClose={toggleCounterHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={850} bgcolor="white" p={3} borderRadius={5}>
          <Box sx={{ display: "flex" }}>
            <CancelOutlined
              onClick={toggleCounterHandler}
              sx={{ marginRight: "40%" }}
            />
            <Typography variant="h6" color="gray" textAlign="center">
              Add Patient
            </Typography>
          </Box>
          <List>
            <form onSubmit={togglerHandler}>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Last Name...</InputLabel>
                    <Input
                      value={lastNameAr}
                      onChange={handleLastnamear}
                      placeholder="Last Name Ar..."
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>First Name...</InputLabel>
                    <Input
                      value={firstnamear}
                      onChange={handleFirstnamear}
                      placeholder="First Name Ar..."
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Father name...</InputLabel>
                    <Input
                      value={fathernamear}
                      onChange={handleFathernamear}
                      placeholder="father Name Ar..."
                      required
                    />
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Grand Father... </InputLabel>
                    <Input
                      value={GrandFathernamear}
                      onChange={handleGrandFathernamear}
                      placeholder="Grand father Name Ar..."
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Last Name eng...</InputLabel>
                    <Input
                      value={lastnameEng}
                      onChange={handleLastnamEng}
                      placeholder="last Name Eng..."
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>First Name eng...</InputLabel>
                    <Input
                      value={FirstnameEng}
                      onChange={handleFirstnameEng}
                      placeholder="First Name Eng..."
                      required
                    />
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>father Name eng...</InputLabel>
                    <Input
                      value={FathernameEng}
                      onChange={handleFathernameEng}
                      placeholder="father Name Eng..."
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Grand Father Name eng...</InputLabel>
                    <Input
                      value={GrandFathernameEng}
                      onChange={handleGrandFathernameEng}
                      placeholder="Grand father Name Eng..."
                      required
                    />
                  </FormControl>
                </ListItem>

                                <ListItem sx={{ display: "flex" }}>
                                    <FormControl
                                        sx={{ m: 1, minWidth: 120, marginRight: "50%" }}
                                        size="small"
                                        variant="standard"
                                    >
                                        <InputLabel id="demo-select-small">Blood</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            // value={State}
                                            label="State"
                                            // onChange={handleState}
                                        >
                                            {types.map(type => (<MenuItem value={type}>{type}</MenuItem>))}
                                        </Select>
                                    </FormControl>
                                </ListItem>

                            </ListItem>
                            <ListItem sx={{ display: "flex" }}>

                                <ListItem sx={{ display: "flex" }}>
                                    <FormControl variant="standard" sx={{ minWidth: 100 }}>
                                        <InputLabel >Adress...</InputLabel>
                                        <Input value={Adress} onChange={handleAdress} placeholder="Adress..." />

                                    </FormControl>
                                </ListItem>


                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Email...</InputLabel>
                    <Input
                      value={Email}
                      onChange={handleEmail}
                      placeholder="Email....."
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Phone number...</InputLabel>
                    <Input
                      value={NumberPhone}
                      onChange={handleNumber}
                      placeholder="Phone number..."
                    />
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    value={Birdhday}
                    onChange={handleBirdhday}
                    id="date"
                    label="Birthday"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
                <FormControl
                  sx={{ m: 1, minWidth: 120, marginRight: "50%" }}
                  size="small"
                >
                  <InputLabel id="demo-select-small">Gendre</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Gendre}
                    label="Age"
                    onChange={handleGender}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Men</MenuItem>
                    <MenuItem value={20}>women</MenuItem>
                    <MenuItem value={30}>lehou lehou</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button onClick={toggleCounterHandler} variant="outlined">
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

export default Ajout;
