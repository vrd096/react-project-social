import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/Profile" activeClassName={s.active}>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/Dialogs" activeClassName={s.active}>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/Users" activeClassName={s.active}>
                        Users
                    </NavLink>
                </li>
                <li className={s.item}>
                    <a>News</a>
                </li>
                <li className={s.item}>
                    <a>Music</a>
                </li>
                <li className={s.item}>
                    <a>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
