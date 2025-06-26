"use strict";
/**
 * 6. You have a module that exports a Movie class. The class stores movie details (title, director, year).
 * Write a program that:
•	Imports the Movie class.
•	Uses a function fetchMovieDetails(id) that returns a Promise resolving after 2 seconds with a movie object.
•	Uses destructuring and spread/rest operators in the process.
•	Prints a formatted message about the movie using template literals.
•	Use let and const appropriately and arrow functions where possible.
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMovieDetails = exports.Movie = void 0;
//exporting movie class in smae file
var Movie = /** @class */ (function () {
    function Movie(title, director, year, id) {
        if (title === void 0) { title = ''; }
        if (director === void 0) { director = ''; }
        if (year === void 0) { year = 0; }
        if (id === void 0) { id = 0; }
        this.title = title;
        this.director = director;
        this.year = year;
        this.id = id;
    }
    Movie.prototype.setYear = function (year) {
        this.year = year;
    };
    Movie.prototype.getYear = function () {
        return this.year;
    };
    Movie.prototype.setID = function (id) {
        this.id = id;
    };
    Movie.prototype.getID = function () {
        return this.id;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.getTtile = function () {
        return this.title;
    };
    return Movie;
}());
exports.Movie = Movie;
;
// Importing the Movie class
var _6_1 = require("./6");
//creating movie
var movies = [];
//add movie to array
movies.push(new _6_1.Movie("Inception", "Christopher Nolan", 2010, 1));
movies.push(new _6_1.Movie("The Dark Knight", "Christopher Nolan", 2008, 2));
movies.push(new _6_1.Movie("Pulp Fiction", "Quentin Tarantino", 1994, 3));
movies.push(new _6_1.Movie("The Shawshank Redemption", "Frank Darabont", 1994, 4));
//Fetch movie details by ID with Promise
var fetchMovieDetails = function (id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            for (var i = 0; i < movies.length; i++) {
                if (movies[i].getID() === id) {
                    resolve(movies[i]);
                }
            }
            resolve(new _6_1.Movie()); // Return a default movie if not found
        }, 2000);
    });
};
exports.fetchMovieDetails = fetchMovieDetails;
// Calling the function with destructuring, spread/rest, template literals
(0, exports.fetchMovieDetails)(1).then(function (movie) {
    var title = movie.title, director = movie.director, year = movie.year, rest = __rest(movie, ["title", "director", "year"]); // using destructuring and rest operator
    console.log("Movie Details: Title: ".concat(title, " Director: ").concat(director, " Year: ").concat(year));
}).catch(function (error) {
    console.error("Error fetching movie details:", error);
});
