import React, { useState, useCallback, useEffect } from "react";
import Movie from '../Movie/Movie';
import FilmSearch from '../FilmSearch/FilmSearch';
import MovieDB from "../../util/MovieDB";
import './App.css';

function App() {
  const [movieSearch, setMovieSearch] = useState();
  const [genres, setGenres] = useState([]); // New state variable for genres

  const search = useCallback((genre) => {
    MovieDB.getMovies(genre).then(setMovieSearch);
  }, []);

  useEffect(() => {
    // Call getGenres when the component is mounted
    MovieDB.getGenres().then(setGenres);
  }, []);


  return (
    <div className="App">
      <h1>What film should I watch</h1>
      <FilmSearch onSearch={search} genres={genres}></FilmSearch> {/* Pass genres as props */}
      <Movie movie={movieSearch} />
    </div>
  );
}

export default App;
