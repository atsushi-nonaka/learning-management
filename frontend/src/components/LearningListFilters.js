import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import jaLocale from "date-fns/locale/ja"
import moment from 'moment'
import { connect } from 'react-redux'
import { Select, MenuItem, TextField } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { setTextFilter, setStartDate, setEndDate, sortByAtoZ ,sortByZtoA, sortByDate } from '../actions/filters'
 
export class LearningListFilters extends React.Component {
    state = {
        focusedInput: null
    }

    onTextChange = (e) => {
        const text = e.target.value
        this.props.dispatch(setTextFilter(text))
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }

    onSortChange = (e) => {
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
                <TextField 
                    id="outlined-basic" 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                    placeholder="Java"
                    className="filter__text"
                    label="テキスト検索" 
                    variant="outlined" 
                />
                <Select
                    value={this.props.filters.sortBy}    
                    onChange={this.onSortChange}
                >
                    <MenuItem value='date'>学習日順</MenuItem>
                    <MenuItem value='atoz'>A→Z</MenuItem>
                    <MenuItem value='ztoa'>Z→A</MenuItem>
                </Select>
                
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                    <KeyboardDatePicker
                        margin="normal"
                        label="開始日"
                        format="yyyy/MM/dd"
                        value={this.props.filters.startDate}
                        onChange={this.onStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        label="終了日"
                        format="yyyy/MM/dd"
                        value={this.props.filters.endDate}
                        onChange={this.onEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(LearningListFilters)