let student = ["Ashok",25,"Chennai",true];

let student1 = {
    name:"Ashok",
    age:25,
    city:"Chennai",
    isStudent:true
}

//PART 1 — Object Literals

let person = {
    name:"John",
    age:30,
    city:"New York",
    isStudent:false
};

let person2 = {
    name:"Jane",
    age:28,
    city:"Los Angeles",
    isStudent:true,
    greet:function(){
        console.log("Hello, my name is " + this.name);
    }
};

person2.greet(); // Output: Hello, my name is Jane

//PART 2 — Dot Notation vs Bracket Notation

let person3 = {
    name:"Jack",
    city:"Chicago",
    isStudent:false
};  

console.log(person3.name); // Output: Jack
console.log(person3["age"]); // Output: 35

person3.age=35;

person3["city"] = "Houston";
console.log(person3.city); // Output: Houston
console.log(person3.age); // Output: 35

delete person3.isStudent;
console.log(person3.isStudent); // Output: undefined

//Bracket notation — use when key is dynamic
let person4 = {
  name: "Ashok",
  age: 25,
};

// Access with bracket
console.log(person4["name"]); // Ashok

// Use when key comes from a variable
let key = "age";
console.log(person4[key]); // 25  ← this is why bracket notation exists

// Use when key has spaces (bad practice but valid)
let obj = { "full name": "Ashok Kumar" };
console.log(obj["full name"]); // Ashok Kumar
//console.log(obj.full name);    // ❌ SyntaxError

//When to use which
// ✅ Use dot — when you know the key name
console.log(person4.name);

// ✅ Use bracket — when key is in a variable
let field = "name";
console.log(person4[field]);

//PART 3 — Nested Objects
let student2 = {
  name: "Ashok",
  age: 25,
  address: {
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: 600001
  },
  marks: {
    maths: 90,
    science: 85,
    english: 78
  }
};

// Access nested values
console.log(student2.address.city);       // Chennai
console.log(student2.marks.maths);        // 90
console.log(student2["address"]["state"]); // Tamil Nadu

// Update nested value
student2.address.city = "Coimbatore";
console.log(student2.address.city); // Coimbatore

// Add new nested property
student2.marks.history = 88;
console.log(student2.marks);
// { maths: 90, science: 85, english: 78, history: 88 }

//Array of objects — the most common real-world pattern:
let students = [
  {
    name: "Ashok",
    marks: { maths: 90, science: 85 }
  },
  {
    name: "Priya",
    marks: { maths: 78, science: 92 }
  },
];

// Access
console.log(students[0].name);           // Ashok
console.log(students[1].marks.science);  // 92

// Loop through

students.forEach(student=>{
  console.log(`${student.name} scored ${student.marks.maths} in maths`);
});

// Ashok scored 90 in maths
// Priya scored 78 in maths 

//PART 4 — JSON.stringify and JSON.parse
// JSON is how data is sent between a server and a browser — like a universal language for data. It looks exactly like a JavaScript object but it's actually just a string.

// JSON.stringify — object → string

// Use when sending data to a server or saving to storage.

let student3 = {
  name: "Ashok",
  age: 25,
  city: "Chennai"
};

let jsonstring = JSON.stringify(student3);
console.log(jsonstring); // {"name":"Ashok","age":25,"city":"Chennai"}

// JSON.parse — string → object

// Use when receiving data from a server.

let jsonstring2 = '{"name":"Priya","age":22,"city":"Mumbai"}';

let jsonParse = JSON.parse(jsonstring2);
console.log(jsonParse.name); // Priya

console.log(typeof jsonParse); // object

//Real-world example — saving to localStorage

let user = {
  name: "Ashok",
  age: 25,
  city: "Chennai"
};

// Save to localStorage (only accepts strings)
//localStorage.setItem("User", JSON.stringify(user));

// Read back from localStorage
//let userFromStorage = JSON.parse(localStorage.getItem("User"));
//console.log(userFromStorage); // { name: "Ashok", age: 25, city: "Chennai" }    

//PART 5 — Spread Operator

//Copies properties from one object into another. Very heavily used in React.

let person5 = { name: "Ashok", age: 25 };

// ❌ Wrong way — both variables point to same object
// let copy = person5;
// copy.age = 99;
// console.log(person5.age); // 99 ← original changed!
// console.log(person5); 
// console.log(copy); 

// ✅ Correct way — use spread operator
let copy2 = {...person5};
copy2.age = 99;

console.log(person5.age); // 25 ← original unchanged!
console.log(person5); 
console.log(copy2);

let basicInfo = { name: "Ashok", age: 25 };
let contactInfo = { email: "ashok@email.com", city: "Chennai" };

let fullProfile = { ...basicInfo, ...contactInfo };
console.log(fullProfile);
// { name: "Ashok", age: 25, email: "ashok@email.com", city: "Chennai" }

//Update one field without changing others

//This is used constantly in React state updates:

let student6 = {
  name: "Ashok",
  age: 25,
  city: "Chennai"
};

// Update only city, keep everything else
let updated = { ...student6, city: "Mumbai" };
console.log(updated);
// { name: "Ashok", age: 25, city: "Mumbai" }
console.log(student6);
// { name: "Ashok", age: 25, city: "Chennai" } ← unchanged

updated.state = "TamilNadu";
console.log(updated);
// { name: "Ashok", age: 25, city: "Mumbai", state: "TamilNadu" }

// Spread with arrays too
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Concept	            Use for
// Object literal { }	Creating structured data
// Dot notation	        Accessing known keys
// Bracket notation	    Accessing dynamic/variable keys
// Nested objects	    Real-world structured data
// JSON.stringify	    Sending data / saving to storage
// JSON.parse	        Receiving / reading stored data
// Spread ...	        Copying and merging without mutation