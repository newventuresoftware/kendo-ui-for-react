import React from 'react';
import logo from './logo.svg';
import kendoLogo from './kendo-react-logo.svg';

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
                    <li><a className="navLink" href="#" onClick={() => props.onNavigation("hello")}>Hello</a></li>
                    <li><a className="navLink" href="#" onClick={() => props.onNavigation("lifecycle")}>Lifecyle</a></li>
                </ul>
            </nav>
        </header>
    )
}