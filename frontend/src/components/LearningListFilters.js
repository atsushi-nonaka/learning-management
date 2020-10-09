import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import jaLocale from "date-fns/locale/ja"
import moment from 'moment'
import { connect } from 'react-redux'
import {
    MenuItem, 
    TextField 
} from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { setTextFilter, setStartDate, setEndDate, sortByAtoZ ,sortByZtoA, sortByDate } from '../actions/filters'
 
export class LearningListFilters extends React.Component {
    state = {
        focusedInput: null
    }

    onTextChange = (e) => {
        e.preventDefault()
        const text = e.target.value
        this.props.dispatch(setTextFilter(text))
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }

    onSortChange = (e) => {
        e.preventDefault()
        switch(e.target.value){
            case 'atoz':
                this.props.dispatch(sortByAtoZ())
                break
            case 'ztoa':
                this.props.dispatch(sortByZtoA())
                break
            case 'date':
                this.props.dispatch(sortByDate())
        }
    }

    onStartDateChange = (startDate) => {
        this.props.dispatch(setStartDate(moment(startDate)))
    }

    onEndDateChange = (endDate) => {
        this.props.dispatch(setEndDate(moment(endDate)))
    }

    render(){
        return (
            <div className="filter">
                <div>
                    <TextField 
                        id="outlined-basic" 
                        type="text" 
                        value={this.props.filters.text} 
                        onChange={this.onTextChange}
                        InputLabelProps={{ style: { fontSize: 12 }}}
                        InputProps={{ style: { fontSize: 12 } }}
                        className="filter__text"
                        placeholder="Java"
                        label="テキスト検索" 
                        variant="outlined" 
                    />
                </div>
                <div>
                    <TextField
                        select
                        value={this.props.filters.sortBy}    
                        onChange={this.onSortChange} 
                        className="filter__select"  
                        label="ソート"
                        InputLabelProps={{ style: { fontSize: 12 }}}
                        InputProps={{ style: { fontSize: 12 } }}
                        variant="outlined" 
                    >
                        <MenuItem value='date'>学習日順</MenuItem>
                        <MenuItem value='atoz'>A→Z</MenuItem>
                        <MenuItem value='ztoa'>Z→A</MenuItem>
                    </TextField>
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                        <DatePicker
                            margin="none"
                            label="開始日"
                            format="yyyy/MM/dd"
                            value={this.props.filters.startDate}
                            onChange={this.onStartDateChange}
                            className="filter__calendar"
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{ style: { fontSize: 12 } }}
                            inputVariant="outlined"
                            variant="inline"
                        />
                        <DatePicker
                            margin="none"
                            label="終了日"
                            format="yyyy/MM/dd"
                            value={this.props.filters.endDate}
                            onChange={this.onEndDateChange}
                            className="filter__calendar"
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{ style: { fontSize: 12 } }}
                            inputVariant="outlined"
                            variant="inline"
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(LearningListFilters)