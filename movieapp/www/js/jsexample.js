search = document.getElementById("search");


search.addEventListener("click", (e) => {
  searchvalue = document.getElementById("searchval").value;
  fetch(`https://api.themoviedb.org/3/search/company?api_key=03915128fff1f759c3346cf6ecdb5695&query=${searchvalue}&page=1`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

});

window.addEventListener("load", (e) => {
  
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=03915128fff1f759c3346cf6ecdb5695`)
    .then(response => response.json())
    .then(data => {
      const list = data.genres;
        list.map((item) => {
        const name = item.name;
        const movie = `<a><li id="${name}">${name}</li></a>`;

        document.querySelector(".typestitles ul").innerHTML += movie;
    });
    });




});
