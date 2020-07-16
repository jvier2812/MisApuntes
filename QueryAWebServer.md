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
 
 
