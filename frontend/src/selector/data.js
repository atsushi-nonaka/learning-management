import moment from 'moment'

export default (dataList, {text, sortBy, startDate, endDate}) => {
    return dataList.filter((data) => {
        const date = moment(data.date)
        const startDateMatch = startDate ? startDate.isSameOrBefore(date, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(date, 'day') : true
        const textMatch = data.language.toLowerCase().trim().includes(text.toLowerCase().trim()) || data.note.toLowerCase().trim().includes(text.toLowerCase().trim()) 
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        switch(sortBy){
            case 'atoz':
                return a.language < b.language ? -1: 1
            case 'ztoa':
                return a.language < b.language ? 1: -1
            case 'date':
                return a.date < b.date ? 1: -1
        }
    })  
}