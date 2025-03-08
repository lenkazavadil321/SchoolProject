const getRandomTsCode = () => {
  // Generate a random number between 1 and 10
  const num = Math.floor(Math.random() * 10) + 1;

  // Return the code based on the random number
  if (num === 1) {
    return "return 'Hello, world!';";
  } else if (num === 2) {
    return "console.log('This is a log message.');";
  } else if (num === 3) {
    return "const myVar = 'this is a variable'; console.log(myVar);";
  } else if (num === 4) {
    return "function add(a, b) { return a + b; } console.log(add(2, 3));";
  } else if (num === 5) {
    return "const myArray = [1, 2, 3]; console.log(myArray);";
  } else if (num === 6) {
    return "const myObject = { name: 'John', age: 30 }; console.log(myObject);";
  } else if (num === 7) {
    return "class Animal { constructor(name, species) { this.name = name; this.species = species; } } const cat = new Animal('Mr. Whiskers', 'cat'); console.log(cat);";
  } else if (num === 8) {
    return "const myFunction = () => { console.log('This is a function'); }; myFunction();";
  } else if (num === 9) {
    return "import * as fs from 'fs'; const data = fs.readFileSync('data.txt', 'utf8'); console.log(data);";
  } else {
    return "const myPromise = new Promise((resolve, reject) => { resolve('This is a promise'); }); myPromise.then((result) => { console.log(result); });";
  }
}
