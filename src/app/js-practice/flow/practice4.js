//for loop

 for (let i= 0; i<=5;i++){
     console.log("Value "+i);

    }   

//while loop

let j =1;
while(j<=5){
    console.log("value "+j);
    j=j+1;
}

//for of loop
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}


for(let fruit of fruits){
    console.log(fruit);
}

let name  = "Ashok";
for (let char of name){
    console.log(char);
}