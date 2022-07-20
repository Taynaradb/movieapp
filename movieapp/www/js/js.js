const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bcc0e0fcf0msh2e40896a1c8ec16p1bf569jsna59b4907ea2d',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};


fetch('https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=adventure&limit=5', options)
	.then(response => response.json())
	.then(data => {
        console.log(data[6])
      const list = data;
    list.map((item) => {

var textArray = item.split('/')
if(textArray.length>2){
  tconst = textArray.slice(2).join('/').trim();
}
        fetch(`https://online-movie-database.p.rapidapi.com/title/get-details?tconst=${tconst}`, options)
        .then(response => response.json())
        .then(data =>{
            const moviegenreimg = data.image.url
            const movie = `<li class="typesmoviesli"><img src="${moviegenreimg}"></li>`;

        document.querySelector(".typesmoviesul").innerHTML += movie;
        })
    .catch(err => console.error(err))

    });
    })
	.catch(err => console.error(err))