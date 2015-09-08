import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Movies from '../components/movie/movies.jsx';


const App = React.createClass({
    showNav() {
        alert(9);
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
                <Navbar onShowNav={this.showNav} />
                <Movies movies={this.state.movies}/>
            </section>
        )
    }
});

export default App;
