window.addEventListener("load", (e) => {

    const url = window.location.href
    const strs = url.split('=');
    const id = strs.at(-1)
    console.log(id)
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03915128fff1f759c3346cf6ecdb5695`)
    .then(response => response.json())
    .then(data => {

     console.log(data);

      const title = data.original_title;  
      const movieimg = data.backdrop_path;  
      const desc = data.overview;  
      
      document.querySelector('.movietitle').innerHTML = `<h2>${title}</h2>`; 
      document.querySelector('.carousel-item').innerHTML = ` <img src="https://image.tmdb.org/t/p/original/${movieimg}" class="d-block w-100" alt="...">`; 
      document.querySelector('.moviedesc').innerHTML = ` <p>${desc}</p>`; 

    });
  
  });
  