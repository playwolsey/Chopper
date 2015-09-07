import React from 'react';

const Movie = React.createClass({
    render() {
        let movie = this.props.movie;

        return (
            <li className="movie">
                <img src={movie.images.large} />
                <p>{movie.original_title}</p>
                <p>{movie.title}</p>
                <p>{movie.rating.average}</p>
            </li>
        )
    }
});

export default Movie;
