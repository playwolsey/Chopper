import './navbar.less';
import React from 'react';

var Navbar = React.createClass({
    render() {
        return (
            <header className="navbar">
                <span className="title">title</span>
                <span className="nav"></span>
            </header>
        )
    }
});

export default Navbar;
