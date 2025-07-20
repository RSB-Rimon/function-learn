// function evenNumberFinderInArray(numbers) {
//   let i = 0;
//   const evenNumbers = [];
//   const oddNumbers = [];
//   while (i < numbers.length) {
//     let number = numbers[i];
//     if (number % 2 == 0) {
//       evenNumbers.push(number);
//     } else {
//       oddNumbers.push(number);
//     }
//     i++;
//   }
//   return { evenNumbers, oddNumbers };
// }

// let numbers = [1, 2, 3, 4, 5, 6];

// const result = evenNumberFinderInArray(numbers);
// console.log(result.evenNumbers);
// console.log(result.oddNumbers);




function evenNumberFinderInArray(){
     const evenNumbers = [];
     const oddNumbers = [];
     for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];

        if(number% 2==0){
             evenNumbers.push(number);
        }else{
            oddNumbers.push(number)
        }

     }
      return { evenNumbers, oddNumbers };


}



let numbers=[1,2,3,4,5,6,7,,8,9];

const result =evenNumberFinderInArray(numbers);
console.log("even",result.evenNumbers)
console.log("odd",result.oddNumbers)
