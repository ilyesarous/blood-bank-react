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

  const [response, setResponse] = useState([]);
  const changeHandler = (event) => {
    console.log(event.target.value);
    const tab = [...response, event.target.value];
    setResponse(tab);
  };
  const [alert, setAlert] = useState(false);
  const submitHandler = (event) => {
    const check = (value) => {
      return value === "no";
    };
    const a = response.find(check);
    if (a) {
      setAlert(true);
    } else {
      setAlert(false);
    }
    console.log(response);
    setResponse([])
  };

  return (
    <Stack sx={{ width: "100%", paddingLeft: 10, paddingRight: 10 }}>
      <List>
        <ListItem sx={{ justifyContent: "center", height:50 }}>
          <ListItem sx={{justifyContent: "right", flex:1}}>
            <Typography variant="h4">Questionair</Typography>
          </ListItem>
          <ListItem sx={{justifyContent: "right", flex:.75}}>
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
          <Button variant="outlined" onClick={submitHandler}>
            submit
          </Button>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Formulaire;