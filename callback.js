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
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

getPost();

createPost({ title: "Post three", body: "This is post three" }, getPost);
