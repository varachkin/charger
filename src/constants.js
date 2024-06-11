export const COST = 0.3718;
export const BATARY_SIZE = 85;


export const array = [
    {
        id: 1,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
        number: 1,
        status: 'ready',
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
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
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
    },
    {
        id: 3,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
        number: 116,
        status: 'ready',
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
        id: 4,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
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
    },
    {
        id: 5,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
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
        }
    },
    {
        id: 6,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
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
        }
    },
    {
        id: 7,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
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
        }
    },
    {
        id: 8,
        name: {
            pl: 'Stanowisko',
            en: 'Position',
        },
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
    },
]

export const typesChargers = [
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