## Creating Asynchronous HTTP Requests in JavaScript

#### The fetch() Method
```javascript
// Sends an asynchronous HTTP request to the target url
fetch(url)
  .then(() => {
    // Code called in the future when the request ends successfully
  })
  .catch(() => {
    // Code called in the future when an errors occurs during the request
  });
```

#### Under the hood: promises

When the fetch() method is executed, it immediately returns a promise, which is a 
wrapper for an operation whose result might be available in the future. 
A promise is in one of these states:
*pending: initial state, not fulfilled or rejected
*fulfilled: meaning that the operation completed successfully
*rejected: meaning that the operation failed

```javascript
getData()
  .then(a => filterData(a)) // Called asynchronously when getData() returns
  .then(b => processData(b)) // Called asynchronously when filterData() returns
  .then(c => displayData(c)) // Called asynchronously when processData() returns
  // ...
```

#### Example: retrieving a text file
```javascript
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    console.log(text); // Display file content in the console
  });
```

#### Dealing with errors
```javascript
fetch("http://non-existent-resource")
  .catch(err => {
    console.error(err.message);
  });
```

## Handling JSON 

#### JSON and javascript 
```javascript
// Define a JavaScript object
const plane = {
  manufacturer: "Airbus",
  model: "A320"
};
console.log(plane); // Display the object

const planeText = JSON.stringify(plane);
console.log(planeText); // Display the object as a JSON string
console.log(JSON.parse(planeText)); // Display the object
```
```javascript
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json"
)
  .then(response => response.json()) // Access and return response's JSON content
  .then(movies => {
    // Iterate on the movie array
    movies.forEach(movie => {
      // Display title of each movie
      console.log(movie.title);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
 ```
 ## Send Data to a Web Server 
 
 #### Sending form data
 
 ```javascript
 // Handle form submission
document.querySelector("form").addEventListener("submit", e => {
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();
  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);
  // Send form data to the server with an asynchronous POST request
  fetch("https://thejsway-server.herokuapp.com/animals", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});
```

```javascript
document.getElementById("buyButton").addEventListener("click", () => {
    // Create a new, empty FormData object
    const formData = new FormData();
    // Fill the object with key/value pairs
    formData.append("size", "L");
    formData.append("color", "blue");
    // Send data to the server
    fetch("https://thejsway-server.herokuapp.com/tshirt", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});
```

#### Sendind JSON data
```javascript 
// Create an array containing two objects
const cars = [
  {
    model: "Peugeot",
    color: "blue",
    registration: 2012,
    checkups: [2015, 2017]
  },
  {
    model: "Citroën",
    color: "white",
    registration: 1999,
    checkups: [2003, 2005, 2007, 2009, 2011, 2013]
  }
];

// Send this array as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/cars", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(cars)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
```
