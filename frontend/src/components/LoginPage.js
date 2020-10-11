import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { Button } from '@material-ui/core';

export const LoginPage = ({ startLogin }) => (
    <div className="login">
        <div className="login__form">   
            <h1 className="login__form__title">LOGIN</h1>
            <div className="login__form__button">
                <div className="login__form__button__google">
                    <Button
                        color="default"
                        onClick={startLogin}
                        style={{ fontSize: '1.2rem' }}
                        type="button"
                        variant="contained"
                    >
                        Login with google
                    </Button>
                </div>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)