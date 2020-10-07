import React from 'react'
import moment from 'moment'
import DateFnsUtils from '@date-io/date-fns'
import jaLocale from "date-fns/locale/ja"
import { Button, FormControl, TextField } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

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
            error: '',
            isButton: false
        }
    }

    changeButtonState = () => {
        this.setState(() => ({ isButton: !this.state.isButton }))
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

    onSubmit = async (e) => {
        e.preventDefault()
        await this.changeButtonState()
        if(!this.state.language.trim()){
            this.setState(() => ({ error: 'プログラミング言語が選ばれていません' }))
            this.changeButtonState()
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
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                    <FormControl fullWidth={true}>
                        <div className="form">
                            {this.state.error && <p>{this.state.error}</p>}
                            <div className="form__language">
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="プログラミング言語"
                                    type='text'
                                    required
                                    variant="outlined"
                                    placeholder='Java'
                                    onChange={this.onLanguageChange}
                                    value={this.state.language}
                                    InputLabelProps={{ style: { fontSize: 12 }}}
                                    InputProps={{ style: { fontSize: 12 } }}
                                    className="form__input__language"
                                />
                            </div>
                            <div className="form__note">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="メモ"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    onChange={this.onNoteChange}
                                    value={this.state.note}
                                    InputLabelProps={{ style: { fontSize: 12 }}}
                                    InputProps={{ style: { fontSize: 12 } }}
                                    className="form__input__note"
                                />
                            </div>
                            <div className="form__calendar">
                                <DatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="学習日"
                                    format="yyyy/MM/dd"
                                    disableFuture={() => false}
                                    value={this.state.date}
                                    onChange={this.onDateChange}
                                    InputLabelProps={{ style: { fontSize: 12 } }}
                                    InputProps={{ 
                                        style: { fontSize: 12 }
                                    }}
                                    inputVariant="outlined"
                                    variant="inline"
                                    className="form__input__calendar"
                                />
                            </div>
                            <div className="form__button">
                                <Button 
                                    type="button" 
                                    variant="outlined" 
                                    color="primary" 
                                    onClick={this.onSubmit}
                                    disabled={this.state.isButton}
                                    className="form__submit__button"
                                    fullWidth={true}
                                >
                                    更新
                                </Button>
                            </div>
                        </div>
                    </FormControl>
                </MuiPickersUtilsProvider>
            </div>
        )
    }
} 
