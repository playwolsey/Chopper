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
import Movies from '../components/movie/movies.jsx';


const App = React.createClass({
    getInitialState(props) {
        props = props || this.props;

        return {
            movies: props.movies
        };
    },
    
    //componentWillReceiveProps(newProps, oldProps) {
    //    this.setState(this.getInitialState(newProps));
    //},

    componentDidMount() {
        //$.get(this.props.source, function(result) {
        //    var lastGist = result[0];
        //    if (this.isMounted()) {
        //        this.setState({
        //            username: lastGist.owner.login,
        //            lastGistUrl: lastGist.html_url
        //        });
        //    }
        //}.bind(this));
        this.setState({
            movies: {
                a:1,
                b:2
            }
        });
    },

    render() {
        return (
            <section className="app-wrapper">
                <Navbar />
                <Movies movies={this.state.movies}/>
            </section>
        )
    }
});

export default App;
