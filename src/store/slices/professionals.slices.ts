import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const professionalsSlices = createSlice({
    name: "professionals",
    initialState: null,
    reducers: {
        setProfessionals: (_state, action) => action.payload,
       
    }
})


export const {setProfessionals} = professionalsSlices.actions

export default professionalsSlices.reducer

export const AllprofessionalsThunk = () => (dispatch:any) =>{
    const url = "http://localhost:4600/api/v1/professionals/"

    axios.get(url)
    .then(res => {
        // console.log(res.data);
        
        dispatch(setProfessionals(res.data))})
    .catch(err => console.log(err))
}

export const ProfessionalsByCategoryThunk = (id:number) => (dispatch:any) =>{
    
    console.log(`putete ${id}`);
    
    const url = `http://localhost:4600/api/v1/professionals/categories/${id}`

    axios.get(url)

    .then(res => {
        // console.log(res.data.categories);
        dispatch(setProfessionals(res.data.categories))
    })
    .catch(err => console.log(err))
}







