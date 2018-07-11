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
                <span className="App-title"></span>
            </div>
            <nav>
                <ul className="navMain">
                    <NavLink exact to='/' className="navLink" activeClassName='current'>Home</NavLink>
                    <NavLink to='/component' className="navLink" activeClassName='current'>Component</NavLink>
                    <NavLink to='/wrapper' className="navLink" activeClassName='current'>Wrapper</NavLink>
                    <NavLink to='/kendo' className="navLink" activeClassName='current'>Using Kendo</NavLink>
                    <NavLink to='/charts' className="navLink" activeClassName='current'>Charts</NavLink>
                    <NavLink to='/export' className="navLink" activeClassName='current'>Export</NavLink>
                    <NavLink to='/newcomponents' className="navLink" activeClassName='current'>New Components</NavLink>
                </ul>
            </nav>
        </header>
    )
}