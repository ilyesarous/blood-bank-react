import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';


const initialModifState = { patient: [],birdh:[], codeP:"",lastName:"",phone:"" , counteur: 0, select: false ,show: false }
// {} najem na3mel patient. w ken 3malt [] na3mel patient [i]
const ModifSlice = createSlice({
    name: "update",
    initialState: initialModifState,
    reducers: {
        Showme(state) {
            if(state.codeP ==="")
                state.select = true
            else{
                state.show = !state.show
                state.select = false
            }
            
        },
        modif(state, action) {
            const codepatient = action.payload
            state.codeP = codepatient 
          
        },
     
        modifPat(state, action) {
            const patient = action.payload
            state.patient = patient
        },

        modifBirth(state, action) {
            const bir  = action.payload
            state.birdh = bir 
        },
        modifLastName(state, action) {
            const bir  = action.payload
            state.lastName = bir 
        },
        modifPhone(state, action) {
            const bir  = action.payload
            state.phone = bir 
        },
        modifCounteur(state) {
            state.counteur++
        },
   
        modifBlood(state, action) {
            const Bloodcode = action.payload
            state.bloodcode = Bloodcode
        },

        Updat(state, action) {
           
            const pat=action.payload
            const b=state.birdh.map(x =>x)
            const a = state.patient.map(s => s)

            Axios.put(`http://localhost:9005/blood-bank/patient/${state.codeP}`, {
                code:a[0],
                firstNameAr: a[2],
                lastNameAr: a[1],
                fatherNameAr: a[3],
                grandFatherNameAr: a[4],
                fullNameAr: a[6],
                firstNameEng: a[7],
                lastNameEng: a[5],
                fatherNameEng: a[8],
                grandFatherNameEng: a[9],
                fullNameEng: a[10],
                birthDate: b ,
                gender: a[12],
                phoneNumber: pat[3] ,
                adress: pat[1] , 
                email: pat[2] ,
                bloodCode: a[11]
                
            })
                
               
             

        }
    }
})

const ModifReducer = ModifSlice.reducer
export const ModifActions = ModifSlice.actions

export default ModifReducer