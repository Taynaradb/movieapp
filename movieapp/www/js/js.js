search = document.getElementById("search");


search.addEventListener("click", (e) => {
  searchvalue = document.getElementById("searchval").value;
  fetch(`https://api.themoviedb.org/3/search/company?api_key=03915128fff1f759c3346cf6ecdb5695&query=${searchvalue}&page=1`)
    .then(response => response.json())
    .then(data => {

      location.href=`search.html?${searchvalue}`;

      const url = window.location.href
      const strs = url.split('?');
      const id = strs.at(-1)

      document.querySelector(".pesquisou").innerHTML = `<h2>Você procuro por ${id}</h2>`;
    });

});

window.addEventListener("load", (e) => {
  
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=03915128fff1f759c3346cf6ecdb5695`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results);

    let filmes = data.results
    filmes.slice(0,25).forEach(e => {
      console.log(e);
      document.querySelector(".typesmoviesul").innerHTML += `<a href="movie.html?movie_id=${e.id}""><li class="typesmoviesli"><img src="https://image.tmdb.org/t/p/original/${e.poster_path}" class="d-block w-100" alt="..."></li></a>`;
    });
    
  });

});
