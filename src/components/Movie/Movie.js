import React from "react";

function Movie(props) {
  if (!props.movie) {
    return <div>No movie found, please click to search a movie</div>;
  }

  return (
    <div>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.overview}</p>
      <p>{props.movie.popularity}</p>
      <p>{props.movie.vote_average}</p>
    </div>
  );
}

export default Movie;