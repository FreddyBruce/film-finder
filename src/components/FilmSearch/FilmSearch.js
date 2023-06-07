import React, { useCallback, useState } from "react";

function FilmSearch({ onSearch }) {
  const [value, setValue] = useState('action');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const search = useCallback(() => {
    onSearch(value); // Pass the selected genre to the onSearch callback
  }, [onSearch, value]); // Add value to the dependencies array

  return (
    <>
      <div>
        <label>
          Pick your favorite genre:
          <select value={value} onChange={handleChange}>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={search}>FIND A FILM</button>
      </div>
    </>
  );
}

export default FilmSearch;