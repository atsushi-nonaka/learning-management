import React from 'react'
import { connect } from 'react-redux'
import LearningForm from './LearningForm'
import { Button } from '@material-ui/core'
import { startEditLEarningData, startRemoveLearningData } from '../actions/data'

class LearningEdit extends React.Component {
    onSubmit = async (data) => {
        await this.props.dispatch(startEditLEarningData(this.props.data.id, data))
        this.props.history.push('/dashboard')
    }

    onRemove = async () => {
        await this.props.dispatch(startRemoveLearningData({ id: this.props.data.id }))
        this.props.history.push('/dashboard')   
    }

    render(){
        return (
            <div>
                <LearningForm onSubmit={this.onSubmit} onRemove={this.onRemove} data={this.props.data} />
                <Button
                    type="button" 
                    variant="outlined" 
                    color="primary"  
                    onClick={this.onRemove}
                >削除</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    data: state.data.find((data) => data.id === props.match.params.id) 
})

export default connect(mapStateToProps)(LearningEdit)