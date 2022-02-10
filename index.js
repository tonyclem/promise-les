// In JavaScript, a promise is an object that returns a value that you hope to receive in the future, but not now.

// Because the value will be returned by the promise in the future, the promise is very well-suited for handling asynchronous operations.

// It’ll be easier to understand the concept of JavaScript promises through an analogy.

// Example 1
let completed = true;

let learnJS = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (completed) {
      resolve("I have completed learning JS.");
    } else {
      reject("I haven't completed learning JS yet.");
    }
  }, 1000);
});

console.log(learnJS);

// Example 2
function onSucces() {
  console.log("Success!");
}

function onError() {
  console.log("ooops Sorry Error");
}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log()
    resolve();
  }, 2000);
});

promise.then(onSucces);
promise.catch(onError);
