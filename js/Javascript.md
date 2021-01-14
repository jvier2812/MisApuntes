# Javascript
##### Javascript is not java
##### Javascript is an object-oriented languaje

### Javascrip placement 
##### internal
```
<head> 
  <script type="text/javascript">
    <!--your script-->
  </script> 
</head>
```
##### external
```
<head> 
  <script type="text/javascript" src="myscript.js"> </script> 
</head>
```

### Output 
```
  <script type="text/javascript">
    //THIS IS A COMMENT, LIKE A CPP OR JAVA COMMENT 
    //print text
    document.write("your output");
  
    //popup alert
    window.alert("tyour output");
  </script> 
```

### InnerHTML
InnerHTML function allows us to output data in an html element
```
  <script type="text/javascript">
    document.getElementById("HTML_ELEMENT_ID").innerHTML="NEW_VALUE";
  </script> 
```

### Javascript variables and operations
```
  <script type="text/javascript">
    //the value 10 is assigned to the variable: x 
    var x = 10;
    var y= 20;
    var z = x+y;
    //the text is assigned to the vaiable: textvar 
    var textvar = "This is a text"
  </script> 
```
#### operations
aritmetic operators:
+add, -sub, *mult, /division, %modulus, ++increment, --decrement, **power
precedence:
()brackets, **exponents, /division, *multiplications,+addition, -substraction


### Javascrip data types 
Numbers, srping, arrays, objects
```
var age=16; // number
var name="javier"; //string, must be between ""

//ARRAYS BASICS
var cars=["suzuki","toyota","volvo"] //array, must be between []
cars[1] = "bmw" // now, toyota is bmw
var carjapon1 = cars[0]; //carjapon = "susuzi"
cars.pop(); // delete last element: volvo
cars.shift(); // delete the first element: susuki
cars.push("element1"); //add a new element at the end
cars.unshift("element0"); //add a new element at the beginning
delete cars[1]; // delete the cars element at index 1
cars.sort(); // to sort alphabetical
cars.reverse(); // to sort in reverse order 


//OBJECTS

var person={id_text:"textvalue", age=50}; //object, between {}
var personage=person.age; // assign and access to an obect type

```

## strings
```javascript 
//use backslash to use special character, in this case, the quotes
document.write="we are \"los chupetines\" gaaaa";

//to add html code
document.write="<!--html code here-->"+ etc etc

//string length
var txt="ABCDEFGHIJKLMNÑOPQRTUVWXYZ";
document.write=txt.length;

//print arrays
array = ["ele1", "ele2", "ele3"]
document.write=array1.toString(); //output: ele1, ele2, ele3 
document.write=array.join(" * "); //output: ele1 * ele2 * ele3
```

#### manipulatin strings
```javascript

const originalWord = "Bora-Bora";
const lowercaseWord = originalWord.toLowerCase();
console.log(lowercaseWord); // "bora-bora"
const uppercaseWord = originalWord.toUpperCase();
console.log(uppercaseWord); // "BORA-BORA"

//turning a string into an array
const name = "Sarah";
const nameArray = Array.from(name);
nameArray.forEach(letter => {
  console.log(letter);
});

//breaking a string into parts 
const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(",");
console.log(months[0]);  // "Jan"
console.log(months[11]); // "Dec"
```

#### searching into a string 
```javascript
const song = "Honky Tonk Women";
console.log(song.indexOf("onk")); // 1
console.log(song.indexOf("Onk")); // -1 because of case mismatch

console.log(song.startsWith("Honk")); // true
console.log(song.startsWith("honk")); // false
console.log(song.startsWith("Tonk")); // false

console.log(song.endsWith("men")); // true
console.log(song.endsWith("Men")); // false
console.log(song.endsWith("Tonk")); // false
```

#### number

random numbers, bewteen 0 and 1
```
var number=Math.random()
```

min and max, round
```
var number = Math.min(1,2,3); // number = 1
number = Math.max(1,2,3); // number = 3
number = Math.round(15.6); // number = 16
number = Math.floor(15.6); // number = 15
```

