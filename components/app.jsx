//import React from 'react';
//import Navbar from '../../../components/navbar/navbar.jsx';
//
//;(function() {
//    React.render(
//        <Navbar />,
//        document.getElementById('app')
//    );
//})();
//
//import './navbar.less';
//import React from 'react';
//
//var Navbar = React.createClass({
//    render() {
//        return (
//            <header className="navbar">
//                <span className="title">title</span>
//                <span className="nav"></span>
//            </header>
//        )
//    }
//});
//
//export default Navbar;

import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';


var App = React.createClass({
    render() {
        return (
            <section className="app-wrapper">
                <Navbar/>
            </section>
        )
    }
});

export default App;
