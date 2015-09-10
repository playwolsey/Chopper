import React from 'react';

const Movie = React.createClass({
    render() {
        let movie = this.props.movie;
        let genres = movie.genres.map((g) => {
            return '' + g + ' ';
        }); 

        return (
            <li className="movie">
                <img src={movie.images.large} />
                <p className="o_title">{movie.original_title}</p>
                <p className="title">{movie.title}</p>
                <p className="average">{movie.rating.average}</p>
                <p className="genres">{genres}</p>
            </li>
        )
    }
});

export default Movie;
