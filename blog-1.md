Title: Typescript-এ কেন any-কে type sefety hole বলা হয় এবং কেন Typescript-এ unknown নিরাপদ ও Type narrowing কি।


Typescript মুলত type safety এর জন্য ব্যবহার করা হয়। কেননা Typescript আমাদেরকে compile time-এ ভুল ধরতে সাহায্য করে এবং কোডকে Maintainable করে । কিন্তু Typescript- এ কিছু কিছু type আছে যা ভুল ভাবে ব্যবহান করলে কোডের Maintain বা Security নষ্ট হতে পারে।
তারই মধ্যে দুটি type হলো any এবং unknown.

আমরা মুলত যা যা জানবো:-

১. any-কে কেন “Type Safety Hole” বলা হয়।
২. কেন unknown নিরাপদ
৩. Typescript-এ Type Narrowing কী এবং কীভাবে কাজ করে


any-কে কেন “Type Safety Hole” বলা হয়:-

Typescript-এ any ব্যবহার করলে তা variable-এর type checking বন্ধ করে দেয়। অর্থাৎ TypeScript বুঝতে পারে না variable-এ মুলত কী ধরনের data রাখা আছে।

একটা Example দেখাই

let value: any = "Hello World";
value.toFixed(2);

এখানে value যদিও একটি string, কিন্তু আমরা number-এর method toFixed() ব্যবহার করেছি।
লক্ষ করে দেখুন তবুও TypeScript কোনো error দেখাছ্ছে না কিন্তু runtime-এ application crash করবে।
এ কারণেই any-কে Type Safety Hole বলা হয়। কারণ এটি TypeScript-এর type checking bypass করে দেয়।


এখন আসি unknown কেন নিরাপদ:-

আমরা unknown-কে বলতে পারি safer alternative
যখন আমরা unknown use করি তখন unknown আমাদের return করে আমি জানি না এইটা কোন Type-এর Data তাই data ব্যবহার করার আগে TypeScript আমাদের type check করতে বাধ্য করে।

ধরি,
let value: unknown = "Hello";

value.toUpperCase();

এখানে সরাসরি method ব্যবহার করা যাবে না প্রথমে type verify করতে হবে।
যেমন- 
if (typeof value === "string") {
  console.log(value.toUpperCase())
}
এখানে TypeScript বুঝতে পারছে value একটি string


Type Narrowing মুলত কী? খায় নাকি মাথায় দেয়?
এইটা মুলত এই ‍দুটোর কিছুই করে না।

Type Narrowing হলো এমন একটি প্রক্রিয়া যেখানে condition ব্যবহার করে TypeScript variable-এর নির্দিষ্ট type নির্ধারণ করে।

অর্থাৎ আমাদের condition ব্যবহার করে variable-এর একটি নির্দিষ্ট type নির্ধারন করা হয়।

ধরি,
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

এখানে if ব্লকে value = string এবং else ব্লকে value = number
সুতরাং TypeScript condition দেখে type নির্ধারণ করছে, এটিই মুলত Type Narrowing

এখন আসি Type narrowing-এর কাজ কী
১.runtime error কমাতে সাহায্য করে
২.safer code লিখতে সাহায্য করে
৩.autocomplete উন্নত করতে সাহায্য করে
৪.unpredictable data safely handle করতে সাহায্য করে


Conclusion:-
TypeScript-এ any ব্যবহার করলে type safety নষ্ট হয়ে যায়, তাই এটি “Type Safety Hole” নামে পরিচিত।

অন্যদিকে unknown safer কারণ এটি data ব্যবহার করার আগে type checking করতে বাধ্য করে।

আর Type Narrowing TypeScript-কে variable-এর সঠিক type বুঝতে সাহায্য করে, ফলে কোড আরও নিরাপদ এবং reliable হয়।