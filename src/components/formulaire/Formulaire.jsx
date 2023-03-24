import {
  Alert,
  Button,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Formulaire = () => {
  const questions = [
    {
      quest: "Are you taking any medecins ?",
    },
    {
      quest:
        "Do you have any health issue that needs to be treated regularly ?",
    },
    { quest: "Have you been hospitalize recently ?" },
    {
      quest: "Do you have a blood clotting disease ?",
    },
    {
      quest:
        "Have you had anemia, a lack of red blood cells, a treatment to compensate for a lack of iron ?",
    },
    {
      quest:
        "have you been diagnosed with concer/melanoma/leukemia/lymphoma… ?",
    },
    {
      quest: "Do have a tatto or a percing ?",
    },
    {
      quest: "Have you ever had a blood transfusion or an organ transplant ?",
    },
    {
      quest: "have you been pregnant in the last 6 months ?",
    },
  ];
  let i = 1;
  let z = 9;
  let v=0;

  const [result, setResultat] = useState("");

  const [response, setResponse] = useState([]);
  const changeHandler = (event) => {
    setResultat(event.target.value);
    console.log("el valeur", result);
    console.log(event.target.value);
    const tab = [...response, event.target.value];
    setResponse(tab);
  };
  let y = response.length
  response.forEach(respons => {

    if(respons === "no"){
      v++;
    }
  });
  console.log("el v", v);

  console.log("el y", y);
  const [alert, setAlert] = useState(false);
  const [link, setLink] = useState("")
  const submitHandler = () => {
    const check = (value) => {
      return value === "no";

    };
    const a = response.find(check);
    console.log("el a", a);
    z+=v
    console.log("el z", z);
    if ( z<y ) {
      setAlert(false);
      setLink("")
      
    } else {
      setAlert(true);
      setLink("/patients/donnation")
      
      console.log(link);
    }
    console.log(response);
    // window.location.reload()

  };


  return (
    <Stack sx={{ width: "100%", paddingLeft: 10, paddingRight: 10 }}>
      <List>
        <ListItem sx={{ justifyContent: "center", height: 50 }}>
          <ListItem sx={{ justifyContent: "right", flex: 1 }}>
            <Typography variant="h4">Questionair</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "right", flex: 0.75 }}>
            {alert && (
              <Alert severity="error">This person can not donnate!</Alert>
            )}
          </ListItem>
        </ListItem>
        {questions.map((quest) => (
          <ListItem key={i++}>
            <ListItemText>{i + ") " + quest.quest}</ListItemText>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={changeHandler}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </ListItem>
        ))}
        <Divider sx={{ marginTop: 3 }} />
        <ListItem sx={{ justifyContent: "right" }}>
          <Link to={link}>
            <Button variant="outlined" onClick={submitHandler}>
              submit
            </Button>
          </Link>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Formulaire;
