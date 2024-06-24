//use for single line comment
/* use for
multi line comment */
/*
var a,b,c
a = 1
b = 2
var c = 3

var z = 11, y = 12, x = 13;
var d = 10, e = 20, f = 30
//--------------------
console.log("a =", a)
console.log("b = " + b)
console.log("c = ", c)

console.log("a + b = ",a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a % b = ", a % b) // the modulus 
console.log("a / b = ", a / b)
console.log("a before ++ =",a++ ,"and a after ++ =",a)
console.log("a before -- =",a-- ,"and a after -- = ",a)
// in the code line below there's very important issue need to take care of is when using + with string and number
console.log("special case of concatenation letter z with a value = ", "z"+a)
//--------------------
console.log("a == b => ", a == b)
console.log("a != b => ", a != b)
console.log("a > b => ", a > b)
console.log("a < b => ", a < b)
console.log("a >= b => ", a >= b)
console.log("a <= b => ", a <= b)
//--------------------
y = true
z = false
console.log("y && z => ", y && z)
console.log("y || z => ", y || z)
console.log("!(y && z) => ", !(y && z))
//----------------------
w = 2
x = 3
y = ~x
z = -12
omega = 12
// This function is used to convert any dec. to binary and print it as string.
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
console.log("w = 2 => " , dec2bin(2))
console.log("x = 3 => " , dec2bin(3))
console.log("w & x => ", w & x)
console.log("w | x => ", w | x)
console.log("w ^ x => ", w ^ x)
console.log("~x => ",  ~x, dec2bin(y))
console.log("w << 1 => ", w << 1)   // left shift 
console.log("w >> 1 => ", w >> 1)   // right shift
console.log("w >>> 1 => ", w >>> 1) // right shift with zero
console.log("omega: " + dec2bin(omega))
console.log("z: " + dec2bin(z))
//-----------------------
d = (a > b) ? a : c
console.log("d =", d)
//-----------------------
if (a > b) {
    console.log("a > b")
}else if (a < b){
    console.log("a < b")
}else{
    console.log("unable to determine")
}
//-----------------------
e = 5
switch (e) {
    case 1:
    console.log("1")
    break
    case 2:
    console.log("2")
    break
    case 3:
    console.log("3")
    break
    case 4:
    console.log("4")
    break
    case 5:
    console.log("5")
    break
    default: console.log("Default")
}
//-----------------------
f = 0
while(f < 5){
  console.log(f)
  f += 1
}
//-----------------------
g = 5
do {
  console.log(g)
}while (g < 5)
//-----------------------
for(h = 101; h <= 102; h++){
  console.log(h)
}

//-----------------------
j = 0
while(j < 8){

  if(j == 4){
    console.log("we reach to #4 so we will use continue...")
    j += 1  //it's to important to increase counter here or we will fall into infinty loop
    continue;
  }
  if(j == 7){
    console.log("we reach to #7")
  }
  console.log(j)
  j += 1
}
//-----------------------
console.log("Using labels") // it used with break and continue and must be prefix for a block of code 
outerloop:
for(k = 0; k <= 4; k++){
    console.log(k)
    innerloop:
    for(l = 10; l <= 15; l++){
    if(l == 14) break;
    if(l == 13) break innerloop
    if(k == 4) break outerloop
    console.log(l)
    }
}
console.log("we are out of outer loop")
//-----------------------
function myfunc(m){
    console.log("Hello ", m)
}
myfunc("Mustafa")
//-----------------------

// to create object in javascript
//<var_type> <var_name> = {};

const person = {
    name : 'Max',
    age : 29,
    greet : () => {
        console.log('Hi, I am ' + this.name)
    }
};

console.log(person);
person.greet();


console.log("working with oop")
var employee = new Object()      //<-- instantiation from Object
var books = new Array("C++","Perl","Java")
var day = new Date("August 15, 1947")

console.log(employee)
console.log(books)
console.log(day)

var book = new Object()
book.subject = "Perl"
book.author = "Mustafa"
console.log(book)
console.log(book.subject)
console.log(book.author)

//Another way to create object with user-defined name_function
function addPrice(amount){
    //this.price = amount
    with(this){
        price = amount
    }
}

function book(title, author){
    this.title = title
    this.author = author
    this.price = 0   //used when we use with keyword above.
    this.addPrice = addPrice
}

var myBook = new book("Perl","Mustafa")
myBook.addPrice(100)

//console.log(myBook)
console.log(myBook.title)
console.log(myBook.author)
console.log(myBook.price)

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())

let x = this;
console.log(x)

function myFunction() {
    return this;
}
console.log(myFunction())

//-----------------------

var a = 5;
console.log(a); // 5
{
    var a = 3;
    console.log(a); // 3
}
console.log(a); // 3

let a = 5;
console.log(a); // 5
{
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 5

var a = 2;
for(var a = 0; a <= 3; a++) {
    console.log('hello');
}
console.log(a); // 3

let a = 2;
for(let a = 0; a <= 3; a++) {
    console.log('hello');
    //console.log(a) //3
}
console.log(a); // 2

var a = 5; // 5
console.log(a)
var a = 3; // 3
console.log(a)

let a = 5;
let a = 3; // error

x = 5
console.log(x)
var x

x = 3
console.log(x)
let x // error
//-----------------------
const summary =  (usrName, usrAge, usrhasHobby) => {
    return(
    'Name is ' +
    usrName +
    ', age is ' +
    usrAge +
    'and the user has hobbies: ' +
    userHasHobby
    );
}
//-----------------------

const add = (a,b) => a + b;  // ommit return and curly braces
const addOne = a => a + 1;   // we have one parameter
const addRandome = () => 1 + 2; // no prarmeters
//-----------------------

const hobbies =  ['Sports','Cooking']
for (let hobby of hobbies){			// Using 'of' retrieve the element itself.
    console.log(hobby);
}

// Another example.
const books =  ['C++','C']
for(let book in books){					// Using 'in' retrieve index of the element.
  console.log(book)
}
//-----------------------

const hobbies =  ['Sports','Cooking']
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
//-----------------------
const hobbies = ['Sports', 'Cooking'];  // hobbies is reference to the memory place where values stored.
hobbies.push('Programming')
console.log(hobbies);
//-----------------------

const hobbies = ['Sports', 'Cooking'];
const copiedArray1 = [hobbies];
const copiedArray2 = [...hobbies];
console.log(copiedArray1);		 //<-- [['Sports','Cooking']]
console.log(copiedArray2)
//-----------------------

const toArray1 = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
};
console.log("toArray1",toArray1(1,2,3,4));  //<-- result [1,2,3] it will not take the 4th element.

const toArray2 = (...args) => {
    return args;
}
console.log("toArray2",toArray2(1,2,3,4));  //<-- result [1,2,3,4] it will not take the 4th element.
//-----------------------

const personData = {
    name : "Mustafa",
    job : "software engineer",
    age : 43
}

const printName = ({name}) => {
    console.log(name)
}
printName(personData)

//-----------------------
class personal{
    constructor(name, age, job){
        this.name = name
        this.age = age
       this.job = job
    }
}
mustafa = new personal('mustafa',43,'s.w. engineer')
console.log(mustafa)
console.log(mustafa.name, mustafa.age, mustafa.job)

//-----------------------

function firstFunc(callFun){
    console.log("we are in the firstFunc")
    callFun('call secondFunc from firstFunc')
  }

  function secondFunc(p2){
    console.log("secondFunc: ",p2)
  }
  
  firstFunc(secondFunc)	// pass secondFunc as argument to firstFunc
//-----------------------

const myTimeout = setTimeout(() => {
    console.log("Hello Mustafa!")
}, 3000);   

//-----------------------

const fetchData = callback => {
    setTimeout(() => {
        callback('Done');
    },1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);


console.log('Hello!');
console.log('Hi!');

//-----------------------
function myDisplayer(some) {
   console.log(some)
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
//   myFirst();
//   mySecond();

mySecond();
myFirst();

//-----------------------

function myDisplayer(some) {
    console.log("=====myDisplayer=====")
    console.log(some);
  }
  
function myCalculator(num1, num2, myCallback) {
console.log("=====myCalculator=====")
let sum = num1 + num2;
myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer);

//-----------------------


function myDisplayer(some) {
    console.log("=====myDisplayer=====")
    console.log(some)
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

//-----------------------

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
myPromise.then(function(value) {
console.log("value = ",value)
});

//-----------------------

function myDisplayer(some) {
    console.log("=====myDisplayer=====")
    console.log(some)
}

async function myFunction() {
    return "Hello";
  }
myFunction().then(
function(value) {myDisplayer(value);},
function(error) {myDisplayer(error);}
);

//-----------------------
*/

async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    console.log(await myPromise)
  }

myDisplay();

//-----------------------
