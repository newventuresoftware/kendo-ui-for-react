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
                    <NavLink exact to='/hello' className="navLink" activeClassName='current'>Hello</NavLink>
                    <NavLink exact to='/components' className="navLink" activeClassName='current'>Components</NavLink>
                    <NavLink exact to='/componentsAdvanced' className="navLink" activeClassName='current'>Components Advanced</NavLink>
                    <NavLink exact to='/lifecycle' className="navLink" activeClassName='current'>Lifecycle</NavLink>
                    <NavLink exact to='/domupdates' className="navLink" activeClassName='current'>Dom Updates</NavLink>
                </ul>
            </nav>
        </header>
    )
}