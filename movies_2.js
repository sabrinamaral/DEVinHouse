// 00 define array
//                get from local storage or it will be an empty array
const arrayMovies = JSON.parse(localStorage.getItem("movies")) || [];

// 01 funtion to show form

const showForm = () => {
    const movieForm = document.querySelector("#movieForm");
    movieForm.style = "display: flex";
}

// 02 add event to fetch data from the form

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let movie = {};

    movie.movieTitle = document.querySelector("#movieTitle").value;
    movie.description = document.querySelector("#description").value;
    movie.actors = document.querySelector("#actosr").value;
    movie.image = document.querySelector("#image").value;

    const alertMessage = document.querySelector(".alert");

// 3 check if the form is empty 

if(movie.movieTitle === "" || movie.description === "" || movie.actors === "" || movie.image === "") {
    alertMessage.innerHTML = "Por favor, preencha os campos em branco."
    alertMessage.style = "display:block; color: red"
} else {
    arrayMovies.push(movie);
    localStorage.setItem()
}


});
