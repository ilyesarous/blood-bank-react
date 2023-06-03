import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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

import { useNavigate } from "react-router-dom";

const Formulaire = () => {
  const questions = [
    {
      quest: "Are you taking any medecins?",
    },

    {
      quest: "Do you have any health issue that needs to be treated regularly?",
    },

    { quest: "Have you been hospitalize recently?" },

    {
      quest: "Do you have a blood clotting disease?",
    },

    {
      quest:
        "Have you had anemia, a lack of red blood cells, a treatment to compensate for a lack of iron?",
    },

    {
      quest: "have you been diagnosed with concer/melanoma/leukemia/lymphoma…?",
    },

    {
      quest: "Do have a tatto or a percing?",
    },

    {
      quest: "Have you ever had a blood transfusion or an organ transplant?",
    },

    {
      quest: "have you been pregnant in the last 6 months?",
    },
  ];

  let i = 1;

  let response = [];

  const changeHandler = (event) => {
    if (event.target.value === "no") {
      response.push(event.target.value);
    }

    // console.log(response);
  };
  const navigateor = useNavigate();

  const [alert, setAlert] = useState(false);

  const submitHandler = () => {
    if (response.length !== 9) {
      setAlert(true);
    } else {
      setAlert(false);

      navigateor("/patients/donation");
    }
  };

  const closeHandler = () => {
    setAlert(false)
  }

  return (
    <Stack sx={{ width: "100%", paddingLeft: 10, paddingRight: 10 }}>
      <List>
        <ListItem sx={{ justifyContent: "center", height: 50 }}>
          <Typography variant="h4">Please fill this Form</Typography>
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
      <Dialog
        open={alert}
        onClose={closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This person can not donnate!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Formulaire;
