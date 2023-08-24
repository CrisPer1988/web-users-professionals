import { configureStore } from "@reduxjs/toolkit"
import professionals from "./slices/professionals.slices"
import reviews from "./slices/reviews.slices"
import isLoggin from "./slices/isloggin.slices"

export default configureStore({
    reducer: {
        professionals,
        reviews,
        isLoggin
    }
})