import React from 'react';
import { addToFavourite, removeFromFavourite } from '../actions';
import '../index.css';

class MovieCard extends React.Component {

    handleAddFavourite = () => {
        const { movie, dispatch } = this.props;
        dispatch(addToFavourite(movie));
    }

    handleUnfavourite = () => {
        const { movie, dispatch } = this.props;
        dispatch(removeFromFavourite(movie));
    }

    render () {
        const { movie, isFavourite } = this.props;

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
                        {
                            isFavourite ? 
                            <button className="Unfavourite-btn" onClick={this.handleUnfavourite} >Unfavourite</button> :
                            <button className="favourite-btn" onClick={this.handleAddFavourite} >Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;