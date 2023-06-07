import React, { useState, useCallback } from "react";
import Movie from '../Movie/Movie';
import FilmSearch from '../FilmSearch/FilmSearch';
import MovieDB from "../../util/MovieDB";
import './App.css';

function App() {
  const [movieSearch, setMovieSearch] = useState();

  const search = useCallback((genre) => {
    MovieDB.getMovies(genre).then(setMovieSearch);
  }, []);


  return (
    <div className="App">
      <h1>What film should I watch</h1>
      <FilmSearch onSearch={search}></FilmSearch>
      <Movie movie={movieSearch} />
    </div>
  );
}

export default App;
