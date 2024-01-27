import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone:false,
        currentlyFetching:false,
    },
    reducers: {
        markFetchDone: (state) => {
             state.fetchDone=true;
        },
        markFetchStarted: (state) => {
             state.currentlyFetching=true;
        },
        markFetchFinished: (state) => {
             state.currentlyFetching=false;
        }
    }
});

export const fetchStatusAction = fetchSlice.actions;
export default fetchSlice;