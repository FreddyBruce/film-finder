import React, { useCallback, useState } from "react";

function FilmSearch({ onSearch, genres }) { // Add genres as props
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
            {genres.map(genre => ( // Map over genres to create an option for each one
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
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
