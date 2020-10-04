import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { Button } from '@material-ui/core'

const Header = ({ startLogout }) => (
    <div className='header'>
        <h1 className='header__title'>学習管理アプリ</h1>
        <div className='header__link__list'>
            <NavLink to="/dashboard" className='header__link' activeClassName="is-active" exact>HOME</NavLink>
            <NavLink to="/registration" className='header__link' activeClassName="is-active">REGISTRATION</NavLink>
            <button 
                className='header__link logout'
                onClick={startLogout}
            >
            LOGOUT
            </button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)