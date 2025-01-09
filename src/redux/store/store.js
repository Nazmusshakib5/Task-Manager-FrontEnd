import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settingSlice.js";
import taskReducer from "../state-slice/taskSlice.js";
import summaryReducer from "../state-slice/dashboardSummarySlice.js";
import profileReducer from "../state-slice/profileSlice.js";

export default configureStore({
    reducer:{
        settings:settingsReducer,
        task:taskReducer,
        summary:summaryReducer,
        profile:profileReducer
    }
})