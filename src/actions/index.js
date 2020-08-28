export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";

export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourites(movie){
    return {
        type:ADD_TO_FAVOURITES,
        movie
    }
}
export function removeFavourites(movie){
    return {
        type:REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourite(val){
    return {
        type:SET_SHOW_FAVOURITE,
        val
    }
}

