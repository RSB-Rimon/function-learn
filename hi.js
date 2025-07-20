

// function addition(a,b){

//     var sum = a + b;
//     console.log(sum)

// }
// addition(5,8)

// function sub(a,b){

//     var sum = a - b;
//     // console.log(sum)
// return sum;


// }

// var v= sub(45,8)
// console.log(v)

// let names = ["Rimon","Uzzal ","Bijon ","Sowrov","Sajon"]

// for(let i=0;i<names.length; i++){
//     console.log(names[i])
// }
function highScroes(number){
    var max =number[0]

    for(var i =0; i<number.length; i++){
        if(max <number[i]){
            max =number[i]
        }
    }

}
var number=[44,66,25,15,45]
highScroes(number)