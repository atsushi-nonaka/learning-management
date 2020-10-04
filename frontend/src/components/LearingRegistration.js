import React from 'react'
import { connect } from 'react-redux'
import LearningForm from './LearningForm'
import { addLearningContentInDB } from '../actions/data'
 
class LearningRegistration extends React.Component {
    onSubmit = async (data) => {
        await this.props.addLearningContentInDB(data)
        this.props.history.push('/dashboard')        	
    }

    render() {
        return (
            <div>
                <LearningForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addLearningContentInDB: (data) => dispatch(addLearningContentInDB(data)) 
})

export default connect(undefined, mapDispatchToProps)(LearningRegistration)