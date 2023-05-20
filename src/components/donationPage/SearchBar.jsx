import {
  AddCircleOutline,
  SearchOutlined,
  UpdateOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../../theme/styles";
import { AjoutActions } from "./store/ajout";
import { GetActions } from "./store/get";
import { modifActions } from "./store/modif";

const SearchToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const SearchBar = () => {
  const [TypeIdentity, setTypeIdentity] = useState("");
  const [NumIdentity, setNumIdentity] = useState("");
  const selected = useSelector((state) => state.modifDonation.selected);
  const disable = useSelector((state) => state.ajoutDonation.selected);

  const ajout = useDispatch();

  const handletypeIdentity = (e) => {
    setTypeIdentity(e.target.value);
  };

  const handlenumIdentity = (e) => {
    setNumIdentity(e.target.value);
  };

  const toggleAjoutDonationHandler = () => {
    ajout(AjoutActions.Showme());
  };
  const closeHandler=() => {
    ajout(AjoutActions.closeAlertHandler())
  }
  const toggleModifDonationHandler = () => {
    ajout(modifActions.Showme());
  };
  const searchHandler = () => {
    ajout(GetActions.getType(TypeIdentity));
    ajout(GetActions.getNum(NumIdentity));
    ajout(GetActions.modifcounteur());
    setTypeIdentity("");
    setNumIdentity("");
  };

  return (
    <Stack alignItems={"center"}>
      <SearchToolBar>
        <Stack flexDirection={"row"} gap={3} margin={2} height={48}>
          <Button
            onClick={toggleAjoutDonationHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px " }}
          >
            <Typography>Add</Typography>
            <AddCircleOutline />
          </Button>
          <Dialog
            open={disable}
            onClose={closeHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Can't open the add window?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You should select a patient to add a new donation
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeHandler} autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            onClick={toggleModifDonationHandler}
            variant="outlined"
            sx={{ display: "flex", gap: "10px", border: " solod 1.5px" }}
          >
            <Typography>Update</Typography>
            <UpdateOutlined />
          </Button>
          {selected && (
            <Alert severity="warning">you need to select a donation</Alert>
          )}
        </Stack>

        <Stack flexDirection={"row"} gap={2}>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel id="demo-select-small">Numero Identity</InputLabel>
            <Input value={NumIdentity} onChange={handlenumIdentity} required />
          </FormControl>
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: 1, minWidth: 140 }}
          >
            <InputLabel>Type Identity</InputLabel>
            <Input
              value={TypeIdentity}
              onChange={handletypeIdentity}
              required
            />
          </FormControl>
          <Icons>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ mr: 2, border: ".5px solid #1D95BB" }}
              onClick={searchHandler}
            >
              <SearchOutlined color="primary" />
            </IconButton>
          </Icons>
        </Stack>
      </SearchToolBar>
    </Stack>
  );
};

export default SearchBar;
