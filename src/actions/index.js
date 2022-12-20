// action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const SHOW_MOVIE_SEARCH_RESULT = 'SHOW_MOVIE_SEARCH_RESULT';

// action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFromFavourite (movie) {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function showFavourites (val) {
    return {
        type: SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList (movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch (movie) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                // console.log(dispatch);
                dispatch(showMovieSearchResult(movie));
            })
    }
}

export function showMovieSearchResult (movie) {
    return {
        type: SHOW_MOVIE_SEARCH_RESULT,
        movie
    };
}
