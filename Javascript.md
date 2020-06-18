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

####string
```
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
