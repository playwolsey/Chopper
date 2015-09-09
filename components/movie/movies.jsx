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
            <section className="movies-wrapper">
                <div className="banner-unit">
                    <article></article>
                    <div className="top-tips"><span>tips: 点击顶栏可返回顶部，向下拖拽顶栏可显示网址</span></div>
                </div>
                <ul className="movies">{content}</ul>
            </section>
        )
    }
});

export default Movies;
