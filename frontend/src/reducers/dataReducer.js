export default (state = [], action) => {
    switch(action.type){
        case 'ADD_LEARNING_CONTENT':
            return [
                ...state,
                action.data
            ]
        case 'EDIT_LEARNING_CONTENT':
            return state.map((data) => {
                if(data.id === action.id){
                    return {
                        ...data,
                        ...action.updates
                    }
                }
                return data
            })
        case 'REMOVE_LEARNING_CONTENT':
            return state.filter((data) => {
                return data.id !== action.id
            })
        case 'SET_LEARNING_DATA_LIST':
            return action.dataList
        default:
            return state
    } 
}