import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';


const initialAjoutState = { donateur:[],date:[],codeD:"",lastname:"",type:"",etat:"",numerotype:"",show: false }
const ModifSlice = createSlice({
    name: "modif",
    initialState: initialAjoutState,
    reducers: {
        Showme(state) {
            state.show = !state.show
            
        },
        getCode(state,action){
            const code = action.payload
            state.codeD=code
            console.log("el code ",state.codeD);
        },
        getLastName(state,action){
            const name = action.payload
            state.lastname=name
        },
        getType(state,action){
            const typeIden = action.payload
            state.type=typeIden
        },
        getNumerotype(state,action){
            const Num = action.payload
            state.numerotype=Num
        },
        getDateCreation(state,action){
            const da = action.payload
            state.date=da
        },
        getDonateur(state,action){
            const don = action.payload
            state.donateur=don
        },
        updatDonateur(state, action) {
           
            const sta = action.payload
            state.etat=sta
            console.log("etat",state.etat);
            const b=state.date.map(x =>x)


            const a = state.donateur.map(s => s)
            console.log("tab",a);

            Axios.put(`http://localhost:9005/blood-bank/donation/${state.codeD}`, {
                code:state.codeD,
                codePatient:a[1],
                fullName:a[2],
                age:a[3],
                sexe:a[7],
                typeIdentity:a[5],
                numIdentity:a[6],
                phoneNumber:a[4],
                adress:a[8],
                date_creation:b,
                etat:state.etat
                
            })
                
               
             

        }
       

        }
    })

const ModifReducerr = ModifSlice.reducer
export const modifActions = ModifSlice.actions

export default ModifReducerr