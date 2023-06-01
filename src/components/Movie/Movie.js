import React from "react";

function Movie(props) {
    return (
      <div>
        <h2>{props.film.name}</h2>
        <p>{props.film.description}</p>
      </div>
    );
  }
  
  export default Movie;