# Task 6


> In This Repository we Discuss about the Class movie and the Class Circle.

## Movie Class

The Movie class represents a film and has the following properties:

    title: A string representing the title of the movie.
    studio: A string representing the studio that made the movie.
    rating: A string representing the rating of the movie (default is "PG").

*** Constructor ***

The constructor for the Movie class takes three parameters: title, studio, and rating. If no rating is provided, the default value is set to "PG".
Static Method: getPG

The getPG method is a static method of the Movie class that takes an array of Movie instances as its argument and returns a new array containing only those movies from the input array that have a rating of "PG".