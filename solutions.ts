//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

//Solve :

function filterEvenNumbers(numbers : number[]): number[]{
    return numbers.filter(number => number % 2 === 0);
}

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
 console.log(result);


 


