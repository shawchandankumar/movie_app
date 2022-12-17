import React from 'react';
import '../index.css';

class MovieCard extends React.Component {

    render () {
        const { movie } = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.poster} alt='Movie Poster'/>
                </div>
                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot">{movie.plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <button className="favourite-btn">Favourite</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;