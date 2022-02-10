try {
  throw new Error("We Made an error");
} catch (error) {
  console.error(error.message);
} finally {
  // we alway run no matter what
  console.log("finally Block");
}

// Error try
// error.stack
// error.name
// error.message

try {
  try {
    throw new Error("oops");
  } catch (e) {
    console.log("inner", e.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}
