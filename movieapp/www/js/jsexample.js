const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bcc0e0fcf0msh2e40896a1c8ec16p1bf569jsna59b4907ea2d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

/*fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
	.then(response => response.json())
	.then(data => {
      const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;

        document.querySelector(".typesmovies").innerHTML += movie;
    });
    })
	.catch(err => console.error(err))*/

    fetch('https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=adventure&limit=3', options)
.then(response => response.json())
.then(data => {
const list = data.d;

list.map((item) => {
    const id = item.id;
    const movie = `<li><h2>${id}</h2></li>`;
console.log(movies;)
});

firstmovie = data[1];

var textArray = firstmovie.split('/')
if(textArray.length>2){
  tconst = textArray.slice(2).join('/').trim();
}
console.log(tconst);

fetch(`https://online-movie-database.p.rapidapi.com/title/get-details?tconst=${tconst}`, options)
	.then(response => response.json())
	.then(data => {
console.log(data);
console.log(data.id);
})
	.catch(err => console.error(err));
})
.catch(err => console.error(err));


/*const options = {
	method: 'GET',
	headers: {  tt9288046
		'X-RapidAPI-Key': 'bcc0e0fcf0msh2e40896a1c8ec16p1bf569jsna59b4907ea2d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

*/
