function add(num1,num2){
    console.log(...arguments);
    return num1 + num2 + arguments[3]
}

const result = add(2,3,5,7,9)
console.log(result)