import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import Movies from '../components/movie/movies.jsx';


const App = React.createClass({
    getInitialState() {
        return {
            movies: []
        };
    },
    
    //componentWillReceiveProps(newProps, oldProps) {
    //    this.setState(this.getInitialState(newProps));
    //},

    componentDidMount() {
        let request = new XMLHttpRequest();
        let _this = this;

        //request.open('GET', 'https://api.douban.com/v2/movie/top250', true);
        request.open('GET', '../top.json', true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                _this.setState({movies: JSON.parse(request.responseText).subjects});
            } else {
                // Set application state (Not paging, paging complete)
                // self.setState({paging: false, done: true});
            }
        };

        request.send();
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
