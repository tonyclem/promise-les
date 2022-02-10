const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

const getPost = () => {
  // declearing time it we talk before it deplayed
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    // passing the output to the innerHtml element
    document.body.innerHTML = output;
  }, 1000);
};

// Creating a new post
const createPost = (post, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // if error is set by default to false
      const error = false;
      // if error is true return resolve
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

getPost();

// createPost({ title: "Post three", body: "This is post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((value) =>
  console.log(value)
);
