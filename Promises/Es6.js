// Let variable
let a = 50;
let b = 100;
if (true) {
 let a = 60;
 var c = 10;
 console.log(a/c); // 6
 console.log(b/c); // 10
}
console.log(c); // 10
console.log(a); // 50

// Const variable
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
// LANGUAGES = "Javascript"; Shows error 
LANGUAGES.push('Java'); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']

//Arrow Functions

const myFunc= name =>{
    return "Hi "+name;
}
console.log(myFunc("Sreya"));
//Default parameters
let Func = (a, b = 10) => {
    return a + b; 
   }
console.log(Func(20));
console.log(Func(20,50));


// 4. For of loop
let arr = [2,3,4,1];
for (let value of arr) {
 console.log(value);
}

//5. Spread Attributes
let SumElements = (...arr) => {
    console.log(arr); 
   let sum = 0;
    for (let element of arr) {
     sum += element;
    }
    console.log(sum); 
   }
   SumElements(10, 20, 40, 60, 90);

// 6.Maps
var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);
NewMap.get('name'); 
NewMap.get('id'); 
NewMap.get('interest'); 

//Sets
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // We are adding duplicate value.
for (let element of sets) {
 console.log(element);
}
console.log("Length os set :" +sets.size); 
console.log(sets.has(1));
console.log(sets.has('b'));

// 7.Static methods
class Example {
    static Callme() {
    console.log("Static method");
    }
   }
   Example.Callme();

// Getters and Setters
class People {
    constructor(name) {
          this.name = name;
        }
        get Name() {
          return this.name;
        }
        set Name(name) {
          this.name = name;
        }
    }
    let person = new People("John");
    console.log(person.Name);
    person.Name = "Stephen";
    console.log(person.Name);
