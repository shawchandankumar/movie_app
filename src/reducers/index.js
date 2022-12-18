import { ADD_TO_FAVOURITE, ADD_MOVIES, REMOVE_FROM_FAVOURITE } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies (state = initialMoviesState, action) {
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

        default:
            return state;
    }
}