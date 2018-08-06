/**
 * andres.amaya.diaz@gmail.com
 * TEC Bootcamp Team Builder
 * Project #2
 */


// Students array
let students  = ["Abelardo V.", "Adolfo C.", "Alejandro G.", "Antonio G.", 
    "Carlos M.", "Sergio T.", "Diana P.", "Edgar S.", "Elias J.", "Elizabeth J.", 
    "Gabriela M.", "Gustavo C.", "Hugo V.", "Israel M.", "Javier A.", "Javier L.", 
    "Jorge D.", "Juventino A.", "Laura B.", "Mario R.", "Patricio M.", "Raquel M.", 
    "Rodolfo R.", "Samuel M.", "Ulises S.", "Verónica V.", "William B."];


// How many array shuffles
let shuffles = 7;

// Students shuffled array
let students_shuffle;

// Students teams array
let students_teams;

// Just to be 100% sure we are all included
console.log("Students Count: " + students.length);

// Shuffle the students array
for(i=1; i<= shuffles; i++)
{
    students_shuffle = shuffle(students);
    console.log("TEST #"+i+" RESULT: ");
    console.log(students_shuffle);
}
console.log("---------------------------------------");
console.log("FINAL SHUFFLE ARRAY");
console.log("---------------------------------------");
console.log(students_shuffle);
console.log("---------------------------------------");

// Divide into teams of same size
const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
students_teams = array_chunks(students_shuffle, 4);

console.log("---------------------------------------");
console.log("FINAL TEAMS");
console.log("---------------------------------------");
console.log(students_teams);
console.log("---------------------------------------");

// Function to shuffle the students array 
function shuffle(array) 
{
    let counter = array.length;
 
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
 
        // Decrease counter by 1
        counter--;
 
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
 
    return array;
}