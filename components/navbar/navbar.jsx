import './navbar.less';
import React from 'react';

var Navbar = React.createClass({
    render() {
        return (
            <header className="navbar">
            <span className="title">Movie</span>
            <span className="nav" onClick={this.props.onShowNav}></span>
            </header>
        )
    }
});

export default Navbar;
