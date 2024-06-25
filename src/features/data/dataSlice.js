import { createSlice } from "@reduxjs/toolkit";
import { STATIONS, chargerTypes } from "../../constants";

const initialState = {
    stations: [...STATIONS],
    chargerTypes: [...chargerTypes],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: () => initialState,
    reducers: {
        setStations: (state, actions) => {
            state.stations = [ {id: 1, ...actions.payload}, ...STATIONS];
        },
        stationToCompleate: (state, actions) => {
            state.stations = state.stations.map(station => station.id === actions.payload ? ({...station, status: 'compleated'}) : {...station} )
        },
        stationToCharging: (state, actions) => {
            state.stations = state.stations.map(station => station.id === actions.payload ? ({...station, status: 'charging'}) : {...station} )
        }
    }
})

export const { setData, stationToCompleate, stationToCharging, setStations } = dataSlice.actions;
export default dataSlice.reducer;