import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { MoviesData } from '../data';
import { addMovies, showFavourites } from '../actions';
import '../index.css';

class App extends React.Component {
  
  componentDidMount () {
    const { store } = this.props;
    
    store.subscribe(() => {
      this.forceUpdate();
    })

    store.dispatch(addMovies(MoviesData));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    // console.log(favourites);

    if (index !== -1) {
        return true;
    }
    return false;
  }

  changeTab = (val) => {
    this.props.store.dispatch(showFavourites(val));
  }

  render () {
    console.log(this.props.store.getState())
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <NavBar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)} >Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.changeTab(true)} >Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => 
            <MovieCard
              key={index} 
              movie={movie} 
              dispatch={this.props.store.dispatch} 
              isFavourite={this.isMovieFavourite(movie)} 
            />
            )}
          </div>
          {displayMovies.length === 0 && <div className='no-movies'>No movies to display!</div>}
        </div>
      </div>
    );
  }
}

export default App;
