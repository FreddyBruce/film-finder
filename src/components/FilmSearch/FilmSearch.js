import React, { useCallback } from "react";

function FilmSearch(props) {
  const search = useCallback(() => {
    props.onSearch();
  }, [props.onSearch]);

  return (
    <div>
      <button onClick={search}>FIND A FILM</button>
    </div>
  );
}

export default FilmSearch;