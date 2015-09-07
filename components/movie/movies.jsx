import './movies.less';
import React from 'react';
import Movie from './movie.jsx';

const Movies = React.createClass({
    render() {
        let content = this.props.movies.map((movie) => {
            return (
                <Movie movie={movie} />
            )
        });

        return (
            <ul className="movies">{content}</ul>
        )
    }
});

export default Movies;
