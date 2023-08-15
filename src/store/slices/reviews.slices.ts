import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import axiosInstance from "../../utils/getConfig";

export const reviewsSlices = createSlice({
    name: "reviews",
    initialState: null,
    reducers: {
        setReviews: (state, action) => action.payload,
        //setReviews: (state, action) => action.payload
    }
})

export const {setReviews} = reviewsSlices.actions

export default reviewsSlices.reducer

export const AllReviewsThunk = (id) => (dispatch) =>{
    const url = `http://localhost:4600/api/v1/reviews/${id}`

    axios.get(url)
    .then(res => dispatch(setReviews(res.data.reviews)))
    .catch(err => console.log(err))
}





