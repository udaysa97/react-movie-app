import React from 'react';
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {data} from '../data';

class App extends React.Component {
  componentDidMount(){
    this.props.store.dispatch({
      type:'ADD_MOVIES',
      movies: data
    });
    console.log('STATE',this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">
              Movie
         </div>
            <div className="tab">
              Favourite
         </div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
