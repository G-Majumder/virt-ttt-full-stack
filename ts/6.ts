/**
 * 6. You have a module that exports a Movie class. The class stores movie details (title, director, year).
 * Write a program that:
•	Imports the Movie class.
•	Uses a function fetchMovieDetails(id) that returns a Promise resolving after 2 seconds with a movie object.
•	Uses destructuring and spread/rest operators in the process.
•	Prints a formatted message about the movie using template literals.
•	Use let and const appropriately and arrow functions where possible.
 */

//exporting movie class in smae file
export class Movie{
    title: string;
    director: string;
    year: number;
    id: number;

    constructor(title: string = '', director: string = '', year: number = 0, id: number = 0){
        this.title = title;
        this.director = director;
        this.year = year;
        this.id = id;
    }
    public setYear(year:number){
        this.year = year;
    }
    public getYear():number{
        return this.year;
    }
    public setID(id:number){
        this.id = id;
    }
    public getID():number{
        return this.id;
    }
    public setDirector(director:string){
        this.director = director;
    }
    public getDirector():string{
        return this.director;
    }
    public setTitle(title:string):void{
        this.title = title;
    }
    public getTtile():string{
        return this.title;
    }
};

// Importing the Movie class
import { Movie as myMovie} from './6';

//creating movie
const movies : myMovie[] = [];
//add movie to array
movies.push(new myMovie("Inception", "Christopher Nolan", 2010, 1));
movies.push(new myMovie("The Dark Knight", "Christopher Nolan", 2008, 2));
movies.push(new myMovie("Pulp Fiction", "Quentin Tarantino", 1994, 3));
movies.push(new myMovie("The Shawshank Redemption", "Frank Darabont", 1994, 4));

//Fetch movie details by ID with Promise
export const fetchMovieDetails = (id: number): Promise<myMovie> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            for(let i = 0; i < movies.length; i++) {
                if(movies[i].getID() === id) {
                    resolve (movies[i]);
                }  
            }
            resolve(new myMovie()); // Return a default movie if not found
        }, 2000);
    });
};

// Calling the function with destructuring, spread/rest, template literals
fetchMovieDetails(1).then(movie => {
    const { title, director, year, ...rest } = movie;  // using destructuring and rest operator
    console.log(`Movie Details: Title: ${title} Director: ${director} Year: ${year}`);
}).catch(error => {
    console.error("Error fetching movie details:", error);
});
