import React from 'react'
import { connect } from 'react-redux'
import LearningForm from './LearningForm'
import { addLearningContentInDB } from '../actions/data'
 
class LearningRegistration extends React.Component {
    onSubmit = async (data) => {
        console.log(this.props.userId)
        await this.props.addLearningContentInDB(data, this.props.userId)
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

const mapStateToProps = (state) => ({
    userId: state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    addLearningContentInDB: (data, userId) => dispatch(addLearningContentInDB(data, userId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(LearningRegistration)