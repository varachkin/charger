import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: () => initialState,
    reducers: {
        setData: (state, actions) => {
            state.data = {...actions.payload};
        },
    }
})

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;