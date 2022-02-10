function add(x, y) {
  return x + y;
}

function addFive(x, addReference) {
  return addReference(5, x);
}
console.log(addFive(10, add));

// Any function that receive function is call hight order function, and the function you're passing in is call a callback function
function hightOrderFunction(x, callback) {
  return callback(5, x);
}

console.log(hightOrderFunction(10, add));
