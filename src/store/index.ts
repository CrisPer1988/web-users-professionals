import { configureStore } from "@reduxjs/toolkit"
import professionals from "./slices/professionals.slices"
import reviews from "./slices/reviews.slices"


export default configureStore({
    reducer: {
        professionals,
        reviews
 
    }
})