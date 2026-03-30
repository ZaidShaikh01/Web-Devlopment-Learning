const promise = new Promise((resolve, reject) => {
  // Do some Async task
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log('Async Task');
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error went wrong');
    }
  }, 1000);
});
promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise is resolved'));
