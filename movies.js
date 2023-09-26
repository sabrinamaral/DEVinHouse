// 00 define array
//                get from local storage or it will be an empty array
const moviesArray = JSON.parse(localStorage.getItem("movies")) || [];

const movieForm = document.querySelector("#movieForm");

// 01 funtion to show form
function showAddMoviesModal() {
  movieForm.style = "display: flex";
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
  // 03 check if the form is empty
  if (
    movie.movieTitle === "" ||
    movie.description === "" ||
    movie.actors === "" ||
    movie.image === ""
  ) {
    // 03.1 show message in case of empty fields
    alertMessage.innerHTML = "Please fill in all fields!";
    alertMessage.style = "display: block; color: red";
  } else {
    // 04 add info in the array and then to local storage
    moviesArray.push(movie);
    localStorage.setItem("movies", JSON.stringify(moviesArray));
    // call the function to show movies
    showMovies(true);
    // 05 show success message
    alertMessage.innerHTML = "Movie added successfully!";
    alertMessage.style = "display: block; color: green";
    // 06 remove message
    setTimeout(() => {
      alertMessage.innerHTML = "";
      movieForm.style = "display: none";
      // 06.1 and reset the form
      movieForm.reset();
    }, 2000);
  }
});
// 07 Create functions to populate array with movies
function showMovies(clearMovies = false) {
  // 08 define movie content to manipulate DOM
  const movieContent = document.querySelector(".content");

  // 12 clear div content when a new movie is add

  if (clearMovies) {
    movieContent.innerHTML = " ";
  }

  // 09 check if there is an array and if it is more than zero
  if (moviesArray.length > 0) {
    // 11 use loop forEach to print movies
    moviesArray.forEach((movie) => {
      movieContent.innerHTML =
        movieContent.innerHTML +
        `<div class="movie-card">
            <div class="movie-details">Title: ${movie.movieTitle} </br>
            Description: ${movie.description} </br>
            Cast: ${movie.actors} </br>
            </div>
            <img src="${movie.image}" alt="film cover" ${movie.movieTitle}">
            </div>`;
    });
  } else {
    movieContent.innerHTML = "You didn't add any movies!";
  }
}

// 10 call the function when load the page
window.onload = function () {
  showMovies();
};
