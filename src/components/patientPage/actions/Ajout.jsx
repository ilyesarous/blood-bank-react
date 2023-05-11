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

  const aj = useDispatch();
  const [lastNameAr, setlastnamear] = useState("");
  const [firstNameAr, setFirstnamear] = useState("");
  const [fatherNameAr, setFathernamear] = useState("");
  const [grandFatherNameAr, setGrandFathernamear] = useState("");
  const [lastNameEng, setLastnameEng] = useState("");
  const [firstNameEng, setFirstnameEng] = useState("");
  const [fatherNameEng, setFathernameEng] = useState("");
  const [grandFatherNameEng, setGrandFathernameEng] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [gendre, setGender] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [blood, setBlood] = useState("");
  const [birdhday, setBirthday] = useState(null);

  const [types, setTypes] = useState([]);

  const addPatient = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9005/blood-bank/patient", {
        adress: adress,
        birthDate: birdhday,
        email: email,
        fatherNameAr: fatherNameAr,
        fatherNameEng: fatherNameEng,
        firstNameAr: firstNameAr,
        firstNameEng: firstNameEng,
        gender: gendre,
        grandFatherNameAr: grandFatherNameAr,
        grandFatherNameEng: grandFatherNameEng,
        lastNameAr: lastNameAr,
        lastNameEng: lastNameEng,
        phoneNumber: phoneNumber,
        bloodCode: blood,
      })
      .then((res) => {
        console.log("patient added!");
        aj(ModifActions.modifCounteur());
      }).catch(e => {
        console.log("error!");
      });

    aj(AjoutActions.Showme());

    setlastnamear("");
    setFirstnamear("");
    setFathernamear("");
    setGrandFathernamear("");
    setLastnameEng("");
    setFirstnameEng("");
    setFathernameEng("");
    setGrandFathernameEng("");
    setEmail("");
    setAdress("");
    setGender("");
    setNumber("");
    setBlood("");
    setBirthday(null);
  };

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
  const handleBlood = (e) => {
    setBlood(e.target.value);
  };

  const showAddHandler = () => {
    aj(AjoutActions.Showme());
    setlastnamear("");
    setFirstnamear("");
    setFathernamear("");
    setGrandFathernamear("");
    setLastnameEng("");
    setFirstnameEng("");
    setFathernameEng("");
    setGrandFathernameEng("");
    setEmail("");
    setAdress("");
    setGender("");
    setNumber("");
    setBlood("");
  };

  return (
    <Box>
      <StyleModal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={ajt}
        onClose={showAddHandler}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={850} bgcolor="white" p={3} borderRadius={5}>
          <Box sx={{ display: "flex" }}>
            <CancelOutlined
              onClick={showAddHandler}
              sx={{ marginRight: "40%" }}
            />
            <Typography variant="h6" color="gray" textAlign="center">
              Add Patient
            </Typography>
          </Box>
          <List>
            <form onSubmit={addPatient}>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Last Name Ar</InputLabel>
                    <Input
                      value={lastNameAr}
                      onChange={handleLastnamear}
                      //ast Name Ar"
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>First Name</InputLabel>
                    <Input
                      
                      onChange={handleFirstnamear}
                      required
                     
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Father name</InputLabel>
                    <Input
                      
                      onChange={handleFathernamear}
                      required
                     
                    />
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Grand Father </InputLabel>
                    <Input
                      
                      onChange={handleGrandFathernamear}
                      required
                      
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Last Name eng</InputLabel>
                    <Input
                      
                      onChange={handleLastnamEng}
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>First Name eng</InputLabel>
                    <Input
                      
                      onChange={handleFirstnameEng}
                      required
                   
                    />
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>father Name eng</InputLabel>
                    <Input
                      
                      onChange={handleFathernameEng}
                      required
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Grand Father Name eng</InputLabel>
                    <Input
                      
                      onChange={handleGrandFathernameEng}
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
                      value={blood}
                      label="State"
                      onChange={handleBlood}
                    >
                      {types.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem sx={{ display: "flex" }}>
                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Adress</InputLabel>
                    <Input
                      
                      onChange={handleAdress}
                      
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Email</InputLabel>
                    <Input
                      
                      onChange={handleEmail}
                      
                    />
                  </FormControl>
                </ListItem>

                <ListItem sx={{ display: "flex" }}>
                  <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel>Phone number</InputLabel>
                    <Input
                      
                      onChange={handleNumber}
                    />
                  </FormControl>
                </ListItem>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    
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
                    value={gendre}
                    label="Age"
                    onChange={handleGender}
                  >
                    <MenuItem value={"male"}>male</MenuItem>
                    <MenuItem value={"female"}>female</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                <Button onClick={showAddHandler} variant="outlined">
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
