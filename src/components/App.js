import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { MoviesData } from '../data';
import { addMovies } from '../actions';
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
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);
    // console.log(favourites);

    if (index !== -1) {
        return true;
    }
    return false;
  }

  render () {
    const { list } = this.props.store.getState();

    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => 
            <MovieCard
             key={index} 
             movie={movie} 
             dispatch={this.props.store.dispatch} 
             isFavourite={this.isMovieFavourite(movie)} 
            />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
