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
    
    componentWillReceiveProps(newProps, oldProps) {
        this.setState(this.getInitialState(newProps));
    },

    //componentWillMount() {
    //    this.setState(this.getInitialState({movies:{b:1}}));
    //},

    componentDidMount() {
        let request = new XMLHttpRequest();
        let _this = this;

        request.open('GET', 'page/' + page + "/" + this.state.skip, true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400){
                // Load our next page
                //self.loadPagedTweets(JSON.parse(request.responseText));
            } else {
                // Set application state (Not paging, paging complete)
                //self.setState({paging: false, done: true});
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