#### comparison operators 
```
== equal to
=== equal value and equal type
!= not equal
!== not equal value or type
>greater than
<less than
>= greather than or equal to
<= less than or equal to
```

#### the for in loop
```
var txt = "";
var person = {fname="javier", lname="ramos", alias="j_vier"};
var x;
for (x in person)//{
    //the var x get the elements in person object
    txt += person[x] + " / ";
}
document.write(txt); //output: javier / ramos / j_vier
```


### Functions
BASIC
```
function MYFUNCTION(PARAMETERS){
//CODE
  return RETURNVALUE; 
}
```

#### anonymous functions
old
```javascript
// Assignment of an anonymous function to the myFunc variable
const myFunc = function(param1, param2, ...) {
  // Statements using param1, param2, ...
};

// Anonymous function call
// param1 value is set to arg1, param2 to arg2, ...
myFunc(arg1, arg2, ...);
```
fat arrow function
```javascript
const hello = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};
console.log(hello("William")); // "Hello, William!"
```
```javascript
// Minimalist to the max
const hello = name => `Hello, ${name}!`;

console.log(hello("Kate")); // "Hello, Kate!"
```
### Javascript Events 
```
//mouse clicks
onclick="<!--SCRIPT-->"
//mouse overs
onmouseover=""
//mouse outs
onmouseout=""
//key down

//document load

```

### Examples
#### Code to change the bg color when the page is refreshed 
```
var bgcolor=new Array("#FFFFFF","#000000","#FF0000","#00FF00","#0000FF");
document.body.style.background=bgcolor[Math.floor(Math.random()*bgcolor.length)];
```



## Objects 

#### Literal object 
Your can add methods (functions) 
```javascript
const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic",
  penFunction(){
  }
};
```


## Arrays


```javascript
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
const emptyArray = []; // Create an empty array
```

#### iterating into an array 

```javascript
//declare the array
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];


//using the for loop
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

//using the arrow function
movies.forEach(movie => { console.log(movie);}
);

//using for-of loop
for (const movie of movies) { console.log(movie);
}
```
#### updating an array

```javascript
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.push("Ghostbusters"); //movies[3] is Ghostbusters
movies.unshift("Titanic"); //movies[0] is Titanic
movies.pop() // Remove the last array element
movies.splice(0, 1); // Remove 1 element starting at index 0
```


## Javascript Classes

syntaxis
```javascript
class MyClass {
  constructor(param1, param2, ...) {
    this.property1 = param1;
    this.property2 = param2;
    // ...
  }
  method1(/* ... */) {
    // ...
  }
  method2(/* ... */) {
    // ...
  }
  // ...
}

const myObject = new MyClass(arg1, arg2, ...);
myObject.method1(/* ... */);
// 

```
example
```javascript

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points`;
  }
}

//using classes
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30); 
```

#### objects and prototypes 
```javascript 
const anObject = {
  myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);

// Create yetAnotherObject using anotherObject as a prototype
const yetAnotherObject = Object.create(anotherObject);

// myProp is found in yetAnotherObject's prototype chain (in anObject)
console.log(yetAnotherObject.myProp); // 2

// myOtherProp can't be found in yetAnotherObject's prototype chain
console.log(yetAnotherObject.myOtherProp); // undefined
```
Functional programming is about writing programs by combining functions expressing what the program should do, rather than how to do it.

## Array Operations 

#### The map() Method
```javascript 
const numbers = [1, 5, 10, 15];
// The associated function multiply each array number by 2
const doubles = numbers.map(x => x * 2);
console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(doubles); // [2, 10, 20, 30]
```

#### The filter() Method
```javascript 
const numbers = [1, 5, 10, 15];
// Keep only the number greater than or equal to 10
const bigOnes = numbers.filter(x => x >= 10);

console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(bigOnes); // [10, 15]
```

#### The reduce() Method
```javascript 
const numbers = [1, 5, 10, 15];
// Compute the sum of array elements
const sum = numbers.reduce((acc, value) => acc + value, 0);

console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(sum);     // 31
```

 
 
