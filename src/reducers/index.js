import {ADD_MOVIES,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES} from '../actions/index';

const initialMovieState = {
    list:[],
    favourites:[]
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
        default:
            return state;
    }

    return state;
}