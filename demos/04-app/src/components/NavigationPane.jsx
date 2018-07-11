import React from 'react';

export default function NavigationPane(props) {
    return (
        <div className="navigationPane">
            <header>Navigation Pane</header>
            <nav className="navigationPaneItems">
                {props.children}
            </nav>
        </div>
    );
}