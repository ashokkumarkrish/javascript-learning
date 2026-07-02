//if/else
    let age = 25;
if (age > 25){
    console.log("Age is greater than 25");
} else if (age===25){
    console.log("Age is equal to 25");
} else {
    console.log("Age is less than 25");
}

let balance = 1000;
let price  = 20000;

//console.log(balance>=price?"Purchase successful":"Insufficient funds");

let day = "Wednesday";

switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Today is weekend");
        break;
    default:
        console.log(`Today is a weekday: ${day}`);
}
//Always write break at the end of each case. Without it, JavaScript keeps running into the next case even if it doesn't match — called fall-through.

//Ternary operator

let year = 1999;

if (year >= 2000){
    console.log("Year is 2000");
}else{
    console.log("Year is less than 2000");
}

let message  = year>=2000?"Year is 2000":"Year is less than 2000";
console.log(message);

//Logical Operators — && || !

let hasTicket = true;
let hasId = true;

if(hasTicket && hasId){
    console.log("You can enter the concert");
}
else{
    console.log("You cannot enter the concert");
}

let isWeekend = true;
let isHoliday = false;

if(isWeekend || isHoliday){
    console.log("You can relax");
}

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in first");
}

let userCity = null;
let defaultCity = "Chennai";

let city = userCity || defaultCity;
console.log(city); // Chennai  ← uses default because userCity is null