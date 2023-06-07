const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzdhNzljMTUxZWZmMjk3YmZlMTk0Zjk1ZWU5ODg3NCIsInN1YiI6IjY0NzhjODU1MDc2Y2U4MDBhODIyMzgwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i81-iCr9sMNCoeYWH0RYlTQR-iS43aw5gzPOnrraa3E'
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