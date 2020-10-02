import { v4 as uuidv4} from 'uuid'
import { createStore, combineReducers } from 'redux'

const id = uuidv4()

const defaultDate = {
    data: [{
        id: uuidv4(),
        programing: 'JavaScript',
        hours: 0,
        date: undefined,
        note: ''
    }],
    filters: {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'hours'
    }
}

store.dispatch(addLearningContent({
    id: id,
    programing: 'JavaScript',
    hours: 0,
    date: undefined
}))

store.dispatch(addLearningContent({
    id: uuidv4(),
    programing: 'PHP',
    hours: 0,
    date: undefined
}))

store.dispatch(addLearningContent({
    id: uuidv4(),
    programing: 'Ruby',
    hours: 0,
    date: undefined
}))

store.dispatch(editLearningContent({
    id: id,
    programing: 'Java',
    hours: 0,
    date: undefined
}))

store.dispatch(removeLearningContent({
    id: id
}))

store.dispatch(setTextFilter('Ruby'))

