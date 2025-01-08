import {createSlice} from "@reduxjs/toolkit";
export const dashboardSlice=createSlice({
    name:'summary',
    initialState:{
        total:''
    },
    reducers:{
        SetSummaryValue:(state,action)=>{
            state.total=action.payload
        }
    }
})
export  const {SetSummaryValue}=dashboardSlice.actions;
export default  dashboardSlice.reducer;