// action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';

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
