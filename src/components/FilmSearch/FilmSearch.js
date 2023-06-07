import React, { useCallback } from "react";

function FilmSearch({ onSearch }) {
  const search = useCallback(() => {
    onSearch();
  }, [onSearch]);

  return (
    <div>
      <button onClick={search}>FIND A FILM</button>
    </div>
  );
}

export default FilmSearch;