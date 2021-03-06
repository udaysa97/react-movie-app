import {ADD_MOVIES,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITE} from '../actions/index';

const initialMovieState = {
    list:[],
    favourites:[],
    showFavourite:false
}

export default function movies(state = initialMovieState , action){
    switch (action.type){
        case ADD_MOVIES:
            return {...state,list:action.movies}
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(movies=>{
                return movies.Title !== action.movie.Title
            });

            return{...state,favourites:filteredArray}
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourite:action.val
            }
        default:
            return state;
    }

    return state;
}