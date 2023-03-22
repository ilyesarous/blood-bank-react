import { Box, Button, FormControl, Input, InputLabel, List, ListItem, MenuItem, Modal, Select, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from "@mui/material";
import { AjoutActions } from "../store/ajout";
import { modifActions } from "../store/modif";


const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});



const Modif = (props) => {

    const md = useSelector(state => state.modifDonation.show)
    const lastname = useSelector(state => state.modifDonation.lastname);
    const typeIdentity = useSelector(state => state.modifDonation.type);
    const NumeroIdentity = useSelector(state => state.modifDonation.numerotype);
    const [State, setState] = useState("")


    const mf = useDispatch();





    const toggleAjoutDonationHandler = () => {
        mf(modifActions.Showme());

    };

  
    const handleState = (e) => {
        setState(e.target.value)
        

    };
    const togglerHandler = (e) => {
        e.preventDefault();
        mf(modifActions.updatDonateur(State))
        setState("")
        mf(modifActions.Showme());



    };
    



    return (
        <Box>

            <StyleModal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={md}
                onClose={toggleAjoutDonationHandler}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box width="400px" bgcolor="white" p={3} borderRadius={5}>
                    <Box sx={{ display: "flex" }}>
                        <CancelOutlined onClick={toggleAjoutDonationHandler} sx={{ marginRight: "25%" }} />
                        <Typography variant="h6" color="gray" textAlign="center">update Donation</Typography>
                    </Box>
                    <List>
                        <form onSubmit={togglerHandler}>
                            <ListItem sx={{ display: "flex", margin: 2 }}>

                                <FormControl variant="standard" sx={{ minWidth: 300, }}>
                                    <ListItem sx={{ display: "flex", }}>
                                        <InputLabel >Last Name:
                                            <b>
                                                <u>{lastname}</u>
                                            </b>
                                        </InputLabel>

                                    </ListItem>
                                </FormControl>
                            </ListItem>
                            <ListItem sx={{ display: "flex", margin: 2 }}>

                                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                                    <ListItem sx={{ display: "flex" }}>
                                        <InputLabel >type Identity :
                                            <b>
                                                <u>{typeIdentity}</u>
                                            </b>
                                        </InputLabel>



                                    </ListItem>
                                </FormControl>

                            </ListItem>
                            <ListItem sx={{ display: "flex", margin: 2 }}>

                                <FormControl variant="standard" sx={{ minWidth: 300 }}>
                                    <ListItem sx={{ display: "flex" }} >
                                        <InputLabel >Numero Identity :
                                            <b>
                                                <u>{NumeroIdentity}</u>
                                            </b>
                                        </InputLabel>



                                    </ListItem>
                                </FormControl>

                            </ListItem>
                            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                                <FormControl sx={{ m: 1, minWidth: 120, marginRight: "50%" }} size="small">
                                    <InputLabel id="demo-select-small">State</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={State}
                                        label="State"
                                         onChange={handleState}
                                    >

                                        <MenuItem value="SOLVED">SOLVED</MenuItem>
                                        <MenuItem value="REJECTED">REJECTED</MenuItem>
                                        <MenuItem value="PENDING">PENDING</MenuItem>
                                    </Select>
                                </FormControl>

                            </ListItem>


                            <ListItem sx={{ justifyContent: "right", gap: 3 }}>
                                <Button onClick={toggleAjoutDonationHandler} variant="outlined">

                                    <Typography>cancel</Typography>
                                </Button>
                                <Button type="submit" variant="outlined" >

                                    <Typography>update</Typography>
                                </Button>

                            </ListItem>
                        </form>
                    </List>
                </Box>
            </StyleModal>










        </Box>
    )
}


export default Modif;