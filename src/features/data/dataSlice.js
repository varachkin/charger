import { createSlice } from "@reduxjs/toolkit";
import { chargerTypes, stations } from "../../constants";

const initialState = {
    stations: [...stations],
    chargerTypes: [...chargerTypes],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: () => initialState,
    reducers: {
        setData: (state, actions) => {
            // state.data = { ...actions.payload };
        },
        stationToCompleate: (state, actions) => {
            state.stations = state.stations.map(station => station.id === actions.payload ? ({...station, status: 'compleated'}) : {...station} )
        },
        stationToCharging: (state, actions) => {
            state.stations = state.stations.map(station => station.id === actions.payload ? ({...station, status: 'charging'}) : {...station} )
        }
    }
})

export const { setData, stationToCompleate, stationToCharging } = dataSlice.actions;
export default dataSlice.reducer;