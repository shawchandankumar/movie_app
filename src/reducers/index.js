import { combineReducers } from 'redux';
import { ADD_TO_FAVOURITE,
        ADD_MOVIES,
        REMOVE_FROM_FAVOURITE,
        SHOW_FAVOURITES,
        ADD_MOVIE_TO_LIST,
        SHOW_MOVIE_SEARCH_RESULT
    } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies (state = initialMoviesState, action) {
    
    switch (action.type) {
        case ADD_MOVIES: 
            return {
                ...state,
                list: action.movies
            };
        
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.movie]
            };

        case REMOVE_FROM_FAVOURITE: 
            return {
                ...state,
                favourites: state.favourites.filter((movie) => movie !== action.movie)
            };

        case SHOW_FAVOURITES: 
            return {
                ...state,
                showFavourites: action.val
            };

        case ADD_MOVIE_TO_LIST: 
            return {
                ...state,
                list: [action.movie, ...state.list]
            }

        default:
            return state;
    }
}


const initialSearchState = {
    result: {},
    showSearchResult: false
};

export function search (state = initialSearchState, action) {
    switch (action.type) {
        case SHOW_MOVIE_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResult: true
            }

        case ADD_MOVIE_TO_LIST: 
            return {
                ...state,
                showSearchResult: false
            }

        default:
            return state;
    }
}

const initialState = {
    movies: initialMoviesState,
    search: initialSearchState
};

// export default function rootReducer (state = initialState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     };
// }

export default combineReducers({
    movies,
    search
});