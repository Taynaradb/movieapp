window.addEventListener("load", (e) => {

    const url = window.location.href
    const strs = url.split('?');
    const searchvalue = strs.at(-1)
    console.log(searchvalue);

    fetch(`https://api.themoviedb.org/3/search/company?api_key=03915128fff1f759c3346cf6ecdb5695&query=${searchvalue}&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        document.querySelector('.typesmoviesheader').innerHTML = `<h3 class="pesquisou">Você pesquisou por <span>${searchvalue}</span></h3>`;
        
        let filmes = data.results
        filmes.slice(0,25).forEach(e => {
            console.log(e);
            document.querySelector(".searchmoviesul").innerHTML += `<li><a href="movie.html?movie_id=${e.id}"">${e.name}</a></li>`;
         });
      
      });
  
  });