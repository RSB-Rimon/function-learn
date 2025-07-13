function bigNumberFind(num1,num2){
    if(num1>num2){
        console.log("Big Number is :",num1)
    }else{
        console.log("Big Number is :",num2)
    }
}
bigNumberFind(30,55)

// small number find 
function smallNumberFind (num1,num2){
     if(num1<num2){
    console.log("small Number is :",num1)
}else{
    console.log("small Number is :",num2)
}
}
   smallNumberFind(4,1)

// odd and even number find 

function oddAndEvenNumberFind (num){
    if(num % 2==0){
        console.log(num,"is Even Number")
    }else{
        console.log(num,"is Odd Number")
    }
}
oddAndEvenNumberFind(6)


// Positive number and negative number find 

function positiveAndNegNumberFind(number){
    if(number>0){
        console.log(number,"is positive Number")
    }else if(number<0){
         console.log(number,"is Nagative  Number")
    }else{
         console.log(number,"is Zero")
    }

}
positiveAndNegNumberFind(-9)


// bignumberfin with arry and use function

function bigNumberFindArry(arr){
    let temp=arr[0]
    for(let number of arr){
        if(temp<number){
            temp = number
        }
    }
    return temp
}
let numbers =[5,8,6,99,4,222,77,555]

console.log("big number is:",bigNumberFindArry(numbers))