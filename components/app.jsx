import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Navtree from '../components/navtree/navtree.jsx';
import Movies from '../components/movie/movies.jsx';
import Mask from '../components/mask/mask.jsx';
import './app.less';


const App = React.createClass({
    showNav() {
        let main = React.findDOMNode(this.refs.main_wrapper);
        let tree = React.findDOMNode(this.refs.navtree);
        let mask = React.findDOMNode(this.refs.mask);

        main.classList.add('slide-right');
        mask.style.display = 'block';
        mask.style.opacity = '.25';

        tree.classList.remove('hidden');
    },

    hideNav() {
        let main = React.findDOMNode(this.refs.main_wrapper);
        let tree = React.findDOMNode(this.refs.navtree);
        let mask = React.findDOMNode(this.refs.mask);

        main.classList.remove('slide-right');

        mask.style.display = 'none';
        mask.style.opacity = '0';

        setTimeout(() => {
            tree.classList.add('hidden');
        }, 400);
    },

    getInitialState() {
        return {
            movies: [],
            height: document.documentElement.clientHeight
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
            }
        };

        request.send();
    },

    render() {
        return (
            <section className="app-wrapper">
                <Navtree ref="navtree" height={this.state.height} />
                <section className="main-wrapper" ref="main_wrapper">
                    <Navbar onShowNav={this.showNav} />
                    <Movies movies={this.state.movies} height={this.state.height} />
                    <Mask ref="mask" onHideNav={this.hideNav}/>
                </section>
            </section>
        )
    }
});

export default App;
