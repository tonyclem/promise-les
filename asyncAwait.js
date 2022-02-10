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

// async function init() {
//   await createPost({ title: "Post three", body: "This is post three" });

//   getPost();
// }

// init();

// Async await / fetch

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const date = await res.json();
  console.log(date);
}

fetchUsers();
