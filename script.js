class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG-13");
  }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);

const movies = [
  new Movie("Casino Royale", "Eon Productions", "PG-13"),
  new Movie("John wick", "87Eleven productions", "R"),
  new Movie("The Godfather", "Paramount Pictures", "R"),
  new Movie("Aayirathil Oruvan", "Dream Valley Corporation", "R"),
  new Movie("Leo", "Seven Screen Studio", "PG-13")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
