import React from 'react';
import { handleMovieSearch, addMovieToList } from '../actions';
import '../index.css';

class NavBar extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            searchText: ''
        }
    }

    handleAddMovie = (movie) => {
        this.props.dispatch(addMovieToList(movie));
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    };

    render () {
        const { search } = this.props;
        const { result } = search;
        console.log(result);
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {search.showSearchResult && 
                        <div className="search-movie-card">
                            <div className="search-movie-left">
                                <img src={result.Poster} alt='Movie Poster'/>
                            </div>
                            <div className="search-movie-right">
                                <div className="title">{result.Title}</div>
                                <button id="add-movies-btn" onClick={() => this.handleAddMovie(result)}>Add Movies</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default NavBar;