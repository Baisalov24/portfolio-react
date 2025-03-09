import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../slices/tabSlice"


const store = configureStore({
    reducer: {
        activeTab: tabReducer,
    }
})

export default store;