const numbers = [3,5,7,9,11];
// const output = [];
// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// const result1 = numbers.map(x=> x*x)
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);
// console.log(result1);
const result = numbers.filter(x => x > 5);
const isThere = numbers.find(x=> x > 5);
console.log(isThere)
console.log(result)



