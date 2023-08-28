import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/getConfig";


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

    axiosInstance.get("/api/v1/professionals")
    .then(res => {
        
        dispatch(setProfessionals(res.data))})
    .catch(err => console.log(err))
}

export const ProfessionalsByCategoryThunk = (id:number) => (dispatch:any) =>{
    
    console.log(`putete ${id}`);

    axiosInstance
    .get(`/api/v1/professionals/categories/${id}`)

    .then(res => {
        dispatch(setProfessionals(res.data.categories))
    })
    .catch(err => console.log(err))
}







