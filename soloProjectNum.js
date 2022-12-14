// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice(x){

    x = Math.floor((Math.random() * 7) + 1);

    return x
}

console.log(dice(2))

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

function whoIsBigger(x,y) {
    
    return Math.max(x,y)
}

console.log(whoIsBigger(3,100));

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

function splitMe(string) {
    let myArray = string.split(" ")
    return myArray
}

console.log(splitMe("I Don't Know What Am I Doing"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
function deleteOne(str, boolean) {
    if (boolean) {
        let deleteFirstLetter = str.slice(1);
        return deleteFirstLetter
    } else{
        let deleteLastLetter = str.slice(0,- 1);
        return deleteLastLetter
    }
}
console.log(deleteOne("Hahaha", false));
console.log(deleteOne("Hahaha", true));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
function onlyLetters(str) {
    let noNumber = str.replace(/[0-9]/gi,"");
    return noNumber
}
console.log(onlyLetters("I have 8 dogs 30."));

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
function isThisAnEmail(str) {

    if (str.endsWith("@hotmail.com"||"@gmail.com"||"@outlook.com"||"@yahoo.com")) {
        return "valid email"
    } else {
        return "please insert a valid email"
    }
}

console.log(isThisAnEmail("123@hotmail.com"));

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
function whatDayIsIt() {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return days [new Date().getDay()]
}
console.log("Today is:" + whatDayIsIt());

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
function rollTheDices(num) {
    let arr = [];
    let obj = { sum: 0,};

    for (let i = 0; i < num; i++) {
        arr[i] = dice();
        obj.sum += arr[i];
    }
    console.log(`The Random numbers are: ${arr}`);
    console.log(`And the sum of them is: ${obj.sum}`);
}
console.log(rollTheDices(10));

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

function howManyDays(date) {

    let current = new Date(date.getTime());
    let previous = new Date(date.getFullYear(), 0, 1); 
    
    return Math.ceil((current - previous + 1) / 86400000);
  }
  
  console.log("Days Differences:" +
  howManyDays(new Date(2022, 12, 12)));

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today???s your birthday, false otherwise.

*/
function isTodayMyBirthdy() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    let birthdayCheck = month === 12 && day === 4 ? true : false;

    if (birthdayCheck) {
        console.log("Happy Birthday!????")
    } else{
        console.log("Counting down");
    }
}

isTodayMyBirthdy()

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
let me = {
    name : "Sam",
    lastname : "Ng",
    age :33,
}


function deleteProp(object,str) {
    let removingProperty = delete object[str]

    return object
}

console.log(deleteProp(me,"age"));

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
function oldestMovie() {
    let oldest = movies[0];
    let releaseDate = parseInt(oldest.Year);

    for (let i = 1; i < movies.length; i++) {
        if( parseInt(movies[i].Year)< releaseDate){
            oldest = movies[i];
            releaseDate = parseInt(movies[i].Year);
        }
        
    }
    return oldest;
}

console.log(oldestMovie());
/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/
function countMovie() {
    let length = movies.length;
    return length
}
console.log(countMovie());

//or

function countMovie() {
    let count=0 ;
    for (i = 0; i < movies.length; i++) {
        count ++ ;
    }
    return count;
}
console.log(countMovie());

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
function onlyTitles() {
    let titles = []
    for (let i = 0; i < movies.length; i++) {
        titles.push(movies[i].Title)
        
    }
    return titles;
}

console.log(onlyTitles());
/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

function onlyInThisMillennium() {
    let only2000 = [];

    for (let i = 0; i < movies.length; i++) {
        
        if (2000 <= movies[i].Year) {
            only2000.push(movies[i])
        }
        
    }
    return only2000;
}

console.log(onlyInThisMillennium());

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
function getMovieById(id) {

    for (let i = 0; i < movies.length; i++) {
        if (id === movies[i].imdbID);
        
        return movies[i]
    }
}

console.log(getMovieById("tt0120737"))

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/
function sumAllTheYears() {
    let years = []
    let sum = 0;
    for (i = 0; i < movies.length; i++) {
        years.push(movies[i].Year);
        
    }
    for (j = 0; j < years.length; j++) {
        parsed = parseInt(years[j])
        
        sum += parsed
    }

    return sum
}

console.log(sumAllTheYears());

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/
function searchByTitle(string) {
    
    for (let i = 0; i < movies.length; i++) {
        if (string === movies[i].Title)

        return movies[i]
        
    }
}

console.log(searchByTitle("Avengers: Endgame"));

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/
function searchAndDivide(string) {
    let match = [];
    let unmatch = [];
 

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Title.includes(string))
        {
           match.push(movies[i]);
            }
            
       else {
                unmatch.push (movies[i])
            }
        }
       
   console.log("Matched Results: ", match)
   console.log("Unmatched Results: ", unmatch)
}
   
searchAndDivide("Avengers")

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

function removeIndex(number) {
    return movies[number]
}

console.log(removeIndex(13));

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/
function halfTree(num) {

    let heightOfTree = "";
    for (i = 0; i <= num; i++) {

      for (j = 0; j <= i; j++) {
        heightOfTree = heightOfTree + "*";
      }
      heightOfTree = heightOfTree + "\n";
    }
    return heightOfTree;
  }

console.log(halfTree(8), "\n");


/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

function tree (number)
{
    let heightOfTree = "";
    for (i = 0; i< number; i++)
    {
        for(j=0; j<number - i - 1; j++)
        {
            heightOfTree += " ";
        }
        for (let k=0; k<2*i-1;k++)
        {
            heightOfTree += "*";
        }
        heightOfTree += "\n";
    }
    console.log(heightOfTree);
}

tree(10)

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/
function test_prime(num)
{

  if (num === 1)
  {
    return false;
  }
  else if(num === 2)
  {
    return true;
  }else
  {
    for(let i = 2; i < num ; i++)
    {
      if(num % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(100));
console.log(test_prime(41));

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today???s Eduflow.

*/

/* This movies array is used throughout the exercises. You???re not supposed to alter it. */

const movies= [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ]