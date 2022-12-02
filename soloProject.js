/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

let test = "Passed"

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
let sum = (11+12+13+14+15+16+17+18+19)

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

let random = Math.random()*21
let random2 = Math.floor((Math.random() * 21));
console.log(random);
console.log(random2);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

let me = {
    name : "Sam" ,
    surname : "Ng" ,
    age : 26 ,
} 
console.log(me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
delete me.age

console.log(me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

me.skills = ["HTML","CSS","GIT"]

console.log(me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/
me.skills.pop()

console.log(me);