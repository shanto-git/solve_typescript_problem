//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

//Solve :

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem 2:Write a function reverseString that takes a string as input and returns the reversed version of that string.

function reverseString(strings: string): string {
  return strings.split("").reverse().join("");
}

console.log(reverseString("typescript"));

//Problem 3:Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = number | string;

let checkType = (type: StringOrNumber) => {
  if (typeof type === "string") {
    return "String";
  } else {
    return "Number";
  }
};

console.log(checkType("Hello"));
console.log(checkType(42));

//Problem 4: Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

type user = { id: number; name: string; age: number };
const user: user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
console.log(getProperty(user, "name"));

//Problem 5: Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

 function toggleReadStatus(b: Book){
    return {
      ...b,
      isRead: true
    }

 }

 const myBook:Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 }

 console.log(toggleReadStatus(myBook));


 //Problem 6: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.


class Person{
  name: string;
  age: number;

  constructor(name:string, age:number){
    this.name= name;
    this.age= age;
  }
}

class Student extends Person{
  grade: string

  constructor(name:string, age:number, grade:string){
    super(name, age);
    this.grade = grade
  }

  getDetails(){
    return{
    name:this.name,
    age: this.age,
    grade: this.grade
  }
  }

}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
