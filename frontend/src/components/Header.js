import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <h1 className='header__title'>学習管理アプリ</h1>
        <div className='header__link__list'>
            <NavLink to="/" className='header__link' activeClassName="is-active" exact>HOME</NavLink>
            <NavLink to="/registration" className='header__link' activeClassName="is-active">REGISTRATION</NavLink>
        </div>
    </div>
)

export default Header