try {
  function foo() {
    foo();
  }
  foo();
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// Reference Error

try {
  nonExistingFunction("I am not declared");
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// SyntaxError
try {
  JSON.parse("invaild JSON");
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// TypeError
try {
  let somehting = undefined;
  console.log(somehting);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// URLError
try {
  decodeURIComponent("%");
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// Custom Error
class CustomErro extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
    this.message = message;
  }
}

try {
  throw new CustomErro("Something happened");
} catch (error) {
  console.log(error.message);
}
