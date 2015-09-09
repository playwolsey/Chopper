import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Navtree from '../components/navtree/navtree.jsx';
import Movies from '../components/movie/movies.jsx';
import './app.less';


const App = React.createClass({
    showNav() {
        let main = React.findDOMNode(this.refs.main_wrapper);
        let tree = React.findDOMNode(this.refs.navtree);

        main.classList.toggle('slide-right');
        tree.classList.toggle('hidden');
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
            <section className="app-wrapper">
                <Navtree ref="navtree" />
                <section className="main-wrapper" ref="main_wrapper" >
                    <Navbar onShowNav={this.showNav} />
                    <Movies movies={this.state.movies} />
                </section>
            </section>
        )
    }
});

export default App;
