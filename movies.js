// 00 define array
//                get from local storage or it will be an empty array
const moviesArray = JSON.parse(localStorage.getItem("movies")) || [];

const movieForm = document.querySelector("#movieForm");

// 01 funtion to show form
function showAddMoviesModal () {
    
    movieForm.style = "display: flex";
}

// 07 Create functions to populate array with movies
function showMovies(clearMovies = false) {
//08 define movie content to manipulate DOM
    const movieContent = document.querySelector(".content");

// 12 clear div content when a new movie is add

if(clearMovies) {
    movieContent.innerHTML = " ";
}

// 09 check if there is an array and if it is more than zero
    if(moviesArray.length > 0) {
// 10 here we are going to map the movies
// 11 use loop forEach to print movies
        moviesArray.forEach((movie) => {
            movieContent.innerHTML = movieContent.innerHTML + `<div class="movie-card">
            <div class="movie-details">Título: ${movie.movieTitle} </br> 
            Descrição: ${movie.description} </br> 
            Estrelando: ${movie.actors} </br>
            </div>
            <img src="${movie.image}" alt="Imagem da capa do filme ${movie.movieTitle}">
            </div>`;
        });
    } else {
        movieContent.innerHTML = "Sem filmes disponíveis";
    }
}

// 02 add event to fetch data from the form
movieForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let movie = {};
    movie.movieTitle = document.querySelector("#movieTitle").value;
    movie.description = document.querySelector("#description").value;
    movie.actors = document.querySelector("#actors").value;
    movie.image = document.querySelector("#image").value;

    const alertMessage = document.querySelector(".alert");

// 3 check if the form is empty 
    if (movie.movieTitle === "" || movie.description === "" || movie.actors === "" || movie.image === "") {

// 3.1 show message in case of empty fields        
        alertMessage.innerHTML = "Por favor, preencha todos os dados."
        alertMessage.style = "display: block; color: red"
    } else {
// 4 add info in the array and then to local storage 
        moviesArray.push(movie);
        localStorage.setItem("movies", JSON.stringify(moviesArray))
// call the function to show movies
        showMovies(true);
// 5 show success message
        alertMessage.innerHTML = "Filme adicionado com sucesso!";
        alertMessage.style = "display: block; color: green";
// 6.0 remove message 
    setTimeout(()=>{
        alertMessage.innerHTML = "";
        movieForm.style = "display: none";
//6.1 and reset the form
        movieForm.reset();
    }, 2000)
    }
    
    
});

// 10 call the function when load the page
window.onload = function () {
    showMovies();
}

