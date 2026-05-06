//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

//Solve :

function filterEvenNumbers(numbers : number[]): number[]{
    return numbers.filter(number => number % 2 === 0);
}

 console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


 

//Problem 2:Write a function reverseString that takes a string as input and returns the reversed version of that string.



function reverseString(strings : string) : string{
    return strings.split("").reverse().join("");
};

console.log(reverseString('typescript'));


//Problem 3:Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.


type StringOrNumber = number | string;

let checkType = (type:StringOrNumber)=>{
    if( typeof type === "string"){
        return "String";
    }
    else{
        return "Number"
    }
}

console.log(checkType("Hello"));
console.log(checkType(42));




