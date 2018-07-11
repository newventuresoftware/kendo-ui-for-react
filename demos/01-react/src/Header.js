import React from 'react';
import logo from './logo.svg';
import kendoLogo from './kendo-react-logo.svg';
import { NavLink } from 'react-router-dom';


export default function Header(props) {
    return (
        <header className="App-header">
            <div className="Header-top">
                <img src={kendoLogo} className="Kendo-logo" alt="Kendo Logo" />
                <img src={logo} className="App-logo" alt="logo" />
                <span className="App-title">Welcome to React</span>
            </div>
            <nav>
                <ul className="navMain">
                    <NavLink exact to='/hello' className="navLink" activeClassName='current'>Home</NavLink>
                    <NavLink exact to='/domupdates' className="navLink" activeClassName='current'>Dom Updates</NavLink>
                    <NavLink exact to='/lifecycle' className="navLink" activeClassName='current'>Lifecyle</NavLink>
                </ul>
            </nav>
        </header>
    )
}