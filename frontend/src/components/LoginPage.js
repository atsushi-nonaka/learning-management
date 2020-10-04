import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { Button } from '@material-ui/core';

export const LoginPage = ({ startLogin }) => (
    <div>
        <Button 
            type="button"
            variant="outlined" 
            color="primary" 
            onClick={startLogin}
        >
            ログイン
        </Button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)