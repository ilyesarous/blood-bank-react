import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';
const url = "http://localhost:9005/blood-bank/patient"

const initialAjoutState = { show: false }
const AjoutSlice = createSlice({
    name: "ajout",
    initialState: initialAjoutState,
    reducers: {
        Showme(state) {
            state.show = !state.show
        },
        addP(state, action) {

            const tabPatient = action.payload
            Axios.post(url, {
                adress: tabPatient[0],
                birthDate: tabPatient[1],
                email: tabPatient[2],
                fatherNameAr: tabPatient[3],
                fatherNameEng: tabPatient[4],
                firstNameAr: tabPatient[5],
                firstNameEng: tabPatient[6],
                gender: tabPatient[7],
                grandFatherNameAr: tabPatient[8],
                grandFatherNameEng: tabPatient[9],
                lastNameAr: tabPatient[10],
                lastNameEng: tabPatient[11],
                phoneNumber: tabPatient[12],
                bloodCode: tabPatient[13]


            })
        }

        }
    })

const AjoutReducer = AjoutSlice.reducer
export const AjoutActions = AjoutSlice.actions

export default AjoutReducer