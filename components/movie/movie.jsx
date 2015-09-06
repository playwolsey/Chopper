import React from 'react';

const Movie = React.createClass({
    render() {
        let movie = this.props.movie;

        return (
            <li className="movie">
                <p>test</p>
            </li>
        )
    }
});

export default Movie;
