export const getAvailableStations = (stations = []) => {
    return stations.filter(station => station?.status === 'Operative' && station.onlineStatus === 'Online')
}

export const getProcessingStations = (stations = []) => {
    return stations.filter(station => {
        if (station?.connectors?.length) {
            return station?.connectors.some(connector =>
                connector?.status === 'Occupied'
            )
        } else {
            return []
        }
    })
    
}

export const filterStationsByConnectorType = (array, type) => {
    console.log(array, 'array')
    return array.filter(station => station.connectors.find(connector => connector.type === type))
}

