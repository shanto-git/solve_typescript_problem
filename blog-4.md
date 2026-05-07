Object-Oriented Programming বা OOP-এর চারটি Pillar কীভাবে বড় TypeScript Project-এর Complexity কমায়?


একটা বড় Application-এর Structure যদি ভালো না হয় তা হলে ওই Application-এর ক্ষেত্রে Code manage করা কঠিন হয়ে যায়।
তাই এই সমস্যার সমাধানে Object-Oriented Programming (OOP) চারটি Pillar গুরুত্বপূর্ণ ভূমিকা রাখে।

Object-Oriented Programming বা OOP- এর চারটি pillar হলো:-
১.Inheritance
২.Polymorphism
৩.Abstraction
৪.Encapsulation

এই concept-টি একটা বড় TypeScript project-কে আরও scalable এবং maintainable করে তোলে।

১.Inheritance কি?
যাকে বলে পৈত্রিক সুত্রে পাওয়া অর্থাৎ,যেখানে একটি class অন্য আরেকটি class-এর properties এবং methods ব্যবহার করতে পারে।

ধরি,
class Animal {
  move() {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

এখানে Dog class Animal class-এর method inherit করেছে অর্থাৎ, পৈত্রিক সুত্রে পেয়ে কাজ চালিয়ে নিছে।


২.Polymorphism কি?
এর মাধ্যমে একই method different behavior দেখাতে পারে অর্থাৎ, একই method বা function বিভিন্ন class-এ ভিন্নভাবে কাজ করতে পারে।


ধরি,
class Animal {
  sound() {
    console.log("Animal Sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

এখানে sound() method-টি different output দিবে।


৩.Abstraction কি 
এটা মুলত জটিল implementation গুলো লুকিয়ে শুধু দরকারি অংশ expose করে অর্থাৎ, জটিল যে implementation details থাকে তা লুকিয়ে শুধুমাত্র দরকারি functionality দেখাবে।

ধরি,
abstract class Payment {
  abstract pay(): void;
}
এখানে ব্যবহারকারী শুধু জানবে pay() method আছে ভিতরে কি logic কাজ করছে তা জানার দরকার নেই।


৪.Encapsulation কি?
Encapsulation হলো এমন একটা জিনিস যেখানে তুমি তোমার জিনিসপত্র একটা লক করা বক্সে রাখলে, বাইরে থেকে কেউ সরাসরি সেটা নাড়াতে পারবে না শুধু তুমি যদি দরজা খুলো, তখনই ভেতরের জিনিস ব্যবহার করা যাবে।
অর্থাৎ, যেখানে data এবং related methods একই class-এর ভিতরে রাখা হয় এবং direct access নিয়ন্ত্রণ করা হয়।

