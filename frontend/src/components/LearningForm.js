import React from 'react'
import moment from 'moment'
import DateFnsUtils from '@date-io/date-fns'
import jaLocale from "date-fns/locale/ja"
import { Button, FormControl, TextField } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import 'moment/locale/ja'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

export default class LearningForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            language: props.data ? props.data.language : '',
            note: props.data ? props.data.note : '',  
            date: props.data ? moment(props.data.date) : moment(),
            createdAt: props.data ? moment(props.data.createdAt) : moment(),
            updatedAt: moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onLanguageChange = (e) => {
        const language = e.target.value
        this.setState(() => ({ language }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onDateChange = (date) => {
        if(date) {
            this.setState(() => ({ date }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    isOutsideRange = (day) => {
        return day.isAfter(moment().endOf('week')) || day.isBefore(moment().startOf('week'))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.language.trim()){
            this.setState({ error: 'プログラミング言語が選ばれていません' })
        }else{
            this.props.onSubmit({
                language: this.state.language.trim(),
                note: this.state.note,
                date: this.state.date.valueOf(),
                createdAt: this.state.createdAt.valueOf(),
                updatedAt: this.state.updatedAt.valueOf()
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                    <FormControl>
                        <div>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="プログラミング言語"
                                type='text'
                                multiline
                                rowsMax={4}
                                required
                                variant="outlined"
                                placeholder='Java'
                                onChange={this.onLanguageChange}
                                value={this.state.language}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="メモ"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={this.onNoteChange}
                                value={this.state.note}
                            />
                        </div>
                        <div>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="学習日"
                                format="yyyy/MM/dd"
                                disableFuture={() => false}
                                value={this.state.date}
                                onChange={this.onDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </div>
                        <Button 
                            type="button" 
                            variant="outlined" 
                            color="primary" 
                            onClick={this.onSubmit}
                        >
                        更新
                        </Button>
                    </FormControl>
                </MuiPickersUtilsProvider>
            </div>
        )
    }
} 
