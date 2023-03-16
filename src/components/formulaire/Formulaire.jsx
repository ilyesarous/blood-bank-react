import {
  Box,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

const Formulaire = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"100%"}>
      <List>
        <ListItem sx={{display:"flex", justifyContent:"end", gap:5}}>
          <Typography> Yes </Typography>
          <Typography> No </Typography>
        </ListItem>
        <ListItem sx={{display:"flex", justifyContent:"end", gap:5}}>
          <Typography>
            Pris (ou prenez-vous actuellement) des médicaments (même à titre
            préventif) ?
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
            />
          </RadioGroup>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Formulaire;
