import { v4 as uuidv4 } from 'uuid'

export const addLearningContent = (data) => ({
    type: 'ADD_LEARNING_CONTENT',
    data
})

export const addLearningContentInDB = (data, userId) => {
    return async (dispatch) => {
        const {
        	 id = uuidv4(),
        	 language = '',
    	     note = '',
    	     date = 0,
    	     createdAt = 0,
             updatedAt = 0,
        } = data
        console.log(userId)
        const learningData = { id, language, note, date, createdAt, updatedAt, userId }
        await fetch('/insert_learning_data', {
        	method: 'POST',
        	body: JSON.stringify(learningData)
        })
        dispatch(addLearningContent(learningData))  
    
    }
}

export const editLearningContent = (id ,updates) => ({
    type: 'EDIT_LEARNING_CONTENT',
    id,
    updates
})

export const startEditLEarningData = (id, updates) => {
    return async (dispatch) => {
        const { language, note, date, updatedAt } = updates
        await fetch('/update_learning_data', {
            method: 'PUT',
            body: JSON.stringify({ id , language, note, date, updatedAt })
        })
        dispatch(editLearningContent(id, updates))
    }
}

export const removeLearningContent = ({ id } = {}) => ({
    type: 'REMOVE_LEARNING_CONTENT',
    id
})

export const startRemoveLearningData = ({ id }) => {
    return async (dispatch) => {
        await fetch('/delete_learning_data', {
            method: 'DELETE',
            body: JSON.stringify({ id })
        })
        dispatch(removeLearningContent({ id }))
    }
}

export const setLearningDataList = (dataList) => ({
    type: 'SET_LEARNING_DATA_LIST',
    dataList
})

export const setLearningDataListFromDB = (userId) => {
    return async (dispatch) => {
        const jsonData = await fetch('/get_learning_data', {
            method: 'POST',
            body: userId
        })
        const dataList = await jsonData.json()
        await dispatch(setLearningDataList(dataList))
    }
}