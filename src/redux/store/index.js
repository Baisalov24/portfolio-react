import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../slices/tabSlice"
import experienceReducer from "../slices/experienceSlice"
import homeReducer from "../slices/homeSlice"
import projectsReducer from "../slices/projectsSlice"
import skillsReducer from "../slices/skillsSlice"


const store = configureStore({
    reducer: {
        activeTab: tabReducer,
        experienceData: experienceReducer,
        homeData: homeReducer,
        listProjects: projectsReducer,
        listSkills: skillsReducer,
    }
})

export default store;