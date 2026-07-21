const { start } = require("node:repl");

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

//console.log(fruits[0]); // Output: apple

//PART 1 Create

let empty = [];

let marks  = [50,60,75,85,90];

let cities = ["Chennai", "Mumbai","Delhi"];

let mixed = ["Ashok", 25, true, null, undefined];

let nums = new Array(1,2,3,4,5);

// console.log(empty);
// console.log(marks);
// console.log(cities);
// console.log(mixed[4]);
// console.log(nums);

//PART 2 Access

// console.log(fruits[0]); // Output: apple
// console.log(fruits[5]); // Output: undefined
// console.log(fruits[fruits.length-1]);
// console.log(fruits.length);

//PART 3 MUTATE

fruits[0] = "Apricot";
//console.log(fruits); // Output: ["Apricot", "banana", "cherry", "date", "elderberry"]

//PART 4 — push / pop / shift / unshift

fruits.push("fig");

fruits.push("grape","honeydew");

//console.log(fruits); // Output: ["Apricot", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"]

fruits.pop();

//console.log(fruits); // Output: ["Apricot", "banana", "cherry", "date", "elderberry", "fig", "grape"]

fruits.shift();

//console.log(fruits); // Output: ["banana", "cherry", "date", "elderberry", "fig", "grape"]

fruits.unshift("kiwi");

//console.log(fruits); // Output: ["kiwi", "banana", "cherry", "date", "elderberry", "fig", "grape"]

// Quick reference
// Method  Where   Action  Returns
// push    End     Add     New length
// pop     End     Remove  Removed item
// shift   Start   Remove  Removed item
// unshift Start   Add     New length

//Part 5 Array Methods

let students = ["John", "Jane", "Jack", "Jill"];

students.splice(2,2, "James", "Jasmine");

//console.log(students); // Output: ["John", "Jane", "James", "Jasmine", "Jill"]

students.forEach((student, index) => {
    if (index === 0) {
        //console.log(`First student: ${student}`);
    }
    else if (index === students.length - 1) {
        //console.log(`Last student: ${student}`);
    }
});

//map — transform every item, return new array

let StudMarks = [50, 60, 75, 85, 90];
StudMarks = StudMarks.map(mark=>{
    return mark+5;
});

//console.log(StudMarks); // Output: [55, 65, 80, 90, 95]

//filter — keep only items that pass a condition

let highMarks = StudMarks.filter(mark=>{
    return mark>75;
});
//console.log(highMarks); // Output: [80, 90, 95]

let products = [{ name: "Laptop", price: 1000 }, { name: "Phone", price: 500 }, { name: "Tablet", price: 750 }, { name: "Monitor", price: 300 }];

//console.log(products[0].name); // Output: { name: "Laptop", price: 1000 }

 let affortableProducts = products.filter(product => {
    return product.price < 999;
 });   

 //console.log(affortableProducts); // Output: [{ name: "Phone", price: 500 }, { name: "Tablet", price: 750 }, { name: "Monitor", price: 300 }]

//  reduce — boil entire array down to ONE value
// Most powerful method. Takes all items and combines them into a single result — a total, average, object, anything.

//will see later


// find — get the FIRST item that matches
// Returns the first matching item, not an array.

// Chaining methods together
// This is how real-world code looks:

let studentsNew = [
  { name: "Ashok", marks: 85 },
  { name: "Raj",   marks: 42 },
  { name: "Priya", marks: 91 },
];

let topper = studentsNew.find(s=> s.marks>50);

console.log(topper); // Output: { name: "Ashok", marks: 85 }

let students = [
  { name: "Ashok", marks: 85 },
  { name: "Raj",   marks: 42 },
  { name: "Priya", marks: 91 },
  { name: "Kumar", marks: 55 },
  { name: "Devi",  marks: 30 },
];

// Get names of passed students, sorted by marks
let passedNames = students
  .filter(s => s.marks >= 50)       // keep passed
  .map(s => s.name);                // get names only

console.log(passedNames); // ["Ashok", "Priya", "Kumar"]

// Get total marks of passed students only
let passedTotal = students
  .filter(s => s.marks >= 50)
  .reduce((sum, s) => sum + s.marks, 0);

console.log(passedTotal); // 231


// The big picture
// Method  Returns     Changes original?   Use for
// forEach Nothing     No                  Just looping
// map     New array   No                  Transforming items
// filter  New array   No                  Selecting items
// reduce  Single value No                  Totals, combining
// find    Single item   No                  Finding one match
// push    New length    ✅ Yes              Adding to end
// pop     Removed item  ✅ Yes              Removing from end
// shift   Removed item  ✅ Yes              Removing from start
// unshift New length    ✅ Yes              Adding to start