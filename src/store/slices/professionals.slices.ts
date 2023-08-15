import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../utils/getConfig";

export const professionalsSlices = createSlice({
    name: "professionals",
    initialState: null,
    reducers: {
        setProfessionals: (state, action) => action.payload,
        //setReviews: (state, action) => action.payload
    }
})

export const {setProfessionals, /*setReviews*/} = professionalsSlices.actions

export default professionalsSlices.reducer

export const AllprofessionalsThunk = () => (dispatch) =>{
    const url = "http://localhost:4600/api/v1/professionals/"

    axios.get(url)
    .then(res => dispatch(setProfessionals(res.data.professionals)))
    .catch(err => console.log(err))
}

// export const AllReviewsThunk = () => (dispatch) =>{
   

//     axiosInstance
//     .get("/professionals/reviews")
//     .then(res => dispatch(setReviews(res.data)))
//     .catch(err => console.log(err))
// }

// console.log(professionalsSlices);




