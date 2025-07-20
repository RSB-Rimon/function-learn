// // vatic.
const name = "Rimon Boydho ";
const age = 19;

console.log(`My name is ${name} and my age ${age}.`)

// Destructruing
const student = {
    name : "Rimon Boydho",
    rollNo : 777327,
    depertment : "CST",
    shift : "Morning"

}
const  {name, rollNo,depertment,shift}= student
console.log(name,rollNo,depertment,shift)

// Spread Oparator

const num1=[1,4,58,5];
const num2=[5,88,52,54];

console.log(...num1,...num2)

const person = {
    name : "Rimon Boydho",
    Roll : 8578
}

const updatePersone ={
    ...person,
    dep : "5th CST"
}
console.log(updatePersone)


const numbers =[10,20,30,40,50]

let temp = 0;

numbers.map((number, idx)=> ( 
    temp = temp+ number
));
console.log(temp)