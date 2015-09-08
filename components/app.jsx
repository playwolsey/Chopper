import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Navtree from '../components/navtree/navtree.jsx';
import Movies from '../components/movie/movies.jsx';


const App = React.createClass({
    showNav() {
        var node = React.findDOMNode(this.refs.app_wrapper);
    },

    getInitialState() {
        return {
            movies: []
        };
    },
    
    componentDidMount() {
        let request = new XMLHttpRequest();
        let _this = this;

        //request.open('GET', 'https://api.douban.com/v2/movie/top250', true);
        request.open('GET', '../top.json', true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                _this.setState({movies: JSON.parse(request.responseText).subjects});
            } else {
                //_this.setState({});
            }
        };

        request.send();
    },

    render() {
        return (
            <section className="app-wrapper" ref="app_wrapper">
                <Navtree />
            </section>
        )
    }
});

export default App;
