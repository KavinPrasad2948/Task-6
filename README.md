# Task 6


> In This Repository we Discuss about the Class movie and the Class Circle and Class Person that hold all data of the Person  .

## Movie Class

The `Movie` class represents a film and has the following properties:

- title: A string representing the title of the movie.
- studio: A string representing the studio that made the movie.
- rating: A string representing the rating of the movie (default is "PG").

### Constructor

The constructor for the Movie class takes three parameters: title, studio, and rating. If no rating is provided, the default value is set to "PG".
### Static Method: getPG

The getPG method is a static method of the Movie class that takes an array of Movie instances as its argument and returns a new array containing only those movies from the input array that have a rating of "PG".

---

## Circle Class

The `Circle` class represents a circle with properties for radius and colour. It includes methods to get and set the radius and colour, calculate the area and circumference of the circle, and provide a string representation of the circle.
### Constructor

The constructor for the Circle class takes two parameters: radius and colour. If no radius or colour is provided, the default values are 1.0 and "red", respectively.
### Methods

- `getRadius()`: Returns the radius of the circle.
- `setRadius(radius)`: Sets the radius of the circle.
- `getColour()`: Returns the colour of the circle.    
- `setColour(colour)`: Sets the colour of the circle.
- `toString()`: Returns a string representation of the circle, including its radius and colour.
- `getArea()`: Calculates and returns the area of the circle using the formula πr^2, where r is the radius.
- `getCircumference()`: Calculates and returns the circumference of the circle using the formula 2πr, where r is the radius.
---

## Person Class

The `Person` class represents a person with properties for their name, date of birth, gender, and hobbies.

### Constructor

- `FirstName`: The first name of the person.
- `LastName`: The last name of the person.
- `DateOfBirth`: The date of birth of the person.
- `gender`: The gender of the person.
- `Hobbies`: An array of hobbies of the person.

### Methods

- `getFullName()`: Returns the full name of the person.
- `getAge()`: Returns the age of the person based on the `DateOfBirth` property.
- `getBio()`: Returns a string that includes the full name, age, gender, and hobbies .
  
---
## UberPrice Class

The `UberPrice` class represents the pricing for an Uber ride based on distance, duration, and other factors.

### Constructor

- `distance`: The distance of the ride in kilometers.
- `duration`: The duration of the ride in minutes.
- `baseFare`: The base fare for the ride (default: 3.00).
- `costPerKm`: The cost per kilometer (default: 5.10).
- `costPerMinute`: The cost per minute (default: 0.30).
- `bookingFee`: The booking fee (default: 3.00).

### Methods

- `getDistancePrice()`: Returns the price based on the distance and the cost per kilometer.
- `getDurationPrice()`: Returns the price based on the duration and the cost per minute.
- `getPrice()`: Returns the total price based on the distance, duration, and other factors.

---

[^1]: THANK YOU