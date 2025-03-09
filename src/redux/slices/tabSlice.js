import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: "tabSlice",
    initialState: {activeTab: "Home"},
    reducers: {
        changeTabActive: (state, action) => {state.activeTab = action.payload}
    }
})

export const {changeTabActive} = tabSlice.actions;
export default tabSlice.reducer;

