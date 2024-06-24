export const COST = 0.3718;
export const BATARY_SIZE = 85;


export const stations = [
    {
        id: 1,
        number: 1,
        status: 'compleated',
        charger: {
            id: 1,
            header: 'eco',
            name: 'Type 2',
            maxValue: 22,
            ac_dc: 'AC',
            cost: 1.95,
            currency: 'zl',
            type: 'type_2',
        }
    },
    {
        id: 2,
        number: 2,
        status: 'charging',
        charger: {
            id: 2,
            header: 'fast',
            name: 'CCS',
            maxValue: 350,
            ac_dc: 'DC',
            cost: 2.73,
            currency: 'zl',
            type: 'ccs',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
    {
        id: 3,
        number: 116,
        status: 'compleated',
        charger: {
            id: 1,
            header: 'eco',
            name: 'Type 2',
            maxValue: 22,
            ac_dc: 'AC',
            cost: 1.95,
            currency: 'zl',
            type: 'type_2',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
    {
        id: 4,
        number: 8,
        status: 'charging',
        charger: {
            id: 2,
            header: 'fast',
            name: 'CCS',
            maxValue: 350,
            ac_dc: 'DC',
            cost: 2.73,
            currency: 'zl',
            type: 'ccs',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
    {
        id: 5,
        number: 23,
        status: 'success',
        charger: {
            id: 1,
            header: 'eco',
            name: 'Type 2',
            maxValue: 22,
            ac_dc: 'AC',
            cost: 1.95,
            currency: 'zl',
            type: 'type_2',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
    {
        id: 6,
        number: 11,
        status: 'not_available',
        charger: {
            id: 1,
            header: 'eco',
            name: 'Type 2',
            maxValue: 22,
            ac_dc: 'AC',
            cost: 1.95,
            currency: 'zl',
            type: 'type_2',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
    {
        id: 7,
        number: 12,
        status: 'error',
        charger: {
            id: 1,
            header: 'eco',
            name: 'Type 2',
            maxValue: 22,
            ac_dc: 'AC',
            cost: 1.95,
            currency: 'zl',
            type: 'type_2',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
    {
        id: 8,
        number: 12,
        status: 'error',
        charger: {
            id: 2,
            header: 'fast',
            name: 'CCS',
            maxValue: 350,
            ac_dc: 'DC',
            cost: 2.73,
            currency: 'zl',
            type: 'ccs',
        },
        client_data: {
            id: 1,
            email: 'varachkin@tut.by',
            start_value: 0,
            current_value: 0,
            start_time: 0,
            current_time: 0,
            total_ammount: 0,
        }
    },
]

export const chargerTypes = [
    {
        id: 1,
        header: 'eco',
        name: 'Type 2',
        maxValue: 22,
        ac_dc: 'AC',
        cost: 1.95,
        currency: 'zl',
        type: 'type_2',
    },
    {
        id: 2,
        header: 'fast',
        name: 'CCS',
        maxValue: 350,
        ac_dc: 'DC',
        cost: 2.73,
        currency: 'zl',
        type: 'ccs',
    },
]


export const STATIONS = [
    {
        id: 1,
        maxPowerKw: 50,
        currentPowerKw: 0,
        currentPowerA: 0,
        acDcPowerRatio: 0.87,
        status: "Operative",            // "Faulted" | "Operative" | "Unavailable"
        onlineStatus: "Online",         //  "Offline" | "Online"
        connectors: [
            {
                connectorId: "12",
                type: "CCS",
                status: "Charging",    //   Available | Charging | Faulted | Occupied | Reserved | Unavailable | Unknown
                name: null,
                maxPowerKw: 40,
                maxPowerKwActual: 37.949,
                latestTransaction: {
                    stationId: null,
                    transactionId: `2561d118-5733-4e2f-b066-cb4cb32a00ef-1`,
                    connectorId: "12",
                    connectorType: "CCS",
                    status: "Charging",    //  "Alarm" | "AuthorizedNotPluggedIn" | "Charging" | "Ended" | "InsulationTest" | "PluggedInIdle" | "Unknown"
                    startReason: "RemoteStart",
                    chargedEnergyKwh: 0.441,
                    chargingEndReason: "Remote",
                    startTime: "2024-06-14T08:07:48.596",
                    chargingEndTime: "2024-06-14T08:09:29.594",
                    endReason: "EVDisconnected",
                    endTime: "2024-06-14T08:09:43.935",
                    soc: 51,
                    socStart: 51,
                    socEnd: null,
                    timeToFull: null,
                    updateTime: "2024-06-14T08:09:43.935"
                }
            },
            {
                connectorId: "11",
                type: "CHAdeMO",
                status: "Available",    
                name: null,
                maxPowerKw: 40,
                maxPowerKwActual: 37.949,
                latestTransaction: {
                    stationId: null,
                    transactionId: null,
                    connectorId: null,
                    connectorType: null,
                    status: null, 
                    startReason: null,
                    chargedEnergyKwh: null,
                    chargingEndReason: null,
                    startTime: null,
                    chargingEndTime: null,
                    endReason: null,
                    endTime: null,
                    soc: null,
                    socStart: null,
                    socEnd: null,
                    timeToFull: null,
                    updateTime: null
                }
            },
        ]
    },
    {
        id: 2,
        maxPowerKw: 50,
        currentPowerKw: 0,
        currentPowerA: 0,
        acDcPowerRatio: 0.87,
        status: "Faulted",
        onlineStatus: "Online",
        connectors: [
            {
                connectorId: "12",
                type: "CCS",
                status: "Available",
                name: null,
                maxPowerKw: 40,
                maxPowerKwActual: 37.949,
                latestTransaction: {
                    stationId: null,
                    transactionId: `2561d118-5733-4e2f-b066-cb4cb32a00ef-2`,
                    connectorId: "12",
                    connectorType: "CCS",
                    status: "AuthorizedNotPluggedIn",
                    startReason: "RemoteStart",
                    chargedEnergyKwh: 0.441,
                    chargingEndReason: "Remote",
                    startTime: "2024-06-14T08:07:48.596",
                    chargingEndTime: "2024-06-14T08:09:29.594",
                    endReason: "EVDisconnected",
                    endTime: "2024-06-14T08:09:43.935",
                    soc: 51,
                    socStart: 51,
                    socEnd: null,
                    timeToFull: null,
                    updateTime: "2024-06-14T08:09:43.935"
                }
            }
        ]
    },
    {
        id: 3,
        maxPowerKw: 50,
        currentPowerKw: 0,
        currentPowerA: 0,
        acDcPowerRatio: 0.87,
        status: "Faulted",
        onlineStatus: "Offline",
        connectors: [
            {
                connectorId: "12",
                type: "CCS",
                status: "Faulted",
                name: null,
                maxPowerKw: 40,
                maxPowerKwActual: 37.949,
                latestTransaction: {
                    stationId: null,
                    transactionId: `2561d118-5733-4e2f-b066-cb4cb32a00ef-3`,
                    connectorId: "12",
                    connectorType: "CCS",
                    status: "Charging",
                    startReason: "RemoteStart",
                    chargedEnergyKwh: 0.441,
                    chargingEndReason: "Remote",
                    startTime: "2024-06-14T08:07:48.596",
                    chargingEndTime: "2024-06-14T08:09:29.594",
                    endReason: "EVDisconnected",
                    endTime: "2024-06-14T08:09:43.935",
                    soc: 51,
                    socStart: 51,
                    socEnd: null,
                    timeToFull: null,
                    updateTime: "2024-06-14T08:09:43.935"
                }
            }
        ]
    },
    {
        id: 4,
        maxPowerKw: 50,
        currentPowerKw: 0,
        currentPowerA: 0,
        acDcPowerRatio: 0.87,
        status: "Faulted",
        onlineStatus: "Online",
        connectors: [
            {
                connectorId: "12",
                type: "CCS",
                status: "Unavailable",
                name: null,
                maxPowerKw: 40,
                maxPowerKwActual: 37.949,
                latestTransaction: {
                    stationId: null,
                    transactionId: `2561d118-5733-4e2f-b066-cb4cb32a00ef-4`,
                    connectorId: "12",
                    connectorType: "CCS",
                    status: "Ended",
                    startReason: "RemoteStart",
                    chargedEnergyKwh: 0.441,
                    chargingEndReason: "Remote",
                    startTime: "2024-06-14T08:07:48.596",
                    chargingEndTime: "2024-06-14T08:09:29.594",
                    endReason: "EVDisconnected",
                    endTime: "2024-06-14T08:09:43.935",
                    soc: 51,
                    socStart: 51,
                    socEnd: null,
                    timeToFull: null,
                    updateTime: "2024-06-14T08:09:43.935"
                }
            }
        ]
    },
    {
        id: 5,
        maxPowerKw: 50,
        currentPowerKw: 0,
        currentPowerA: 0,
        acDcPowerRatio: 0.87,
        status: "Operative",
        onlineStatus: "Online",
        connectors: [
            {
                connectorId: "12",
                type: "CCS",
                status: "Reserved",
                name: null,
                maxPowerKw: 40,
                maxPowerKwActual: 37.949,
                latestTransaction: {
                    stationId: null,
                    transactionId: `2561d118-5733-4e2f-b066-cb4cb32a00ef-5`,
                    connectorId: "12",
                    connectorType: "CCS",
                    status: "InsulationTest",
                    startReason: "RemoteStart",
                    chargedEnergyKwh: 0.441,
                    chargingEndReason: "Remote",
                    startTime: "2024-06-14T08:07:48.596",
                    chargingEndTime: "2024-06-14T08:09:29.594",
                    endReason: "EVDisconnected",
                    endTime: "2024-06-14T08:09:43.935",
                    soc: 51,
                    socStart: 51,
                    socEnd: null,
                    timeToFull: null,
                    updateTime: "2024-06-14T08:09:43.935"
                }
            }
        ]
    },
]