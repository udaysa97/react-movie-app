import React from 'react';
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {data} from '../data';
import {addMovies, setShowFavourite} from '../actions/index'

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('updated');
     this.forceUpdate(); // should not use . Doing it now as serves purpose
    })
    store.dispatch(addMovies(data));
    //console.log('store',store);
    console.log('STATE',this.props.store.getState());
  }

  isMovieFavourite = (movie)=>{
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourite(val));
  }
  render() {
    const {list,favourites,showFavourite} = this.props.store.getState();
    console.log(showFavourite);
    const displayMovies = showFavourite?favourites:list;
    console.log(this.props.store.getState());
    console.log('RENDER');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite ? "":'active-tabs'}`} onClick = {()=>{
              this.onChangeTab(false)
            }}>
              Movie
         </div>
            <div className={`tab ${showFavourite ?'active-tabs' : ""}`} onClick = {()=>{
              this.onChangeTab(true);
            }}>
              Favourite
         </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} dispatch = {this.props.store.dispatch} isFavourite = {this.isMovieFavourite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0? <div className = 'no-movies'> NO MOVIES TO DISPLAY </div>:null}
        </div>
      </div>
    );
  }
}

export default App;
