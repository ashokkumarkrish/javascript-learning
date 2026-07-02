// Function declaration

function greet(name){
    console.log("Hello "+name);
}


greet("Ashok");

function addNumbers(a,b){
return a+b;
}

console.log(addNumbers(5,10)); //15

let result = addNumbers(20,30);
console.log(result); //50

// Function expression

sayHi();
 function sayHi(){
    console.log("Hello from function expression");
};
//sayBye(); // ReferenceError
 let sayBye = function() {
  console.log("Bye!");
};

// Arrow function

function multiply  (a,b)  {
    return a*b;
}

multiplyArrow = (a,b) =>  a*b;

console.log(multiply(5,10)); //50
console.log(multiplyArrow(5,10)); //50

sayHello = () => console.log("Hello from arrow function");
double = n=>n*2;
add = (a,b)=>a+b;

sayHello();
console.log(double(5));
console.log(add(5,10));

//return

function checkAge(age) {
  if (age >= 18) {
    return "Adult";   // stops here if age >= 18
  }
  return "Minor";     // only runs if above return didn't
}

console.log(checkAge(20)); // Adult
console.log(checkAge(15)); // Minor

function noReturn() {
  let x = 5; // does something but returns nothing
}

console.log(noReturn()); // undefined

//arrow funtion clear

//regular function

function add2(a,b){
return a+b;
}

console.log(add2(5,10)); //15

//arrow function
addarrow = (a,b)=>a+b;

console.log(addarrow(5,10)); //15

numbers = [1,2,3,4,5];

mappednumber = numbers.map(function(a){
return a*2
})

console.log(mappednumber); // [2,4,6,8,10]

mappednumberarrow  = numbers.map(a=>a*2);

console.log(mappednumberarrow); // [2,4,6,8,10]

let marks = [50,60,70,80,90];

passed = marks.filter(function(marks){
    return marks>50;
});

console.log(passed); // [60,70,80,90]

let passesarrow = marks.filter(mark=>mark>50);

console.log(passesarrow); // [60,70,80,90]