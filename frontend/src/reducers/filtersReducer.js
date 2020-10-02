import moment from 'moment'

const defaultfilters = {
    text: '',
    date: undefined,
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'date'
}

export default (state = defaultfilters, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'SORT_BY_A_TO_Z':
            return {
                ...state,
                sortBy: 'atoz'
            }
        case 'SORT_BY_Z_TO_A':
            return {
                ...state,
                sortBy: 'ztoa'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        default:
            return state
    } 
}