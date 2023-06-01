import React from 'react';
import Movie from '../Movie/Movie';
import FilmSearch from '../FilmSearch/FilmSearch';
import './App.css';

const film = {
  name: "Lord of the Rings",
  description: "This is a description of the film plot"
};

function App() {
  return (
    <div className="App">
      <h1>What film should I watch</h1>
      <FilmSearch></FilmSearch>
      <Movie film={film} />
    </div>
  );
}

export default App;
