export const getAvailableStations = (stations = []) => {
    return stations.filter(station => station.status !== 'Unavailable' && station.onlineStatus !== 'Offline')
}

export const getProcessingStations = (stations) => {
    return stations.filter(station => 
        station.connectors.some(connector => 
            connector.latestTransaction.status === 'Charging' || connector.latestTransaction.status === 'Ended'
        )
    );
}