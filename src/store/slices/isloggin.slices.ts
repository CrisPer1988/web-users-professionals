import { createSlice } from "@reduxjs/toolkit";

const storedIsLoggin = localStorage.getItem('isLoggin');
const initialState = storedIsLoggin ? JSON.parse(storedIsLoggin) : true;

export const isLogginSlices = createSlice({
    name: "isLoggin",
    initialState: initialState,
    reducers: {
        setIsLoggin: (state, action) => action.payload,
    }
});

export const { setIsLoggin } = isLogginSlices.actions;

export default isLogginSlices.reducer;
