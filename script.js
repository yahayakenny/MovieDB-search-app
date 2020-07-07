const movieSearch = document.getElementById('movie-search');
const search = document.getElementById('search');
const movies = document.getElementById('movies');

const searchMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c311d17e1e71da6473847ad868655d55&query=${movieSearch.value}`
  );
  const data = await response.json();
  if (movieSearch.value == ""){
      alert( "Please enter a valid movie search ")
  }

  else {
    let displayMovies = data.results.map((item) => {
        return `
    <div class="card" style="width: 28rem;">
      <img src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}" width="300px" height = "350px" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${item.title}</h2>
        <h6 class="card-text">${item.overview}</h6>
        <h4 class="card-text"> ${item.release_date}</h4>
      </div>
    </div>   
        `;
      });
      displayMovies = displayMovies.join('');
      movies.innerHTML = displayMovies;
  }
  
};

search.addEventListener('click', searchMovie);
