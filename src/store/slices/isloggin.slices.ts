import { createSlice } from "@reduxjs/toolkit";

export const isLogginSlices = createSlice({
    name: "isLoggin",
    initialState: true,
    reducers: {
        setIsLoggin: (state, action) => action.payload,
      
    }
})

export const {setIsLoggin} = isLogginSlices.actions

export default isLogginSlices.reducer

