export const getAvailableStations = (stations = []) => {
    return stations.filter(station => station.status !== 'Unavailable' && station.onlineStatus !== 'Offline')
}

export const getProcessingStations = (stations) => {
    return stations.filter(station => 
        station.connectors.some(connector => 
            connector.status === 'Occupied'
        )
    );
}

export const filterStationsByConnectorType = (array, type) => {
    return array.filter(station => station.connectors.find(connector => connector.type === type))
}