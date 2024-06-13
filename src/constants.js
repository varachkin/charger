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