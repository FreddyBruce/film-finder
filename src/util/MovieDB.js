const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_API_KEY}`
  }
};

const MovieDB = {
  getMovies() {
      const totalPages = 500;
      const randomPage = Math.floor(Math.random() * totalPages) + 1;
      
      return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomPage}&sort_by=popularity.desc`, options)
      .then(response => response.json())
      .then(data => {
        const resultsPerPage = data.results.length;
        const randomIndex = Math.floor(Math.random() * resultsPerPage);
        const randomMovie = data.results[randomIndex];
        
        console.log(randomMovie);
        return randomMovie;
      })
      .catch(err => console.error(err));
  }
};

export default MovieDB;