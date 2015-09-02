import './navbar.less';
import React from 'react';

var Navbar = React.createClass({
    render() {
        return (
            <header className="navbar">
                <span className="title">我是title</span>
                <span className="nav">111</span>
                <p>xxxx</p>
            </header>
        )
    }
});

export default Navbar;
