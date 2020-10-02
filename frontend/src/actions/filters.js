export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

export const sortByAtoZ = () => ({
    type: 'SORT_BY_A_TO_Z'
})

export const sortByZtoA = () => ({
    type: 'SORT_BY_Z_TO_A'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})